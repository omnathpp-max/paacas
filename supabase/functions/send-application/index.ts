import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, location, experience, role, qualification, linkedin, about } = await req.json();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    await supabase.from("job_applications").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      location,
      experience: String(experience),
      role: role || "",
      qualification,
      linkedin: linkedin || "",
      about,
    });

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "PAACAS Website <no-reply@paacas.com>",
        to: ["aswinpa@paacas.com"],
        reply_to: email,
        subject: `New Job Application from ${firstName} ${lastName}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#1a1a1a;margin-bottom:24px;">New Job Application</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:140px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${email}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${phone}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Location</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${location}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Experience</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${experience} years</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Current Role</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${role || "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Qualification</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${qualification}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">LinkedIn</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${linkedin ? `<a href="${linkedin}" style="color:#3a7c47;">${linkedin}</a>` : "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#666;vertical-align:top;">About</td>
                <td style="padding:10px 0;color:#1a1a1a;">${about.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
            <p style="margin-top:24px;color:#666;font-size:13px;">Note: Resume was attached by the applicant — please follow up directly to request the file.</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
