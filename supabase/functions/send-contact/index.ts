import "jsr:@supabase/functions-js/edge-runtime.d.ts";

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
    const { name, email, phone, service: serviceKey, message } = await req.json();

    const serviceLabels: Record<string, string> = {
      launch: "Startup Launch & Compliance",
      tax: "Tax Optimization & Structuring",
      cfo: "Virtual CFO & Growth Advisory",
      fema: "FEMA & Cross-Border Advisory",
      valuation: "Valuation & Transaction Support",
      other: "Other",
    };
    const service = serviceLabels[serviceKey] ?? serviceKey ?? "—";

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
        subject: `New enquiry from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#1a1a1a;margin-bottom:24px;">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:120px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${email}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-weight:500;">${service || "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#666;vertical-align:top;">Message</td>
                <td style="padding:10px 0;color:#1a1a1a;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
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
