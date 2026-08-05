<?php
// Copy this file to mail-config.php (same folder) and fill in the real
// mailbox password. mail-config.php is gitignored and deployed manually —
// it must never be committed to the repository.

return [
    'host' => 'smtp.hostinger.com',
    'port' => 465,
    'encryption' => 'ssl', // 'ssl' for port 465, 'tls' for port 587
    'username' => 'support@amannan.cc',
    'password' => 'REPLACE_ME',
];
