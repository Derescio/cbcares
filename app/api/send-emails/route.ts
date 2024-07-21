import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // Send email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 })
  }
}
