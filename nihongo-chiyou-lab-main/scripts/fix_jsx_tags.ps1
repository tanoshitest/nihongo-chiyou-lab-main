
$path = "c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\jlptN5_Real2025.tsx"
if (-not (Test-Path $path)) {
    Write-Error "File not found: $path"
    exit 1
}

$content = Get-Content $path -Raw -Encoding UTF8

# Fix < tag (e.g. < div -> <div)
$content = $content -replace '<\s+([a-zA-Z])', '<$1'

# Fix </ tag variants (e.g. < / rt, < /rt, </ rt -> </rt)
$content = $content -replace '<\s+/\s+([a-zA-Z])', '</$1'
$content = $content -replace '<\s+/([a-zA-Z])', '</$1'
$content = $content -replace '</\s+([a-zA-Z])', '</$1'

# Fix tag > (e.g. <rt > -> <rt>)
# We want to remove space before > if it closes a tag start or tag end
# Match <tagname ... >
$content = $content -replace '(<[a-zA-Z0-9]+[^>]*?)\s+>', '$1>'
# Match </tagname >
$content = $content -replace '(</[a-zA-Z0-9]+)\s+>', '$1>'

Set-Content $path -Value $content -Encoding UTF8
Write-Host "Fixed JSX tags in $path"
