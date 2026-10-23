[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

Write-Host 'Checking the production build...'
& npm.cmd run verify
if ($LASTEXITCODE -ne 0) {
  throw 'Production checks failed. Deployment was not started.'
}

Write-Host 'Publishing to Vercel production...'
& npx.cmd vercel@latest --prod
if ($LASTEXITCODE -ne 0) {
  throw 'Vercel did not complete the deployment.'
}
