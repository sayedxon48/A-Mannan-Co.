<?php
session_start();
require __DIR__ . "/db.php";

$adminPassword = get_admin_password();
$error = "";

if (isset($_POST["login_password"])) {
    if (hash_equals($adminPassword, $_POST["login_password"])) {
        $_SESSION["admin_ok"] = true;
    } else {
        $error = "Incorrect password.";
    }
}

$isAuthed = !empty($_SESSION["admin_ok"]);

if ($isAuthed && $_SERVER["REQUEST_METHOD"] === "POST") {
    $db = get_db();

    if (isset($_POST["add"])) {
        $reportNumber = trim($_POST["report_number"] ?? "");
        $type = trim($_POST["type"] ?? "");
        $clientRef = trim($_POST["client_ref"] ?? "");
        $issueDate = trim($_POST["issue_date"] ?? "");

        if ($reportNumber !== "" && $type !== "" && $clientRef !== "" && $issueDate !== "") {
            $stmt = $db->prepare(
                "INSERT INTO reports (report_number, type, client_ref, issue_date) VALUES (?, ?, ?, ?)"
            );
            $stmt->bind_param("ssss", $reportNumber, $type, $clientRef, $issueDate);
            if (!$stmt->execute()) {
                $error = "Could not add report: " . $stmt->error;
            }
            $stmt->close();
        } else {
            $error = "All fields are required.";
        }
    }

    if (isset($_POST["delete_id"])) {
        $id = (int) $_POST["delete_id"];
        $stmt = $db->prepare("DELETE FROM reports WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
    }

    $db->close();
}

$reports = [];
if ($isAuthed) {
    $db = get_db();
    $result = $db->query("SELECT id, report_number, type, client_ref, issue_date FROM reports ORDER BY id DESC");
    while ($row = $result->fetch_assoc()) {
        $reports[] = $row;
    }
    $db->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Report Verification Admin</title>
<style>
  body { font-family: -apple-system, sans-serif; max-width: 900px; margin: 40px auto; padding: 0 20px; color: #1e293b; }
  h1 { font-size: 22px; }
  form.login { max-width: 320px; margin-top: 40px; }
  input, select { display: block; width: 100%; padding: 8px 10px; margin: 6px 0 14px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
  label { font-size: 13px; font-weight: 600; }
  button { background: #1e3a8a; color: white; border: none; padding: 10px 18px; border-radius: 999px; font-weight: 600; cursor: pointer; }
  button.danger { background: #b91c1c; padding: 6px 12px; font-size: 12px; }
  table { width: 100%; border-collapse: collapse; margin-top: 20px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
  .error { color: #b91c1c; font-size: 14px; margin: 10px 0; }
  fieldset { border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-top: 30px; }
</style>
</head>
<body>

<?php if (!$isAuthed): ?>
  <h1>Report Verification Admin</h1>
  <?php if ($error): ?><p class="error"><?= htmlspecialchars($error) ?></p><?php endif; ?>
  <form method="POST" class="login">
    <label>Admin Password</label>
    <input type="password" name="login_password" required autofocus>
    <button type="submit">Log In</button>
  </form>
<?php else: ?>
  <h1>Report Verification Admin</h1>
  <?php if ($error): ?><p class="error"><?= htmlspecialchars($error) ?></p><?php endif; ?>

  <fieldset>
    <legend>Add a report</legend>
    <form method="POST">
      <label>Report Number</label>
      <input type="text" name="report_number" placeholder="AMC-2026-0001" required>
      <label>Type</label>
      <select name="type" required>
        <option value="Audit Report">Audit Report</option>
        <option value="Net Worth Certificate">Net Worth Certificate</option>
        <option value="Asset Valuation Report">Asset Valuation Report</option>
      </select>
      <label>Issued To</label>
      <input type="text" name="client_ref" placeholder="Client name or reference" required>
      <label>Issue Date</label>
      <input type="date" name="issue_date" required>
      <button type="submit" name="add" value="1">Add Report</button>
    </form>
  </fieldset>

  <table>
    <thead>
      <tr><th>Report Number</th><th>Type</th><th>Issued To</th><th>Date</th><th></th></tr>
    </thead>
    <tbody>
      <?php foreach ($reports as $r): ?>
        <tr>
          <td><?= htmlspecialchars($r["report_number"]) ?></td>
          <td><?= htmlspecialchars($r["type"]) ?></td>
          <td><?= htmlspecialchars($r["client_ref"]) ?></td>
          <td><?= htmlspecialchars($r["issue_date"]) ?></td>
          <td>
            <form method="POST" style="margin:0" onsubmit="return confirm('Delete this report?')">
              <input type="hidden" name="delete_id" value="<?= (int) $r["id"] ?>">
              <button type="submit" class="danger">Delete</button>
            </form>
          </td>
        </tr>
      <?php endforeach; ?>
      <?php if (!$reports): ?>
        <tr><td colspan="5">No reports added yet.</td></tr>
      <?php endif; ?>
    </tbody>
  </table>
<?php endif; ?>

</body>
</html>
