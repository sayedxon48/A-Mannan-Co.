import { Client } from "basic-ftp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "out");

const host = process.env.FTP_SERVER;
const user = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;

if (!host || !user || !password) {
  console.error(
    "Set FTP_SERVER, FTP_USERNAME, FTP_PASSWORD environment variables before running this script."
  );
  process.exit(1);
}

const client = new Client(30000);
client.ftp.verbose = true;

try {
  await client.access({
    host,
    user,
    password,
    secure: true,
    secureOptions: { rejectUnauthorized: false },
  });
  // This account already lands inside the document root on login — do not cd into public_html again.
  await client.clearWorkingDir();
  await client.uploadFromDir(outDir);
  console.log("Deploy complete.");
} catch (err) {
  console.error("Deploy failed:", err);
  process.exitCode = 1;
} finally {
  client.close();
}
