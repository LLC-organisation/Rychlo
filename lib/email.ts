import nodemailer from "nodemailer";
import { marked } from "marked";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const TO = process.env.SMTP_USER ?? "info@akihlee.com";

// ── shared layout wrapper ────────────────────────────────────────────────────

function layout(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#09090b;font-family:system-ui,-apple-system,sans-serif;color:#e4e4e7;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- header -->
        <tr>
          <td style="background:#18181b;border:1px solid #27272a;border-radius:12px 12px 0 0;padding:24px 32px;border-bottom:none;">
            <span style="font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Akihlee</span>
            <span style="font-size:13px;color:#3b82f6;margin-left:10px;">Notification</span>
          </td>
        </tr>

        <!-- body -->
        <tr>
          <td style="background:#18181b;border:1px solid #27272a;border-top:none;border-radius:0 0 12px 12px;padding:28px 32px;">
            ${body}
          </td>
        </tr>

        <!-- footer -->
        <tr>
          <td style="padding:20px 0 0;text-align:center;">
            <p style="font-size:12px;color:#52525b;margin:0;">Akihlee · info@akihlee.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function field(label: string, value: string) {
  return `<tr>
    <td style="padding:6px 0;vertical-align:top;width:140px;">
      <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;">${label}</span>
    </td>
    <td style="padding:6px 0;vertical-align:top;">
      <span style="font-size:15px;color:#f4f4f5;">${value}</span>
    </td>
  </tr>`;
}

function section(title: string, content: string) {
  return `<div style="margin-top:20px;">
    <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;margin:0 0 6px;">${title}</p>
    <div style="background:#09090b;border:1px solid #27272a;border-radius:8px;padding:14px 16px;font-size:14px;color:#d4d4d8;line-height:1.6;white-space:pre-wrap;">${content}</div>
  </div>`;
}

function badge(label: string) {
  return `<span style="display:inline-block;background:#1e3a5f;color:#60a5fa;font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;border:1px solid #1d4ed8;">${label}</span>`;
}

// ── types ────────────────────────────────────────────────────────────────────

type ConsultationData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  message?: string;
};

type AutomationData = ConsultationData & {
  industry: string;
  existingSystems: string;
  currentProcess: string;
  painPoints: string;
  desiredAutomation: string;
  estimatedMonthlyVolume: string;
};

type ChatMessage = { role: "user" | "assistant"; content: string };

// ── email builders ───────────────────────────────────────────────────────────

function consultationHtml(d: ConsultationData) {
  const body = `
    <p style="margin:0 0 20px;font-size:15px;color:#a1a1aa;">A new consultation lead has been submitted.</p>
    ${badge("Consultation Lead")}
    <table style="margin-top:20px;width:100%;border-collapse:collapse;">
      ${field("Name", d.fullName)}
      ${field("Company", d.companyName)}
      ${field("Email", `<a href="mailto:${d.email}" style="color:#60a5fa;">${d.email}</a>`)}
      ${field("Phone", d.phone)}
    </table>
    ${d.message ? section("Their message", d.message) : ""}
  `;
  return layout(`New Lead — ${d.fullName}`, body);
}

function automationHtml(d: AutomationData) {
  const body = `
    <p style="margin:0 0 20px;font-size:15px;color:#a1a1aa;">A new custom automation request has been submitted.</p>
    ${badge("Automation Request")}
    <table style="margin-top:20px;width:100%;border-collapse:collapse;">
      ${field("Name", d.fullName)}
      ${field("Company", d.companyName)}
      ${field("Email", `<a href="mailto:${d.email}" style="color:#60a5fa;">${d.email}</a>`)}
      ${field("Phone", d.phone)}
      ${field("Industry", d.industry)}
      ${field("Monthly Volume", d.estimatedMonthlyVolume)}
    </table>
    ${section("Existing Systems", d.existingSystems)}
    ${section("Current Process", d.currentProcess)}
    ${section("Pain Points", d.painPoints)}
    ${section("Desired Automation", d.desiredAutomation)}
  `;
  return layout(`New Automation Request — ${d.companyName}`, body);
}

async function chatHtml(messages: ChatMessage[]) {
  const bubbles = await Promise.all(
    messages.map(async (m) => {
      const isUser = m.role === "user";
      const rendered = isUser
        ? `<span style="font-size:14px;color:#f4f4f5;">${m.content}</span>`
        : await marked.parse(m.content, { breaks: true });

      return `<div style="margin-bottom:16px;">
        <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${isUser ? "#34d399" : "#60a5fa"};margin-bottom:5px;">
          ${isUser ? "Visitor" : "Akihlee AI"}
        </div>
        <div style="background:${isUser ? "#052e16" : "#09090b"};border:1px solid ${isUser ? "#166534" : "#27272a"};border-radius:10px;padding:12px 16px;font-size:14px;color:#d4d4d8;line-height:1.65;">
          ${rendered}
        </div>
      </div>`;
    })
  );

  const body = `
    <p style="margin:0 0 20px;font-size:15px;color:#a1a1aa;">A visitor was directed to contact Akihlee during a chatbot conversation.</p>
    ${badge("Chat Lead")}
    <div style="margin-top:24px;">
      ${bubbles.join("")}
    </div>
  `;
  return layout("Chat Lead — visitor directed to contact us", body);
}

// ── send ─────────────────────────────────────────────────────────────────────

async function send(subject: string, html: string) {
  await transporter.sendMail({ from: TO, to: TO, subject, html });
}

// ── exports ──────────────────────────────────────────────────────────────────

export async function sendConsultationNotification(data: ConsultationData) {
  await send(`New Lead — ${data.fullName} (${data.companyName})`, consultationHtml(data));
}

export async function sendAutomationRequestNotification(data: AutomationData) {
  await send(`New Automation Request — ${data.companyName}`, automationHtml(data));
}

export async function sendChatLeadNotification(messages: ChatMessage[]) {
  await send("Chat Lead — visitor was directed to contact us", await chatHtml(messages));
}
