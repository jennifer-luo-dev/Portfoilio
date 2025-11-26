import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message)
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.RESEND_TO;
    if (!apiKey || !from || !to)
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 }
      );

    const html = `
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(
      email
    )}&gt;</p>
      <hr/>
      <div>${escapeHtml(message)}</div>
    `;

    const payload = {
      from,
      to: [to],
      subject: `Portfolio message from ${name}`,
      html,
    };

    const r = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const bodyText = await r.text();
      return NextResponse.json(
        { error: "Failed to send", detail: bodyText },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
