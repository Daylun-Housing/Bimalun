import { Resend } from 'resend';
import { NextResponse  } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {

  const { name, email, company, quantity, description } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'info@daylun.ca',
      to: `${email}`,
      cc: 'info@daylun.ca',
      subject: `New message from ${name}`,
      html: `<p>${description}</p>
            <p>Contact: ${email}</p>
            <p>Company: ${company}</p>
            <p>Quantity: ${quantity}</p>`
    });

    console.log('Resend Response:', data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    console.log('Error: ', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
