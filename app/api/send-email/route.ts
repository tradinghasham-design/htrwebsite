import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { type, data } = await req.json();

    const hrEmail = process.env.HR_EMAIL || "";
    const fromEmail = "onboarding@resend.dev"; // Resend ka default test domain

    if (!hrEmail) {
      return NextResponse.json(
        { error: "HR email not configured" },
        { status: 500 }
      );
    }

    // ═══════════════════════════════════════════════════════════
    // JOB APPLICATION EMAIL
    // ═══════════════════════════════════════════════════════════
    if (type === "application") {
      const { full_name, email, phone, jobTitle, resume_url, message } = data;

      // 1. Email to HR
      await resend.emails.send({
        from: `SoftTech Careers <${fromEmail}>`,
        to: hrEmail,
        subject: `New Application: ${full_name} for ${jobTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1e3a5f; padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Job Application</h1>
            </div>
            <div style="padding: 24px; background: #f8fafc;">
              <h2 style="color: #1e3a5f; margin-top: 0;">${jobTitle}</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${full_name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${phone}</td>
                </tr>
                ${
                  message
                    ? `
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Cover Letter:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${message}</td>
                </tr>`
                    : ""
                }
                ${
                  resume_url
                    ? `
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Resume:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
                    <a href="${resume_url}" style="color: #3b82f6;">Download Resume</a>
                  </td>
                </tr>`
                    : ""
                }
              </table>
              <div style="margin-top: 24px; text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_SUPABASE_URL?.replace('.supabase.co', '')}/admin/applications" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
                  View in Admin Panel
                </a>
              </div>
            </div>
            <div style="background: #0f172a; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px;">
              © 2026 HTR Systems. All rights reserved.
            </div>
          </div>
        `,
      });

      // 2. Auto-reply to applicant
      await resend.emails.send({
        from: `HTR Systems <${fromEmail}>`,
        to: email,
        subject: `Application Received: ${jobTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1e3a5f; padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0;">Application Received</h1>
            </div>
            <div style="padding: 24px; background: #f8fafc;">
              <p>Hi <strong>${full_name}</strong>,</p>
              <p>Thank you for applying for the <strong>${jobTitle}</strong> position at HTR Systems.</p>
              <p>We've received your application and our HR team will review it. If your profile matches our requirements, we'll contact you within <strong>3-5 business days</strong>.</p>
              <div style="background: white; border-left: 4px solid #3b82f6; padding: 16px; margin: 24px 0;">
                <p style="margin: 0; color: #475569;">
                  <strong>Position:</strong> ${jobTitle}<br>
                  <strong>Applied On:</strong> ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
              <p>Best regards,<br><strong>HTR Systems Team</strong></p>
              <p style="color: #94a3b8; font-size: 14px;">I-9 Industrial Area, Islamabad, Pakistan</p>
            </div>
            <div style="background: #0f172a; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px;">
              © 2026 HTR Systems. All rights reserved.
            </div>
          </div>
        `,
      });

      return NextResponse.json({ success: true });
    }

    // ═══════════════════════════════════════════════════════════
    // CONTACT MESSAGE EMAIL
    // ═══════════════════════════════════════════════════════════
    if (type === "contact") {
      const { name, email, phone, subject, message } = data;

      // 1. Email to HR
      await resend.emails.send({
        from: `SoftTech Contact <${fromEmail}>`,
        to: hrEmail,
        subject: `New Contact: ${subject || "No Subject"} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1e3a5f; padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Contact Message</h1>
            </div>
            <div style="padding: 24px; background: #f8fafc;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${email}</td>
                </tr>
                ${
                  phone
                    ? `
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${phone}</td>
                </tr>`
                    : ""
                }
                ${
                  subject
                    ? `
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Subject:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${subject}</td>
                </tr>`
                    : ""
                }
              </table>
              <div style="margin-top: 24px; background: white; padding: 16px; border-radius: 8px;">
                <strong style="color: #1e3a5f;">Message:</strong>
                <p style="margin-top: 8px; color: #475569; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="background: #0f172a; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px;">
              © 2026 HTR Systems. All rights reserved.
            </div>
          </div>
        `,
      });

      // 2. Auto-reply to sender
      await resend.emails.send({
        from: `HTR Systems <${fromEmail}>`,
        to: email,
        subject: `We received your message`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1e3a5f; padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0;">Message Received</h1>
            </div>
            <div style="padding: 24px; background: #f8fafc;">
              <p>Hi <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to HTR Systems. We've received your message and will get back to you within <strong>24 business hours</strong>.</p>
              <p>Best regards,<br><strong>HTR Systems Team</strong></p>
            </div>
            <div style="background: #0f172a; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px;">
              © 2026 HTR Systems. All rights reserved.
            </div>
          </div>
        `,
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
