# Comprehensive offshore.cat scraper using default browser
$browsers = @(
    "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe",
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "C:\Program Files\Mozilla Firefox\firefox.exe",
    "C:\Program Files (x86)\Mozilla Firefox\firefox.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)

$defaultBrowser = $null
foreach ($browser in $browsers) {
    if (Test-Path $browser) {
        $defaultBrowser = $browser
        Write-Host "Found browser: $browser"
        break
    }
}

if (-not $defaultBrowser) {
    Write-Host "No browser found. Please install a browser or update the paths."
    exit
}

# Create comprehensive scraper HTML
$scraperHTML = @"
<!DOCTYPE html>
<html>
<head>
    <title>Offshore.cat Complete Scraper</title>
    <style>
        body { font-family: monospace; background: #0a0a0a; color: #fff; padding: 20px; }
        .section { margin: 20px 0; padding: 15px; border: 1px solid #333; }
        .data { background: #1a1a1a; padding: 10px; margin: 10px 0; }
        button { background: #333; color: #fff; border: none; padding: 10px; margin: 5px; cursor: pointer; }
        button:hover { background: #666; }
        .results { max-height: 400px; overflow-y: auto; }
    </style>
</head>
<body>
    <h1>Offshore.cat Complete Data Scraper</h1>
    
    <div class="section">
        <h2>Scrape All Categories</h2>
        <button onclick="scrapeAllCategories()">Scrape All Data</button>
        <button onclick="scrapeHosting()">Scrape Hosting Only</button>
        <button onclick="scrapeDomains()">Scrape Domains Only</button>
        <button onclick="scrapeVPN()">Scrape VPN Only</button>
        <button onclick="scrapeMessengers()">Scrape Messengers Only</button>
        <button onclick="scrapeCrypto()">Scrape Crypto Only</button>
        <button onclick="scrapeEmail()">Scrape Email Only</button>
        <button onclick="scrapeCDN()">Scrape CDN Only</button>
        <button onclick="scrapeUploaders()">Scrape Uploaders Only</button>
    </div>

    <div class="section">
        <h2>Results</h2>
        <div id="results" class="results"></div>
    </div>

    <script>
        // Function to scrape offshore.cat data
        async function scrapeOffshoreCat(category = 'all') {
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
                        const service = {
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
                        };
                        
                        if (category === 'all' || service.name.toLowerCase().includes(category.toLowerCase())) {
                            services.push(service);
                        }
                    }
                });
                
                displayResults(services, category);
                
            } catch (error) {
                document.getElementById('results').innerHTML = 
                    '<div class="data"><p>Error: ' + error.message + '</p></div>';
            }
        }

        function displayResults(services, category) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<div class="data"><h3>' + category.toUpperCase() + ' SERVICES (' + services.length + ')</h3><pre>' + JSON.stringify(services, null, 2) + '</pre></div>';
        }

        function scrapeAllCategories() {
            scrapeOffshoreCat('all');
        }

        function scrapeHosting() {
            scrapeOffshoreCat('hosting');
        }

        function scrapeDomains() {
            scrapeOffshoreCat('domains');
        }

        function scrapeVPN() {
            scrapeOffshoreCat('vpn');
        }

        function scrapeMessengers() {
            scrapeOffshoreCat('messengers');
        }

        function scrapeCrypto() {
            scrapeOffshoreCat('crypto');
        }

        function scrapeEmail() {
            scrapeOffshoreCat('email');
        }

        function scrapeCDN() {
            scrapeOffshoreCat('cdn');
        }

        function scrapeUploaders() {
            scrapeOffshoreCat('uploaders');
        }

        // Auto-scrape on load
        window.onload = function() {
            scrapeAllCategories();
        };
    </script>
</body>
</html>
"@

$scraperHTML | Out-File -FilePath "offshore_scraper.html" -Encoding UTF8

Write-Host "Created offshore_scraper.html"
Write-Host "Opening in default browser: $defaultBrowser"
Write-Host "This will scrape all data from offshore.cat"

# Open the scraper in the default browser
Start-Process $defaultBrowser "file://$((Get-Location).Path)\offshore_scraper.html"

Write-Host "Scraper opened in browser. Copy the JSON data and paste it into the script.js file." 