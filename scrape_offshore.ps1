# Scrape offshore.cat data using Brave browser
$bravePath = "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"

# Check if Brave is installed
if (Test-Path $bravePath) {
    Write-Host "Brave browser found at: $bravePath"
} else {
    Write-Host "Brave browser not found. Please install Brave or update the path."
    exit
}

# Create a temporary HTML file to scrape data
$scrapeScript = @"
<!DOCTYPE html>
<html>
<head>
    <title>Offshore.cat Scraper</title>
</head>
<body>
    <h1>Offshore.cat Data Scraper</h1>
    <div id="results"></div>
    
    <script>
        // Function to scrape offshore.cat data
        async function scrapeOffshoreCat() {
            try {
                const response = await fetch('https://offshore.cat', {
                    method: 'GET',
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Failed to fetch offshore.cat');
                }
                
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                // Extract table data
                const rows = doc.querySelectorAll('table tr');
                const services = [];
                
                rows.forEach((row, index) => {
                    if (index === 0) return; // Skip header
                    
                    const cells = row.querySelectorAll('td');
                    if (cells.length >= 10) {
                        services.push({
                            name: cells[0]?.textContent?.trim() || '',
                            website: cells[1]?.textContent?.trim() || '',
                            description: cells[2]?.textContent?.trim() || '',
                            company: cells[3]?.textContent?.trim() || '',
                            logPolicy: cells[4]?.textContent?.trim() || '',
                            dmca: cells[5]?.textContent?.trim() || '',
                            ownsServers: cells[6]?.textContent?.trim() || '',
                            paymentMethods: cells[7]?.textContent?.trim() || '',
                            status: cells[8]?.textContent?.trim() || '',
                            lastChange: cells[9]?.textContent?.trim() || ''
                        });
                    }
                });
                
                document.getElementById('results').innerHTML = 
                    '<pre>' + JSON.stringify(services, null, 2) + '</pre>';
                    
            } catch (error) {
                document.getElementById('results').innerHTML = 
                    '<p>Error: ' + error.message + '</p>';
            }
        }
        
        // Run scraper when page loads
        window.onload = scrapeOffshoreCat;
    </script>
</body>
</html>
"@

$scrapeScript | Out-File -FilePath "scraper.html" -Encoding UTF8

Write-Host "Created scraper.html - you can open this in Brave to scrape offshore.cat data"
Write-Host "Note: Due to CORS restrictions, you may need to manually copy the data from offshore.cat" 