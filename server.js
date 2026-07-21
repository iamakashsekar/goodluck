import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup multer to parse multipart/form-data
// Using memoryStorage to access the file buffer directly for email attachment
const upload = multer({ storage: multer.memoryStorage() });

// Email API Endpoint
app.post('/api/send-mail', upload.single('file'), async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }

    // SMTP Configuration
    const smtpPort = process.env.SMTP_PORT || 465;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.fastmail.com',
      port: smtpPort,
      secure: Number(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer
      });
    }

    // Email to site admin
    const adminEmail = process.env.ADMIN_EMAIL || 'sekar@goodluck.agency';
    const mailOptions = {
      from: '"Goodluck Agency" <no-reply@goodluck.agency>',
      to: adminEmail,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\nMessage:\n${message}`,
      attachments
    };

    await transporter.sendMail(mailOptions);

    // Acknowledgment Email to the user
    const ackMailOptions = {
      from: '"Goodluck Agency" <no-reply@goodluck.agency>',
      to: email,
      subject: "Goodluck Agency: We've received your message",
      text: `Hi ${name},\n\nThank you for reaching out to Goodluck Agency. We acknowledge your message regarding "${subject}" and assure you that our team is already addressing your inquiry.\n\nYou can expect to receive a response from us shortly.\n\nBest regards,\nGoodluck Agency Support`,
    };

    await transporter.sendMail(ackMailOptions);

    return res.status(200).json({ success: true, message: 'Emails sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: `Failed to send email: ${error.message}`, error: error.message });
  }
});

// Serve the static React build files
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve the React app (for client-side routing)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
