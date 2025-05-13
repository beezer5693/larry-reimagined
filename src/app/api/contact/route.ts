import { NextResponse } from "next/server";

const API_KEY = process.env.PUBLIC_MAILGUN_API_KEY || "";
const DOMAIN = process.env.PUBLIC_MAILGUN_DOMAIN || "";

import formData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(request: Request) {
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    message,
  } = await request.json();

  const messageData = {
    from: "inquiry.no-reply@larrybryanlive.com",
    to: "contact@larrybryanlive.com",
    subject: `New Inquiry from ${firstName} ${lastName}`,
    html: `
      <html>
        <body>
          <h1>New Inquiry from ${firstName} ${lastName}</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Message:</strong> ${message}</p>
        </body>
      </html>
    `,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (error: any) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
