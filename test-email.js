import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

async function test() {
  const smtpPort = process.env.SMTP_PORT || 465;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.fastmail.com',
    port: smtpPort,
    secure: Number(smtpPort) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Adding debug logging
    debug: true,
    logger: true
  });

  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'sekar@goodluck.agency';
    const mailOptions = {
      from: '"Goodluck Agency" <no-reply@goodluck.agency>',
      to: adminEmail,
      subject: `Test Email`,
      text: `This is a test email.`,
    };

    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

test();
