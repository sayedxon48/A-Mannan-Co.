<?php
function get_db(): mysqli {
    $config = require __DIR__ . "/db-config.php";
    $mysqli = new mysqli(
        $config["host"],
        $config["username"],
        $config["password"],
        $config["database"]
    );
    if ($mysqli->connect_error) {
        throw new Exception("DB connection failed: " . $mysqli->connect_error);
    }
    return $mysqli;
}

function get_admin_password(): string {
    $config = require __DIR__ . "/db-config.php";
    return $config["admin_password"];
}
