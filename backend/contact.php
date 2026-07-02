<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/PHPMailer/src/Exception.php";
require __DIR__ . "/PHPMailer/src/PHPMailer.php";
require __DIR__ . "/PHPMailer/src/SMTP.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid request."
    ]);
    exit;
}

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$service = trim($data["service"] ?? "");
$message = trim($data["message"] ?? "");

if (
    empty($name) ||
    empty($email) ||
    empty($phone) ||
    empty($service) ||
    empty($message)
) {
    echo json_encode([
        "success" => false,
        "message" => "Please fill in all fields."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid email address."
    ]);
    exit;
}

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->Host = "zebralaundromat.com";

    $mail->SMTPAuth = true;

    $mail->Username = "hello@zebralaundromat.com";

    $mail->Password = "digitaluncle001";

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;

    $mail->setFrom(
        "hello@zebralaundromat.com",
        "Zebra Laundromat Website"
    );

    $mail->addAddress("hello@zebralaundromat.com");

    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);

    $mail->Subject = "New Contact Form Submission";

    $mail->Body = "
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> {$name}</p>

        <p><strong>Email:</strong> {$email}</p>

        <p><strong>Phone:</strong> {$phone}</p>

        <p><strong>Service:</strong> {$service}</p>

        <p><strong>Message:</strong></p>

        <p>{$message}</p>
    ";

    $mail->AltBody =
"Name: {$name}

Email: {$email}

Phone: {$phone}

Service: {$service}

Message:

{$message}";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully."
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $mail->ErrorInfo,
        "exception" => $e->getMessage()
    ]);
}