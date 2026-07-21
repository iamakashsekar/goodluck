# Contact Form Email Setup Instructions

## Overview
Your contact form is now integrated into the homepage. When visitors submit the form, it will send an email to **sekar@goodluck.agency** using PHPMailer.

## Setup Steps

### 1. Install PHPMailer on Your Server

**Option A: Using Composer (Recommended)**
```bash
composer require phpmailer/phpmailer
```

**Option B: Manual Installation**
1. Download PHPMailer from: https://github.com/PHPMailer/PHPMailer
2. Extract and upload to your server
3. Update the path in `send-email.php` accordingly

### 2. Configure SMTP Settings

Open `/public/send-email.php` and update these settings (around line 70):

#### For Gmail:
```php
$mail->Host       = 'smtp.gmail.com';
$mail->Username   = 'your-email@gmail.com';      // Your Gmail
$mail->Password   = 'your-app-password';          // Gmail App Password
$mail->Port       = 587;
```

**Important for Gmail:**
- You MUST use an App Password, not your regular Gmail password
- Generate one at: https://myaccount.google.com/apppasswords
- Enable 2-Step Verification first if not already enabled

#### For Other Email Providers:

**Outlook/Office365:**
```php
$mail->Host       = 'smtp.office365.com';
$mail->Username   = 'your-email@outlook.com';
$mail->Password   = 'your-password';
$mail->Port       = 587;
```

**Custom Domain (cPanel/WHM):**
```php
$mail->Host       = 'mail.yourdomain.com';
$mail->Username   = 'your-email@yourdomain.com';
$mail->Password   = 'your-email-password';
$mail->Port       = 465;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
```

### 3. Update Email Addresses

In `send-email.php`, update line ~95:
```php
// This is where emails will be sent FROM
$mail->setFrom('your-email@gmail.com', 'Good Luck Employment Agency Website');

// This is where emails will be sent TO (already set correctly)
$mail->addAddress('sekar@goodluck.agency', 'Mr. Sekar');
```

### 4. Upload to Your Server

1. Upload `send-email.php` to your web server's public directory
2. Make sure the file path matches the fetch URL in the React app
3. Ensure your server has PHP 7.4+ installed

### 5. Test the Form

1. Visit your website homepage
2. Scroll to the "Get In Touch" section
3. Fill out the contact form
4. Click "Send Message"
5. Check sekar@goodluck.agency inbox

## Troubleshooting

### Common Issues:

**1. "Failed to send message" error**
- Check your SMTP credentials
- Verify your email provider's SMTP settings
- Check server error logs

**2. Gmail "Less secure app" error**
- Use an App Password instead of your regular password
- Enable 2-Step Verification
- Generate App Password at: https://myaccount.google.com/apppasswords

**3. "Network error" in the form**
- Ensure `send-email.php` is in the correct location
- Check that your server supports PHP
- Verify CORS headers in the PHP file

**4. Email not received**
- Check spam/junk folder
- Verify the recipient email address
- Check server email logs

## Security Recommendations

1. **Don't commit credentials to Git** - Use environment variables:
```php
$mail->Username   = getenv('SMTP_USERNAME');
$mail->Password   = getenv('SMTP_PASSWORD');
```

2. **Add rate limiting** to prevent spam

3. **Add CAPTCHA** (reCAPTCHA v3) for production use

4. **Validate and sanitize** all inputs (already included in the code)

## Alternative: Without PHP

If you cannot use PHP on your server, consider these alternatives:

1. **FormSpree** - https://formspree.io
2. **EmailJS** - https://www.emailjs.com
3. **Netlify Forms** - If hosting on Netlify
4. **Web3Forms** - https://web3forms.com

## Support

For additional help:
- PHPMailer Documentation: https://github.com/PHPMailer/PHPMailer/wiki
- Gmail SMTP Guide: https://support.google.com/mail/answer/7126229
- Outlook SMTP Guide: https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings

## File Locations

- Contact Form Component: `/components/ContactForm.tsx`
- PHP Mailer Script: `/public/send-email.php`
- Homepage (with form): `/components/HomePage.tsx`
