import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const {
            name = "",
            surname = "",
            email = "",
            option = "General Inquiry",
            message = "",
            num1 = 0,
            num2 = 0,
            captchaAnswer = 0
        } = await req.json();

        // Server-side Captcha Validation
        if (Number(num1) + Number(num2) !== Number(captchaAnswer)) {
            return NextResponse.json(
                { error: "Incorrect captcha answer. Please try again." },
                { status: 400 }
            );
        }

        const SMTP_USER = process.env.SMTP_USER;
        const SMTP_PASS = process.env.SMTP_PASS;
        const SMTP_RECEIVER = process.env.SMTP_RECEIVER || "authenticacademy.official@gmail.com";

        if (!SMTP_USER || !SMTP_PASS) {
            console.error("SMTP credentials are not set in environment variables.");
            return NextResponse.json(
                { error: "Email service not configured. Please add SMTP_USER and SMTP_PASS to your .env file." },
                { status: 500 }
            );
        }

        // Create a transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Contact Form" <${SMTP_USER}>`,
            to: SMTP_RECEIVER,
            replyTo: email,
            subject: `New Contact Form Message: ${option}`,
            html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #0070f3;">New Contact Inquiry</h2>
            <p><strong>Name:</strong> ${name} ${surname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject/Option:</strong> ${option}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888;">This message was sent from the TaiChi Federation contact form.</p>
          </div>
        `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error("Contact API error:", error);
        return NextResponse.json({ 
            error: "Failed to send email.", 
            details: error.message || "Internal server error." 
        }, { status: 500 });
    }
}
