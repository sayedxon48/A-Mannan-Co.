<?php
header("Content-Type: application/json");
require __DIR__ . "/db.php";

$number = trim($_GET["number"] ?? "");
if ($number === "") {
    echo json_encode(["found" => false]);
    exit;
}

try {
    $db = get_db();
    $stmt = $db->prepare(
        "SELECT report_number, type, client_ref, issue_date FROM reports WHERE report_number = ? LIMIT 1"
    );
    $stmt->bind_param("s", $number);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $stmt->close();
    $db->close();

    if ($row) {
        echo json_encode([
            "found" => true,
            "reportNumber" => $row["report_number"],
            "type" => $row["type"],
            "clientRef" => $row["client_ref"],
            "issueDate" => $row["issue_date"],
        ]);
    } else {
        echo json_encode(["found" => false]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["found" => false, "error" => "server_error"]);
}
