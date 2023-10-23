import { NextResponse } from "next/server";

const API_KEY = process.env.PUBLIC_MAILGUN_API_KEY || "";
const DOMAIN = process.env.PUBLIC_MAILGUN_DOMAIN || "";

import formData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(request: Request) {
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const { email } = await request.json();

  try {
    await client.lists.members.createMember(`subscribers@${DOMAIN}`, {
      address: email,
    });
    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
