import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, phone, topic, info } = await req.json();

    if (!email || !phone || !topic || !info) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'noreply@bezkredytu.com', 
      to: 'appbmpk@gmail.com',
      subject: `Nowa wiadomość w temacie: ${topic}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Numer telefonu:</strong> ${phone}</p>
        <p><strong>Temat:</strong> ${topic}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${info}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}