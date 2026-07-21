<?php
/**
 * Contact Form Email Handler using PHPMailer
 * 
 * INSTALLATION INSTRUCTIONS:
 * 1. Install PHPMailer via Composer:
 *    composer require phpmailer/phpmailer
 * 
 * 2. Or download PHPMailer manually from:
 *    https://github.com/PHPMailer/PHPMailer
 * 
 * 3. Update the SMTP settings below with your email provider's details
 * 
 * 4. Upload this file to your web server (same domain as your website)
 */

// Allow cross-origin requests (adjust domain in production)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Import PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader (adjust path if needed)
require 'vendor/autoload.php';

// If you downloaded PHPMailer manually, use this instead:
// require 'path/to/PHPMailer/src/Exception.php';
// require 'path/to/PHPMailer/src/PHPMailer.php';
// require 'path/to/PHPMailer/src/SMTP.php';

try {
    // Get JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Validate required fields
    if (empty($data['name']) || empty($data['email']) || empty($data['subject']) || empty($data['message'])) {
        throw new Exception('Please fill in all required fields');
    }

    // Sanitize input
    $name = htmlspecialchars(trim($data['name']));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($data['phone'] ?? ''));
    $subject = htmlspecialchars(trim($data['subject']));
    $message = htmlspecialchars(trim($data['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email address');
    }

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    //-------------------------------------------------------------------------
    // SMTP CONFIGURATION - UPDATE THESE SETTINGS
    //-------------------------------------------------------------------------
    
    // For Gmail:
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';           // Gmail SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your-email@gmail.com';     // Your Gmail address
    $mail->Password   = 'your-app-password';        // Your Gmail app password (not regular password)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // For other email providers, use their SMTP settings:
    /*
    // Example for Outlook/Office365:
    $mail->Host       = 'smtp.office365.com';
    $mail->Port       = 587;
    
    // Example for Yahoo:
    $mail->Host       = 'smtp.mail.yahoo.com';
    $mail->Port       = 587;
    
    // Example for custom domain (cPanel/WHM):
    $mail->Host       = 'mail.yourdomain.com';
    $mail->Port       = 465;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    */

    //-------------------------------------------------------------------------
    // EMAIL SETTINGS
    //-------------------------------------------------------------------------
    
    // Sender (your email)
    $mail->setFrom('your-email@gmail.com', 'Good Luck Employment Agency Website');
    
    // Recipient (where form submissions go)
    $mail->addAddress('sekar@goodluck.agency', 'Mr. Sekar');
    
    // Reply-To (customer's email)
    $mail->addReplyTo($email, $name);

    // Email subject
    $mail->Subject = "Contact Form: $subject";

    // Email body (HTML)
    $mail->isHTML(true);
    $mail->Body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #dc2626; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-left: 3px solid #dc2626; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
                <p>Good Luck Employment Agency</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Name:</div>
                    <div class='value'>$name</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>$email</div>
                </div>
                
                " . ($phone ? "
                <div class='field'>
                    <div class='label'>Phone:</div>
                    <div class='value'>$phone</div>
                </div>
                " : "") . "
                
                <div class='field'>
                    <div class='label'>Subject:</div>
                    <div class='value'>$subject</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Message:</div>
                    <div class='value'>" . nl2br($message) . "</div>
                </div>
            </div>
            <div class='footer'>
                <p>This email was sent from the contact form on your website.</p>
                <p>Submitted on " . date('F j, Y \a\t g:i a') . "</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Plain text version
    $mail->AltBody = "
    New Contact Form Submission
    
    Name: $name
    Email: $email
    " . ($phone ? "Phone: $phone\n" : "") . "
    Subject: $subject
    
    Message:
    $message
    
    ---
    Submitted on " . date('F j, Y \a\t g:i a') . "
    ";

    // Send email
    $mail->send();

    // Success response
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully!'
    ]);

} catch (Exception $e) {
    // Error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message: ' . $e->getMessage()
    ]);
}
?>
