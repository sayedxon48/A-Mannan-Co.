<?php
// Contact form handler for A. Mannan & Co. — sends submissions via
// authenticated SMTP (Hostinger's raw mail() gets silently dropped for
// unauthenticated sends), deployed as a plain static file alongside the
// exported Next.js site.

require __DIR__ . "/phpmailer/Exception.php";
require __DIR__ . "/phpmailer/PHPMailer.php";
require __DIR__ . "/phpmailer/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

$to = "support@amannan.cc";
$redirect_base = "https://amannan.cc/";

function back($status) {
    global $redirect_base;
    header("Location: " . $redirect_base . "?contact=" . $status . "#contact");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    back("error");
}

// Honeypot: bots fill every field, real users never see or fill this one.
if (!empty($_POST["website"] ?? "")) {
    back("sent");
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$message = trim($_POST["message"] ?? "");

if ($name === "" || $email === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    back("error");
}

$name = str_replace(["\r", "\n"], " ", $name);
$email = str_replace(["\r", "\n"], " ", $email);

$configPath = __DIR__ . "/mail-config.php";
if (!file_exists($configPath)) {
    back("error");
}
$config = require $configPath;

$subject = "New consultation request from " . $name;
$body = "Name: $name\n" .
        "Email: $email\n" .
        "Phone: " . ($phone !== "" ? $phone : "-") . "\n\n" .
        "Message:\n$message\n";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $config["host"];
    $mail->SMTPAuth = true;
    $mail->Username = $config["username"];
    $mail->Password = $config["password"];
    $mail->SMTPSecure = $config["encryption"];
    $mail->Port = $config["port"];

    $mail->setFrom($config["username"], "A. Mannan & Co. Website");
    $mail->addAddress($to);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->isHTML(false);

    $mail->send();
    back("sent");
} catch (PHPMailerException $e) {
    back("error");
}
