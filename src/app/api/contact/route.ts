import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, surname, email, option, message, num1, num2, captchaAnswer } = await req.json();

        // Server-side Captcha Validation
        if (Number(num1) + Number(num2) !== Number(captchaAnswer)) {
            return NextResponse.json(
                { error: "Incorrect captcha answer. Please try again." },
                { status: 400 }
            );
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        if (!RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not set in environment variables.");
            return NextResponse.json(
                { error: "Email service not configured. Please add RESEND_API_KEY to your .env file." },
                { status: 500 }
            );
        }

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Contact Form <onboarding@resend.dev>",
                to: "authenticacademy.official@gmail.com",
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
                reply_to: email,
            }),
        });

        if (response.ok) {
            return NextResponse.json({ success: true });
        } else {
            const errorData = await response.json();
            console.error("Resend API error:", errorData);
            return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
        }
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
