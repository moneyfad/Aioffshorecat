# Country codes for flags
$countries = @(
    "us", "gb", "de", "fr", "it", "es", "ca", "au", "jp", "cn", "in", "br", "ru", "kr", "mx", "id", "nl", "sa", "tr", "ch", "se", "ar", "pl", "be", "th", "ir", "at", "no", "ae", "sg", "my", "dk", "za", "il", "ph", "fi", "cl", "co", "eg", "ie", "nz", "cz", "pt", "gr", "hu", "ro", "bg", "hr", "sk", "si", "lt", "ee", "lv", "cy", "mt", "lu", "is", "ad", "mc", "li", "sm", "va", "pa", "cr", "uy", "py", "bo", "pe", "ec", "ve", "gy", "sr", "gf", "fk", "ky", "vg", "ai", "ms", "tc", "aw", "cw", "sx", "bq", "bl", "mf", "gp", "mq", "yt", "re", "nc", "pf", "wf", "tf", "pm", "hm", "bv", "sj", "fo", "gl", "ax", "gi", "ad", "mc", "li", "sm", "va", "unknown"
)

foreach ($country in $countries) {
    $url = "https://flagcdn.com/w2560/$country.png"
    $output = "flags/$country.png"
    Write-Host "Downloading flag for $country..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $output
        Write-Host "Downloaded $country flag"
    } catch {
        Write-Host "Failed to download $country flag"
    }
} 