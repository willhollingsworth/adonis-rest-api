
# Test students via curl in PowerShell

$API_BASE_URL = "http://localhost:3333/api/v1"
Write-Host "---"

Write-Host "test Create a new student"
$createResponse = curl.exe -s -X POST "$API_BASE_URL/students" `
    -H "Content-Type: application/json" `
    -d "{\`"firstName\`": \`"John\`", \`"lastName\`": \`"Doe\`", \`"email\`": \`"john@example.com\`"}" |
    ConvertFrom-Json
$createResponse | Format-List
$TargetStudentId = $createResponse.id
Write-Host "---"

Write-Host "test Get all students"
curl.exe -s -X GET "$API_BASE_URL/students" | ConvertFrom-Json | Format-List
Write-Host "---"

Write-Host "test Get student by ID"
curl.exe -s -X GET "$API_BASE_URL/students/$TargetStudentId" | ConvertFrom-Json | Format-List
Write-Host "---"

Write-Host "test Update a student by ID"
curl.exe -s -X PUT "$API_BASE_URL/students/$TargetStudentId" `
    -H "Content-Type: application/json" `
    -d "{\`"firstName\`": \`"Jane\`", \`"lastName\`": \`"Doe\`", \`"email\`": \`"jane@example.com\`"}" |
    ConvertFrom-Json | Format-List
Write-Host "---"

Write-Host "test Delete a student by ID"
curl.exe -s -X DELETE "$API_BASE_URL/students/$TargetStudentId" | ConvertFrom-Json | Format-List
Write-Host "---"

Write-Host "verify student deletion"
curl.exe -s -X GET "$API_BASE_URL/students" | ConvertFrom-Json | Format-List
Write-Host "---"