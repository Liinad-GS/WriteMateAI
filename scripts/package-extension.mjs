import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")
const sourceExtensionDir = path.join(repoRoot, "extension")
const distDir = path.join(repoRoot, "dist")
const releaseExtensionDir = path.join(distDir, "chrome-store")

const args = process.argv.slice(2)
const backendUrl = readFlag("--backend-url") || process.env.BACKEND_BASE_URL || ""

if (!backendUrl) {
  fail("Missing backend URL. Use --backend-url=https://your-backend.example.com")
}

const normalizedBackendUrl = normalizeHttpsUrl(backendUrl)
const backendOriginPattern = `${normalizedBackendUrl}/*`
const manifestPath = path.join(sourceExtensionDir, "manifest.json")
const backgroundPath = path.join(sourceExtensionDir, "background.js")

ensureExists(sourceExtensionDir, "Extension source directory not found")
ensureExists(manifestPath, "manifest.json not found")
ensureExists(backgroundPath, "background.js not found")

fs.rmSync(releaseExtensionDir, { recursive: true, force: true })
fs.mkdirSync(releaseExtensionDir, { recursive: true })
copyDirectory(sourceExtensionDir, releaseExtensionDir)

const releaseManifestPath = path.join(releaseExtensionDir, "manifest.json")
const releaseBackgroundPath = path.join(releaseExtensionDir, "background.js")
const releaseContentPath = path.join(releaseExtensionDir, "content.js")
const manifest = JSON.parse(fs.readFileSync(releaseManifestPath, "utf8"))
manifest.host_permissions = [backendOriginPattern]
fs.writeFileSync(releaseManifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

const originalBackground = fs.readFileSync(releaseBackgroundPath, "utf8")
const updatedBackground = originalBackground.replace(
  /const DEFAULT_BACKEND_BASE_URL = ".*?"/,
  `const DEFAULT_BACKEND_BASE_URL = "${normalizedBackendUrl}"`
)

if (updatedBackground === originalBackground) {
  fail("Could not update DEFAULT_BACKEND_BASE_URL in background.js")
}

fs.writeFileSync(releaseBackgroundPath, updatedBackground)

const originalContent = fs.readFileSync(releaseContentPath, "utf8")
const updatedContent = originalContent.replace(
  /const BUILD_CHANNEL = ".*?"/,
  'const BUILD_CHANNEL = "production"'
)

if (updatedContent === originalContent) {
  fail("Could not update BUILD_CHANNEL in content.js")
}

fs.writeFileSync(releaseContentPath, updatedContent)

const zipName = `WriteMateAI-chrome-${manifest.version}.zip`
const zipPath = path.join(distDir, zipName)
fs.rmSync(zipPath, { force: true })

const zipResult = spawnSync(
  "zip",
  ["-r", zipPath, "."],
  {
    cwd: releaseExtensionDir,
    encoding: "utf8"
  }
)

if (zipResult.status !== 0) {
  fail(`zip failed: ${zipResult.stderr || zipResult.stdout || "unknown error"}`)
}

console.log(`Release extension directory: ${releaseExtensionDir}`)
console.log(`Release zip: ${zipPath}`)
console.log(`Backend URL: ${normalizedBackendUrl}`)

function readFlag(name) {
  const direct = args.find((arg) => arg.startsWith(`${name}=`))
  if (direct) {
    return direct.slice(name.length + 1)
  }

  const index = args.indexOf(name)
  if (index >= 0) {
    return args[index + 1] || ""
  }

  return ""
}

function normalizeHttpsUrl(value) {
  let parsed

  try {
    parsed = new URL(value)
  } catch {
    fail(`Invalid backend URL: ${value}`)
  }

  if (parsed.protocol !== "https:") {
    fail("Chrome Web Store build must use an https backend URL")
  }

  parsed.hash = ""
  parsed.search = ""

  return parsed.toString().replace(/\/+$/, "")
}

function ensureExists(targetPath, message) {
  if (!fs.existsSync(targetPath)) {
    fail(`${message}: ${targetPath}`)
  }
}

function copyDirectory(sourceDir, destinationDir) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true })

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name)
    const destinationPath = path.join(destinationDir, entry.name)

    if (entry.isDirectory()) {
      fs.mkdirSync(destinationPath, { recursive: true })
      copyDirectory(sourcePath, destinationPath)
      continue
    }

    fs.copyFileSync(sourcePath, destinationPath)
  }
}

function fail(message) {
  console.error(message)
  process.exit(1)
}
