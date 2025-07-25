import { Resend } from 'resend';
import { NextResponse  } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const company = formData.get('company')?.toString();
  const address = formData.get('address')?.toString();
  const width = Number(formData.get('width')?.toString());
  const length = Number(formData.get('length')?.toString());
  const height = Number(formData.get('height')?.toString());
  const description = formData.get('description')?.toString();
  const allEntries = formData.getAll('attachments');
  const files = allEntries.filter((entry) : entry is File => entry instanceof File);

  // Convert to Resend attachment objects
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer, // Buffer with file contents
        };
      })
    );

  try {
    const data = await resend.emails.send({
      from: 'info@daylun.ca',
      to: `${email}`,
      cc: 'info@daylun.ca',
      subject: `New House Order from ${name}`,
      html: `
            <p>Order Information<p>
            <p>Square Footage: ${width * length * (height / 8)} Square ft</p>
            <p>Price Estimate: $ ${width * length * (height / 8) * 60} CAD *</p>
            <p>Contact Information: ${email}</p>
            <p>Company: ${company}</p>
            <p>Shipping Address: ${address}</p>
            <p>Width: ${width} ft</p>
            <p>Length: ${length} ft</p>
            <p>Height: ${height} ft</p>
            <p>Special Instructions: ${description}</p>
            <p>* Does not include installation and shipping</p>`,
            attachments,
    });

    console.log('Resend Response:', data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    console.log('Error: ', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
