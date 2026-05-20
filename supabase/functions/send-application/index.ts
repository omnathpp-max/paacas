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
    const {
      firstName, lastName, email, phone, location,
      experience, role, qualification, linkedin, about,
      resumePath, resumeFilename,
    } = await req.json();

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

    // Download the resume from Storage to attach to the email
    let attachments: { filename: string; content: string }[] = [];
    if (resumePath) {
      const { data: fileData, error: fileError } = await supabase.storage
        .from("resumes")
        .download(resumePath);

      if (!fileError && fileData) {
        const buffer = await fileData.arrayBuffer();
        const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
        attachments = [{ filename: resumeFilename || "resume.pdf", content: base64 }];
      }
    }

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
        attachments,
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
            ${attachments.length > 0
              ? '<p style="margin-top:24px;color:#666;font-size:13px;">Resume attached to this email.</p>'
              : '<p style="margin-top:24px;color:#e53e3e;font-size:13px;">Resume could not be attached — please follow up with the applicant directly.</p>'
            }
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }

    // Clean up the file from storage after sending
    if (resumePath) {
      await supabase.storage.from("resumes").remove([resumePath]);
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
