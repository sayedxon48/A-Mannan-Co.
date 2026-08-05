<?php
// Contact form handler for A. Mannan & Co. — sends submissions to the firm's inbox.
// Deployed as a plain static file alongside the exported Next.js site.

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

$subject = "New consultation request from " . $name;
$body = "Name: $name\n" .
        "Email: $email\n" .
        "Phone: " . ($phone !== "" ? $phone : "-") . "\n\n" .
        "Message:\n$message\n";

$headers = "From: A. Mannan & Co. Website <no-reply@amannan.cc>\r\n" .
           "Reply-To: " . $email . "\r\n" .
           "Content-Type: text/plain; charset=UTF-8";

$sent = mail($to, $subject, $body, $headers);

back($sent ? "sent" : "error");
