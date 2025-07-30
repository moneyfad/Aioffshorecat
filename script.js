// --- THEME TOGGLE LOGIC ---
function applyTheme() {
    let theme = localStorage.getItem('theme');
    if (!theme || theme === 'system') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            document.body.setAttribute('data-theme', 'dark');
            if (document.getElementById('themeToggle')) document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            document.body.setAttribute('data-theme', 'light');
            if (document.getElementById('themeToggle')) document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i>';
        }
    } else if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.setAttribute('data-theme', 'dark');
        if (document.getElementById('themeToggle')) document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.setAttribute('data-theme', 'light');
        if (document.getElementById('themeToggle')) document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function toggleTheme() {
    let theme = localStorage.getItem('theme');
    if (!theme || theme === 'system') {
        theme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    } else if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
    applyTheme();
}

// Listen to system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'system') {
        applyTheme();
    }
});
// --- END THEME TOGGLE LOGIC ---
// Enhanced offshore services data with new providers and updated information
const servicesData = [
    // RECOMMENDED SERVICES (Premium)
    {
        id: 1,
        name: "ALUY",
        website: "p.ol.uy",
        description: "Hosting without compromises.",
        category: "recommended",
        company: "ALUY Hosting",
        country: "uy",
        logPolicy: "Requires email confirmation",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card", "PayPal", "Cash"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2,
        name: "PrivateAlps",
        website: "privatealps.net",
        description: "Your one and only destination for true offshore hosting services, powered by an ethical team of professionals",
        category: "recommended",
        company: "PrivateAlps AG",
        country: "ch",
        logPolicy: "Requires email confirmation",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card", "Apple Pay"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 3,
        name: "ProtonMail",
        website: "protonmail.com",
        description: "Secure email service with end-to-end encryption and privacy-focused features.",
        category: "recommended",
        company: "Proton Technologies AG",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 4,
        name: "Signal",
        website: "signal.org",
        description: "Privacy-focused messaging app with advanced encryption features.",
        category: "recommended",
        company: "Signal Foundation",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Donations"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 5,
        name: "Mullvad",
        website: "mullvad.net",
        description: "Privacy-focused VPN with anonymous accounts and no personal data collection.",
        category: "recommended",
        company: "Mullvad VPN AB",
        country: "se",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Cash", "Credit Card"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 6,
        name: "Librem 5",
        website: "puri.sm",
        description: "Security-focused smartphone with hardware kill switches.",
        category: "recommended",
        company: "Purism",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },

    // CHESS SERVICES
    {
        id: 1001,
        name: "Lagging Chess",
        website: "lagging.site",
        description: "The Future of chess online replacing lichess and other chess websites. Works on every device like console to laptop, mobile. Premium features, some ads, custom ground and lots of features.",
        category: "chess",
        company: "Lagging Chess",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium", "Ads"],
        status: "premium",
        lastChange: "2025-07-30"
    },
    {
        id: 1002,
        name: "Lichess",
        website: "lichess.org",
        description: "Free, open-source chess server with no ads, no tracking, and strong privacy protection. Highly rated by chess community.",
        category: "chess",
        company: "Lichess",
        country: "fr",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Donations"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 1003,
        name: "Chess.com",
        website: "chess.com",
        description: "Popular chess platform with extensive features, lessons, and tournaments. Mixed reviews due to premium features and data collection.",
        category: "chess",
        company: "Chess.com",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 1004,
        name: "Chess24",
        website: "chess24.com",
        description: "Chess platform with live coverage, lessons, and premium content from top players.",
        category: "chess",
        company: "Chess24",
        country: "de",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 1005,
        name: "ICC",
        website: "chessclub.com",
        description: "Internet Chess Club with advanced features and professional tournaments.",
        category: "chess",
        company: "ICC",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 1006,
        name: "PlayChess",
        website: "playchess.com",
        description: "ChessBase's online chess platform with database integration.",
        category: "chess",
        company: "ChessBase",
        country: "de",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 1007,
        name: "FICS",
        website: "freechess.org",
        description: "Free Internet Chess Server with open-source client support.",
        category: "chess",
        company: "FICS",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Donations"],
        status: "verified",
        lastChange: "2025-07-30"
    },
    {
        id: 1008,
        name: "ChessTempo",
        website: "chesstempo.com",
        description: "Chess training platform with tactics, endgames, and opening training.",
        category: "chess",
        company: "ChessTempo",
        country: "au",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 1009,
        name: "ChessBomb",
        website: "chessbomb.com",
        description: "Chess analysis platform with real-time game evaluation.",
        category: "chess",
        company: "ChessBomb",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "verified",
        lastChange: "2025-07-30"
    },
    {
        id: 1010,
        name: "Chess.com Analysis",
        website: "chess.com/analysis",
        description: "Advanced chess analysis tool integrated with Chess.com platform.",
        category: "chess",
        company: "Chess.com",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },

    // NEW EMAIL SERVICES
    {
        id: 601,
        name: "PissMail",
        website: "pissmail.com",
        description: "Edgy email service with privacy-focused domains and no logging policy.",
        category: "email",
        company: "PissMail",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Donations"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 602,
        name: "MailHaven",
        website: "mailhaven.su",
        description: "Privacy-focused email service with strong encryption and anonymous registration.",
        category: "email",
        company: "MailHaven",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 603,
        name: "Cock.li",
        website: "cock.li",
        description: "Email service owned by Vincent Canfield with privacy focus.",
        category: "email",
        company: "Cock.li",
        country: "cw",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 604,
        name: "Tutanota",
        website: "tutanota.com",
        description: "German encrypted email service with zero-knowledge encryption.",
        category: "email",
        company: "Tutanota",
        country: "de",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 605,
        name: "Mailfence",
        website: "mailfence.com",
        description: "Belgian encrypted email service with digital signatures.",
        category: "email",
        company: "Mailfence",
        country: "be",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 606,
        name: "Posteo",
        website: "posteo.de",
        description: "German green email provider with strong privacy protection.",
        category: "email",
        company: "Posteo",
        country: "de",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Bank Transfer"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 607,
        name: "StartMail",
        website: "startmail.com",
        description: "Dutch encrypted email service with custom domains.",
        category: "email",
        company: "StartMail",
        country: "nl",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 608,
        name: "Kolab Now",
        website: "kolabnow.com",
        description: "Swiss-based secure email and collaboration platform.",
        category: "email",
        company: "Kolab Systems",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 609,
        name: "Runbox",
        website: "runbox.com",
        description: "Norwegian email provider with strong privacy protection.",
        category: "email",
        company: "Runbox",
        country: "no",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 610,
        name: "Hushmail",
        website: "hushmail.com",
        description: "Canadian encrypted email service for healthcare and legal.",
        category: "email",
        company: "Hushmail",
        country: "ca",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 611,
        name: "AT&T Mail",
        website: "att.net",
        description: "AT&T's email service with integrated webmail and mobile access.",
        category: "email",
        company: "AT&T",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 612,
        name: "AOL Mail",
        website: "aol.com",
        description: "America Online's email service with news and content integration.",
        category: "email",
        company: "AOL",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 613,
        name: "Yahoo Mail",
        website: "mail.yahoo.com",
        description: "Yahoo's email service with large storage and integrated features.",
        category: "email",
        company: "Yahoo",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 614,
        name: "Outlook",
        website: "outlook.com",
        description: "Microsoft's email service with Office integration and cloud storage.",
        category: "email",
        company: "Microsoft",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 615,
        name: "Gmail",
        website: "gmail.com",
        description: "Google's email service with advanced features and AI integration.",
        category: "email",
        company: "Google",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 616,
        name: "Zoho Mail",
        website: "zoho.com",
        description: "Business email service with collaboration tools and custom domains.",
        category: "email",
        company: "Zoho",
        country: "in",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "capitalist",
        lastChange: "2025-07-30"
    },
    {
        id: 617,
        name: "FastMail",
        website: "fastmail.com",
        description: "Australian email service with focus on speed and reliability.",
        category: "email",
        company: "FastMail",
        country: "au",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-30"
    },
    {
        id: 618,
        name: "Mailbox.org",
        website: "mailbox.org",
        description: "German privacy-focused email service with encryption.",
        category: "email",
        company: "Mailbox.org",
        country: "de",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-30"
    },
    {
        id: 619,
        name: "Disroot",
        website: "disroot.org",
        description: "Free and open-source email service with privacy focus.",
        category: "email",
        company: "Disroot",
        country: "nl",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Donations"],
        status: "verified",
        lastChange: "2025-07-30"
    },
    {
        id: 620,
        name: "Riseup",
        website: "riseup.net",
        description: "Activist-focused email service with strong privacy protection.",
        category: "email",
        company: "Riseup",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Donations"],
        status: "verified",
        lastChange: "2025-07-30"
    },

    // PASSWORD MANAGERS
    {
        id: 701,
        name: "Bitwarden",
        website: "bitwarden.com",
        description: "Open-source password manager with end-to-end encryption.",
        category: "password-managers",
        company: "Bitwarden Inc",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 702,
        name: "KeePass",
        website: "keepass.info",
        description: "Open-source password manager with local storage.",
        category: "password-managers",
        company: "KeePass",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Free", "Donations"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 703,
        name: "1Password",
        website: "1password.com",
        description: "Premium password manager with advanced security features.",
        category: "password-managers",
        company: "1Password",
        country: "ca",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 704,
        name: "Dashlane",
        website: "dashlane.com",
        description: "Password manager with VPN and dark web monitoring.",
        category: "password-managers",
        company: "Dashlane",
        country: "us",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 705,
        name: "LastPass",
        website: "lastpass.com",
        description: "Popular password manager with cross-platform sync.",
        category: "password-managers",
        company: "LastPass",
        country: "us",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 706,
        name: "NordPass",
        website: "nordpass.com",
        description: "Password manager from NordVPN with zero-knowledge architecture.",
        category: "password-managers",
        company: "Nord Security",
        country: "pa",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 707,
        name: "ProtonPass",
        website: "proton.me/pass",
        description: "Password manager from Proton with end-to-end encryption.",
        category: "password-managers",
        company: "Proton Technologies AG",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 708,
        name: "Keeper",
        website: "keepersecurity.com",
        description: "Enterprise password manager with advanced security features.",
        category: "password-managers",
        company: "Keeper Security",
        country: "us",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Enterprise"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 709,
        name: "RoboForm",
        website: "roboform.com",
        description: "Password manager with form filling capabilities.",
        category: "password-managers",
        company: "RoboForm",
        country: "us",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 710,
        name: "Enpass",
        website: "enpass.io",
        description: "Offline password manager with local encryption.",
        category: "password-managers",
        company: "Sinew Software Systems",
        country: "in",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },

    // HOSTING SERVICES (Updated dates)
    {
        id: 101,
        name: "BitLaunch",
        website: "bitlaunch.io",
        description: "Create VPS in seconds, using crypto",
        category: "hosting",
        company: "BitLaunch Ltd",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes & No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 102,
        name: "Cockbox",
        website: "cockbox.org",
        description: "Owned by Vincent Canfield, current administrator of cock.li email service",
        category: "hosting",
        company: "Cockbox Hosting",
        country: "cw",
        logPolicy: "Requires email confirmation",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 103,
        name: "Hostinger",
        website: "hostinger.com",
        description: "Affordable web hosting with excellent performance and 24/7 customer support.",
        category: "hosting",
        company: "Hostinger International",
        country: "lt",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 104,
        name: "DigitalOcean",
        website: "digitalocean.com",
        description: "Cloud infrastructure provider with simple pricing and developer-friendly tools.",
        category: "hosting",
        company: "DigitalOcean Inc",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Bank Transfer"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 105,
        name: "Vultr",
        website: "vultr.com",
        description: "High-performance cloud infrastructure with global data centers.",
        category: "hosting",
        company: "Vultr Holdings",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },

    // VPN SERVICES (Updated dates)
    {
        id: 301,
        name: "Mullvad",
        website: "mullvad.net",
        description: "Swedish VPN with no logging and anonymous payment options",
        category: "vpn",
        company: "Mullvad VPN",
        country: "se",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 302,
        name: "ProtonVPN",
        website: "protonvpn.com",
        description: "Swiss VPN with strong encryption and no logs policy",
        category: "vpn",
        company: "Proton Technologies AG",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 303,
        name: "NordVPN",
        website: "nordvpn.com",
        description: "Panama-based VPN with extensive server network",
        category: "vpn",
        company: "NordVPN",
        country: "pa",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 304,
        name: "ExpressVPN",
        website: "expressvpn.com",
        description: "British Virgin Islands VPN with high-speed servers",
        category: "vpn",
        company: "ExpressVPN",
        country: "vg",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 305,
        name: "Surfshark",
        website: "surfshark.com",
        description: "British Virgin Islands VPN with unlimited devices",
        category: "vpn",
        company: "Surfshark",
        country: "vg",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },

    // MESSENGERS (Updated dates)
    {
        id: 401,
        name: "Telegram",
        website: "telegram.org",
        description: "Secure messaging app with end-to-end encryption and cloud storage.",
        category: "messengers",
        company: "Telegram FZ LLC",
        country: "ae",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 402,
        name: "Signal",
        website: "signal.org",
        description: "Open-source encrypted messaging with end-to-end encryption",
        category: "messengers",
        company: "Signal Foundation",
        country: "us",
        logPolicy: "No logs",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Donations"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 403,
        name: "Session",
        website: "getsession.org",
        description: "Decentralized messenger with no central servers and metadata protection.",
        category: "messengers",
        company: "Session Foundation",
        country: "au",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Free", "Donations"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 404,
        name: "Element",
        website: "element.io",
        description: "Secure messaging and collaboration platform based on Matrix protocol.",
        category: "messengers",
        company: "Element AG",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 405,
        name: "Wire",
        website: "wire.com",
        description: "Secure messaging with end-to-end encryption and file sharing.",
        category: "messengers",
        company: "Wire Swiss GmbH",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free", "Premium"],
        status: "verified",
        lastChange: "2025-07-29"
    },

    // CRYPTO EXCHANGES (Comprehensive list from offshore.cat and other sources)
    {
        id: 501,
        name: "Binance",
        website: "binance.com",
        description: "World's largest cryptocurrency exchange by trading volume with extensive altcoin support.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "SEPA", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 502,
        name: "Coinbase",
        website: "coinbase.com",
        description: "Popular cryptocurrency exchange and wallet service with institutional features.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "PayPal", "Apple Pay"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 503,
        name: "Kraken",
        website: "kraken.com",
        description: "Cryptocurrency exchange with advanced trading features and strong security.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "SEPA", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 504,
        name: "KuCoin",
        website: "kucoin.com",
        description: "Cryptocurrency exchange with extensive altcoin support and staking features.",
        category: "crypto",
        company: "KuCoin Exchange",
        country: "sg",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "PayPal"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 505,
        name: "Bybit",
        website: "bybit.com",
        description: "Cryptocurrency derivatives exchange with advanced trading tools and futures.",
        category: "crypto",
        company: "Bybit Exchange",
        country: "sg",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "SEPA"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 506,
        name: "OKX",
        website: "okx.com",
        description: "Global cryptocurrency exchange with spot, futures, and options trading.",
        category: "crypto",
        company: "OKX",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "SEPA", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 507,
        name: "Bitfinex",
        website: "bitfinex.com",
        description: "Cryptocurrency exchange with advanced trading features and margin trading.",
        category: "crypto",
        company: "iFinex Inc",
        country: "vg",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 508,
        name: "Huobi",
        website: "huobi.com",
        description: "Global cryptocurrency exchange with extensive trading pairs and staking.",
        category: "crypto",
        company: "Huobi Global",
        country: "sg",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "SEPA"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 509,
        name: "Gate.io",
        website: "gate.io",
        description: "Cryptocurrency exchange with extensive altcoin listings and trading features.",
        category: "crypto",
        company: "Gate Technology Inc",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "SEPA"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 510,
        name: "Crypto.com",
        website: "crypto.com",
        description: "Cryptocurrency exchange with debit card, staking, and DeFi features.",
        category: "crypto",
        company: "Crypto.com",
        country: "sg",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "SEPA"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 511,
        name: "FTX (Defunct)",
        website: "ftx.com",
        description: "Former cryptocurrency exchange that collapsed in 2022 due to fraud.",
        category: "crypto",
        company: "FTX Trading Ltd",
        country: "bs",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto"],
        status: "trash",
        lastChange: "2025-07-29"
    },
    {
        id: 512,
        name: "Bittrex",
        website: "bittrex.com",
        description: "US-based cryptocurrency exchange with extensive altcoin support.",
        category: "crypto",
        company: "Bittrex Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 513,
        name: "Gemini",
        website: "gemini.com",
        description: "Cryptocurrency exchange founded by the Winklevoss twins with institutional focus.",
        category: "crypto",
        company: "Gemini Trust Company",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 514,
        name: "Bitstamp",
        website: "bitstamp.net",
        description: "European cryptocurrency exchange with strong regulatory compliance.",
        category: "crypto",
        company: "Bitstamp Ltd",
        country: "lu",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "SEPA", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 515,
        name: "Coinbase Pro",
        website: "pro.coinbase.com",
        description: "Advanced trading platform from Coinbase with lower fees and more features.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 516,
        name: "Poloniex",
        website: "poloniex.com",
        description: "Cryptocurrency exchange with extensive altcoin trading pairs.",
        category: "crypto",
        company: "Polo Digital Assets Ltd",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 517,
        name: "BitMEX",
        website: "bitmex.com",
        description: "Cryptocurrency derivatives exchange with leverage trading and futures.",
        category: "crypto",
        company: "HDR Global Trading Ltd",
        country: "sc",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 518,
        name: "Deribit",
        website: "deribit.com",
        description: "Cryptocurrency options and futures exchange with advanced derivatives.",
        category: "crypto",
        company: "Deribit BV",
        country: "nl",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "SEPA"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 519,
        name: "Kraken Futures",
        website: "futures.kraken.com",
        description: "Cryptocurrency futures trading platform from Kraken.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 520,
        name: "Binance Futures",
        website: "binance.com/en/futures",
        description: "Cryptocurrency futures trading platform from Binance with high leverage.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 521,
        name: "Coinbase Advanced",
        website: "advanced.coinbase.com",
        description: "Advanced trading platform from Coinbase with professional features.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 522,
        name: "Kraken Pro",
        website: "pro.kraken.com",
        description: "Professional trading platform from Kraken with advanced order types.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 523,
        name: "Binance US",
        website: "binance.us",
        description: "US-regulated cryptocurrency exchange from Binance with limited features.",
        category: "crypto",
        company: "Binance US",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 524,
        name: "Coinbase Prime",
        website: "prime.coinbase.com",
        description: "Institutional trading platform from Coinbase for large investors.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 525,
        name: "Kraken Institutional",
        website: "kraken.com/institutional",
        description: "Institutional trading platform from Kraken for large investors.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 526,
        name: "Binance Institutional",
        website: "binance.com/en/institutional",
        description: "Institutional trading platform from Binance for large investors.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 527,
        name: "Coinbase Custody",
        website: "custody.coinbase.com",
        description: "Institutional custody service from Coinbase for secure storage.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 528,
        name: "Kraken Custody",
        website: "kraken.com/custody",
        description: "Institutional custody service from Kraken for secure storage.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 529,
        name: "Binance Custody",
        website: "binance.com/en/custody",
        description: "Institutional custody service from Binance for secure storage.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Bank Transfer", "Crypto", "Wire Transfer"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 530,
        name: "Coinbase Staking",
        website: "coinbase.com/staking",
        description: "Staking service from Coinbase for earning rewards on crypto assets.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 531,
        name: "Kraken Staking",
        website: "kraken.com/staking",
        description: "Staking service from Kraken for earning rewards on crypto assets.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 532,
        name: "Binance Staking",
        website: "binance.com/en/staking",
        description: "Staking service from Binance for earning rewards on crypto assets.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 533,
        name: "Coinbase Earn",
        website: "coinbase.com/earn",
        description: "Educational platform from Coinbase for earning crypto by learning.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 534,
        name: "Kraken Learn",
        website: "kraken.com/learn",
        description: "Educational platform from Kraken for learning about crypto.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Free"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 535,
        name: "Binance Academy",
        website: "academy.binance.com",
        description: "Educational platform from Binance for learning about crypto.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Free"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 536,
        name: "Coinbase Wallet",
        website: "wallet.coinbase.com",
        description: "Self-custody wallet from Coinbase with DeFi integration.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 537,
        name: "Kraken Wallet",
        website: "kraken.com/wallet",
        description: "Self-custody wallet from Kraken with DeFi integration.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 538,
        name: "Binance Wallet",
        website: "binance.com/en/wallet",
        description: "Self-custody wallet from Binance with DeFi integration.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 539,
        name: "Coinbase DeFi",
        website: "coinbase.com/defi",
        description: "DeFi platform from Coinbase for decentralized finance applications.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 540,
        name: "Kraken DeFi",
        website: "kraken.com/defi",
        description: "DeFi platform from Kraken for decentralized finance applications.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 541,
        name: "Binance DeFi",
        website: "binance.com/en/defi",
        description: "DeFi platform from Binance for decentralized finance applications.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 542,
        name: "Coinbase NFT",
        website: "nft.coinbase.com",
        description: "NFT marketplace from Coinbase for digital collectibles.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 543,
        name: "Kraken NFT",
        website: "nft.kraken.com",
        description: "NFT marketplace from Kraken for digital collectibles.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 544,
        name: "Binance NFT",
        website: "nft.binance.com",
        description: "NFT marketplace from Binance for digital collectibles.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 545,
        name: "Coinbase Card",
        website: "coinbase.com/card",
        description: "Cryptocurrency debit card from Coinbase for spending crypto.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 546,
        name: "Crypto.com Card",
        website: "crypto.com/cards",
        description: "Cryptocurrency debit card from Crypto.com with cashback rewards.",
        category: "crypto",
        company: "Crypto.com",
        country: "sg",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 547,
        name: "Binance Card",
        website: "binance.com/en/card",
        description: "Cryptocurrency debit card from Binance for spending crypto.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 548,
        name: "Coinbase Commerce",
        website: "commerce.coinbase.com",
        description: "Payment processing service from Coinbase for merchants.",
        category: "crypto",
        company: "Coinbase Global Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 549,
        name: "Kraken Pay",
        website: "kraken.com/pay",
        description: "Payment processing service from Kraken for merchants.",
        category: "crypto",
        company: "Payward Inc",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 550,
        name: "Binance Pay",
        website: "binance.com/en/pay",
        description: "Payment processing service from Binance for merchants.",
        category: "crypto",
        company: "Binance Holdings Ltd",
        country: "ky",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 551,
        name: "Uniswap",
        website: "uniswap.org",
        description: "Decentralized exchange (DEX) for automated token trading on Ethereum.",
        category: "crypto",
        company: "Uniswap Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 552,
        name: "SushiSwap",
        website: "sushi.com",
        description: "Decentralized exchange with yield farming and staking features.",
        category: "crypto",
        company: "SushiSwap",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 553,
        name: "PancakeSwap",
        website: "pancakeswap.finance",
        description: "Decentralized exchange on Binance Smart Chain with yield farming.",
        category: "crypto",
        company: "PancakeSwap",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 554,
        name: "1inch",
        website: "1inch.io",
        description: "DEX aggregator that finds the best trading routes across multiple exchanges.",
        category: "crypto",
        company: "1inch Network",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 555,
        name: "dYdX",
        website: "dydx.exchange",
        description: "Decentralized derivatives exchange for perpetual contracts and margin trading.",
        category: "crypto",
        company: "dYdX Trading Inc",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 556,
        name: "Curve Finance",
        website: "curve.fi",
        description: "Decentralized exchange optimized for stablecoin trading with low slippage.",
        category: "crypto",
        company: "Curve Finance",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 557,
        name: "Balancer",
        website: "balancer.fi",
        description: "Automated portfolio manager and liquidity provider on Ethereum.",
        category: "crypto",
        company: "Balancer Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 558,
        name: "Aave",
        website: "aave.com",
        description: "Decentralized lending and borrowing protocol on Ethereum.",
        category: "crypto",
        company: "Aave",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 559,
        name: "Compound",
        website: "compound.finance",
        description: "Decentralized lending protocol for earning interest on crypto assets.",
        category: "crypto",
        company: "Compound Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 560,
        name: "MakerDAO",
        website: "makerdao.com",
        description: "Decentralized autonomous organization behind the DAI stablecoin.",
        category: "crypto",
        company: "MakerDAO",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 561,
        name: "Yearn Finance",
        website: "yearn.finance",
        description: "DeFi yield aggregator that automatically optimizes yield farming strategies.",
        category: "crypto",
        company: "Yearn Finance",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 562,
        name: "Synthetix",
        website: "synthetix.io",
        description: "Decentralized synthetic asset platform for trading real-world assets.",
        category: "crypto",
        company: "Synthetix",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 563,
        name: "Chainlink",
        website: "chainlinklabs.com",
        description: "Decentralized oracle network for connecting smart contracts to real-world data.",
        category: "crypto",
        company: "Chainlink Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 564,
        name: "Polygon",
        website: "polygon.technology",
        description: "Layer 2 scaling solution for Ethereum with fast and low-cost transactions.",
        category: "crypto",
        company: "Polygon Labs",
        country: "in",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 565,
        name: "Arbitrum",
        website: "arbitrum.io",
        description: "Layer 2 scaling solution for Ethereum with optimistic rollups.",
        category: "crypto",
        company: "Offchain Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 566,
        name: "Optimism",
        website: "optimism.io",
        description: "Layer 2 scaling solution for Ethereum with optimistic rollups.",
        category: "crypto",
        company: "Optimism PBC",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 567,
        name: "Solana",
        website: "solana.com",
        description: "High-performance blockchain platform for decentralized applications.",
        category: "crypto",
        company: "Solana Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 568,
        name: "Cardano",
        website: "cardano.org",
        description: "Proof-of-stake blockchain platform with peer-reviewed research.",
        category: "crypto",
        company: "IOHK",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 569,
        name: "Polkadot",
        website: "polkadot.network",
        description: "Multi-chain network that enables cross-blockchain transfers.",
        category: "crypto",
        company: "Web3 Foundation",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 570,
        name: "Cosmos",
        website: "cosmos.network",
        description: "Ecosystem of interoperable blockchains with shared security.",
        category: "crypto",
        company: "Tendermint",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 571,
        name: "Avalanche",
        website: "avax.network",
        description: "High-performance blockchain platform with sub-second finality.",
        category: "crypto",
        company: "Ava Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 572,
        name: "Fantom",
        website: "fantom.foundation",
        description: "High-performance blockchain platform with smart contract capabilities.",
        category: "crypto",
        company: "Fantom Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 573,
        name: "Terra (Defunct)",
        website: "terra.money",
        description: "Former blockchain platform that collapsed in 2022 due to algorithmic stablecoin failure.",
        category: "crypto",
        company: "Terraform Labs",
        country: "kr",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "trash",
        lastChange: "2025-07-29"
    },
    {
        id: 574,
        name: "Near Protocol",
        website: "near.org",
        description: "Sharded blockchain platform with human-readable account names.",
        category: "crypto",
        company: "NEAR Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 575,
        name: "Algorand",
        website: "algorand.com",
        description: "Pure proof-of-stake blockchain with instant finality.",
        category: "crypto",
        company: "Algorand Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 576,
        name: "Tezos",
        website: "tezos.com",
        description: "Self-amending blockchain with on-chain governance.",
        category: "crypto",
        company: "Tezos Foundation",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 577,
        name: "Stellar",
        website: "stellar.org",
        description: "Open-source payment protocol for cross-border transactions.",
        category: "crypto",
        company: "Stellar Development Foundation",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 578,
        name: "Ripple",
        website: "ripple.com",
        description: "Enterprise blockchain solution for global payments and remittances.",
        category: "crypto",
        company: "Ripple Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 579,
        name: "Monero",
        website: "getmonero.org",
        description: "Privacy-focused cryptocurrency with ring signatures and stealth addresses.",
        category: "crypto",
        company: "Monero Project",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 580,
        name: "Zcash",
        website: "z.cash",
        description: "Privacy-focused cryptocurrency with zero-knowledge proofs.",
        category: "crypto",
        company: "Electric Coin Co",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 581,
        name: "Dash",
        website: "dash.org",
        description: "Digital cash with instant transactions and private send features.",
        category: "crypto",
        company: "Dash Core Group",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 582,
        name: "Litecoin",
        website: "litecoin.org",
        description: "Peer-to-peer cryptocurrency with faster block generation than Bitcoin.",
        category: "crypto",
        company: "Litecoin Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 583,
        name: "Bitcoin Cash",
        website: "bitcoincash.org",
        description: "Fork of Bitcoin with larger block sizes for faster transactions.",
        category: "crypto",
        company: "Bitcoin Cash",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 584,
        name: "Ethereum Classic",
        website: "ethereumclassic.org",
        description: "Original Ethereum blockchain that continued after the DAO fork.",
        category: "crypto",
        company: "Ethereum Classic",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 585,
        name: "Bitcoin",
        website: "bitcoin.org",
        description: "First and most well-known cryptocurrency with proof-of-work consensus.",
        category: "crypto",
        company: "Bitcoin",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 586,
        name: "Ethereum",
        website: "ethereum.org",
        description: "Decentralized platform for smart contracts and decentralized applications.",
        category: "crypto",
        company: "Ethereum Foundation",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 587,
        name: "MetaMask",
        website: "metamask.io",
        description: "Popular Ethereum wallet with DeFi integration and browser extension.",
        category: "crypto",
        company: "ConsenSys",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 588,
        name: "Trust Wallet",
        website: "trustwallet.com",
        description: "Multi-chain mobile wallet with DeFi and NFT support.",
        category: "crypto",
        company: "Binance",
        country: "ky",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 589,
        name: "Exodus",
        website: "exodus.com",
        description: "Multi-asset desktop and mobile wallet with built-in exchange.",
        category: "crypto",
        company: "Exodus Movement",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 590,
        name: "Atomic Wallet",
        website: "atomicwallet.io",
        description: "Multi-asset wallet with built-in exchange and staking features.",
        category: "crypto",
        company: "Atomic Wallet",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 591,
        name: "Ledger",
        website: "ledger.com",
        description: "Hardware wallet manufacturer for secure cryptocurrency storage.",
        category: "crypto",
        company: "Ledger SAS",
        country: "fr",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 592,
        name: "Trezor",
        website: "trezor.io",
        description: "Hardware wallet manufacturer for secure cryptocurrency storage.",
        category: "crypto",
        company: "SatoshiLabs",
        country: "cz",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 593,
        name: "OpenSea",
        website: "opensea.io",
        description: "Largest NFT marketplace for buying, selling, and trading digital collectibles.",
        category: "crypto",
        company: "OpenSea",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 594,
        name: "Rarible",
        website: "rarible.com",
        description: "NFT marketplace with community governance and creator royalties.",
        category: "crypto",
        company: "Rarible",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 595,
        name: "Foundation",
        website: "foundation.app",
        description: "Curated NFT marketplace for digital art and collectibles.",
        category: "crypto",
        company: "Foundation",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 596,
        name: "SuperRare",
        website: "superrare.com",
        description: "Single-edition digital art marketplace on Ethereum.",
        category: "crypto",
        company: "SuperRare",
        country: "us",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 597,
        name: "LooksRare",
        website: "looksrare.org",
        description: "Community-first NFT marketplace with LOOKS token rewards.",
        category: "crypto",
        company: "LooksRare",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 598,
        name: "Magic Eden",
        website: "magiceden.io",
        description: "Leading NFT marketplace on Solana with low fees and fast transactions.",
        category: "crypto",
        company: "Magic Eden",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 599,
        name: "Tenset",
        website: "tenset.io",
        description: "Cryptocurrency exchange with staking and yield farming features.",
        category: "crypto",
        company: "Tenset",
        country: "unknown",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },
    {
        id: 600,
        name: "WhiteBIT",
        website: "whitebit.com",
        description: "European cryptocurrency exchange with extensive trading pairs.",
        category: "crypto",
        company: "WhiteBIT",
        country: "ee",
        logPolicy: "Requires KYC",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Bank Transfer", "Crypto", "SEPA"],
        status: "capitalist",
        lastChange: "2025-07-29"
    },

    // PRIVACY PRODUCTS (Updated with iPhone as trash)
    {
        id: 901,
        name: "Google Pixel (Jailbroken)",
        website: "pixel.google.com",
        description: "Privacy-focused Android phone with custom ROM and de-Googled firmware.",
        category: "products",
        company: "Google LLC",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto", "Cash"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 902,
        name: "iPhone (Jailbroken)",
        website: "apple.com",
        description: "iOS device with jailbreak for privacy enhancements and custom tweaks. Limited jailbreak availability on newer iOS versions.",
        category: "products",
        company: "Apple Inc",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto", "Cash"],
        status: "trash",
        lastChange: "2025-07-29"
    },
    {
        id: 903,
        name: "PinePhone",
        website: "pine64.org",
        description: "Linux-based smartphone with privacy-focused operating system.",
        category: "products",
        company: "PINE64",
        country: "cn",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 904,
        name: "Fairphone",
        website: "fairphone.com",
        description: "Ethical smartphone with modular design and privacy features.",
        category: "products",
        company: "Fairphone",
        country: "nl",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 905,
        name: "Samsung (De-Googled)",
        website: "samsung.com",
        description: "Samsung devices with custom ROM and privacy-focused modifications.",
        category: "products",
        company: "Samsung Electronics",
        country: "kr",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto", "Cash"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 906,
        name: "Librem 5",
        website: "puri.sm",
        description: "Security-focused smartphone with hardware kill switches and PureOS.",
        category: "products",
        company: "Purism",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },

    // DOMAINS (Updated dates)
    {
        id: 201,
        name: "Cloudflare",
        website: "cloudflare.com",
        description: "CDN and domain registrar with WHOIS privacy and competitive pricing.",
        category: "domains",
        company: "Cloudflare Inc",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 202,
        name: "Gandi.net",
        website: "gandi.net",
        description: "European domain registrar with privacy protection and SSL certificates.",
        category: "domains",
        company: "Gandi SAS",
        country: "fr",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Bitcoin"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 203,
        name: "Dynadot",
        website: "dynadot.com",
        description: "Domain registrar with WHOIS privacy and multiple payment options.",
        category: "domains",
        company: "Dynadot LLC",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Check"],
        status: "verified",
        lastChange: "2025-07-29"
    },

    // CDN SERVICES (Updated dates)
    {
        id: 801,
        name: "Fastly",
        website: "fastly.com",
        description: "Edge cloud platform with real-time analytics and security.",
        category: "cdn",
        company: "Fastly Inc",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Enterprise"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 802,
        name: "Akamai",
        website: "akamai.com",
        description: "Global CDN and cybersecurity services with extensive network.",
        category: "cdn",
        company: "Akamai Technologies",
        country: "us",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Enterprise"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 803,
        name: "Bunny.net",
        website: "bunny.net",
        description: "High-performance CDN with global edge locations and competitive pricing.",
        category: "cdn",
        company: "BunnyWay d.o.o.",
        country: "si",
        logPolicy: "Requires email confirmation",
        dmca: "Enforced",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },

    // UPLOADERS (Updated dates)
    {
        id: 901,
        name: "Mega",
        website: "mega.nz",
        description: "Secure cloud storage with end-to-end encryption.",
        category: "uploaders",
        company: "Mega Limited",
        country: "nz",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 902,
        name: "Tresorit",
        website: "tresorit.com",
        description: "Swiss-based secure cloud storage with end-to-end encryption.",
        category: "uploaders",
        company: "Tresorit AG",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 903,
        name: "pCloud",
        website: "pcloud.com",
        description: "Cloud storage with client-side encryption and lifetime plans.",
        category: "uploaders",
        company: "pCloud AG",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 904,
        name: "Sync.com",
        website: "sync.com",
        description: "Canadian cloud storage with zero-knowledge encryption.",
        category: "uploaders",
        company: "Sync.com Inc",
        country: "ca",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "PayPal"],
        status: "verified",
        lastChange: "2025-07-29"
    },

    // CRYPTO SERVICES - MASSIVE EXPANSION
    // Decentralized Exchanges (DEX)
    {
        id: 2001,
        name: "Uniswap",
        website: "uniswap.org",
        description: "Leading decentralized exchange on Ethereum with automated market making.",
        category: "crypto",
        company: "Uniswap Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2002,
        name: "SushiSwap",
        website: "sushi.com",
        description: "Community-driven DEX with yield farming and staking features.",
        category: "crypto",
        company: "SushiSwap",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2003,
        name: "PancakeSwap",
        website: "pancakeswap.finance",
        description: "Popular DEX on Binance Smart Chain with gaming elements.",
        category: "crypto",
        company: "PancakeSwap",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2004,
        name: "dYdX",
        website: "dydx.exchange",
        description: "Decentralized derivatives exchange with perpetual contracts.",
        category: "crypto",
        company: "dYdX",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2005,
        name: "1inch",
        website: "1inch.io",
        description: "DEX aggregator finding the best trading routes across multiple exchanges.",
        category: "crypto",
        company: "1inch Network",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2006,
        name: "Curve Finance",
        website: "curve.fi",
        description: "Specialized DEX for stablecoin trading with low slippage.",
        category: "crypto",
        company: "Curve Finance",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2007,
        name: "Balancer",
        website: "balancer.fi",
        description: "Automated portfolio manager and DEX with customizable pools.",
        category: "crypto",
        company: "Balancer Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2008,
        name: "Aave",
        website: "aave.com",
        description: "Leading DeFi lending and borrowing protocol with flash loans.",
        category: "crypto",
        company: "Aave",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2009,
        name: "Compound",
        website: "compound.finance",
        description: "Algorithmic interest rate protocol for lending and borrowing.",
        category: "crypto",
        company: "Compound Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2010,
        name: "MakerDAO",
        website: "makerdao.com",
        description: "Decentralized autonomous organization behind the DAI stablecoin.",
        category: "crypto",
        company: "MakerDAO",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2011,
        name: "Yearn Finance",
        website: "yearn.finance",
        description: "Yield aggregator optimizing DeFi strategies for maximum returns.",
        category: "crypto",
        company: "Yearn Finance",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2012,
        name: "Synthetix",
        website: "synthetix.io",
        description: "Synthetic asset platform for trading real-world assets on blockchain.",
        category: "crypto",
        company: "Synthetix",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2013,
        name: "Chainlink",
        website: "chainlinklabs.com",
        description: "Decentralized oracle network providing real-world data to smart contracts.",
        category: "crypto",
        company: "Chainlink Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2014,
        name: "Polygon",
        website: "polygon.technology",
        description: "Layer 2 scaling solution for Ethereum with low fees and fast transactions.",
        category: "crypto",
        company: "Polygon",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2015,
        name: "Arbitrum",
        website: "arbitrum.io",
        description: "Layer 2 rollup solution for Ethereum with optimistic rollups.",
        category: "crypto",
        company: "Offchain Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2016,
        name: "Optimism",
        website: "optimism.io",
        description: "Layer 2 scaling solution using optimistic rollups for Ethereum.",
        category: "crypto",
        company: "Optimism",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2017,
        name: "Solana",
        website: "solana.com",
        description: "High-performance blockchain with fast transactions and low fees.",
        category: "crypto",
        company: "Solana Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2018,
        name: "Cardano",
        website: "cardano.org",
        description: "Proof-of-stake blockchain with peer-reviewed research and development.",
        category: "crypto",
        company: "IOHK",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2019,
        name: "Polkadot",
        website: "polkadot.network",
        description: "Multi-chain network enabling cross-blockchain transfers.",
        category: "crypto",
        company: "Web3 Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2020,
        name: "Cosmos",
        website: "cosmos.network",
        description: "Ecosystem of interoperable blockchains with sovereign governance.",
        category: "crypto",
        company: "Tendermint",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2021,
        name: "Avalanche",
        website: "avax.network",
        description: "High-performance blockchain platform with subnets and custom blockchains.",
        category: "crypto",
        company: "Ava Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2022,
        name: "Terra",
        website: "terra.money",
        description: "Algorithmic stablecoin ecosystem with DeFi applications.",
        category: "crypto",
        company: "Terraform Labs",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2023,
        name: "Binance Smart Chain",
        website: "bscscan.com",
        description: "Ethereum-compatible blockchain with low fees and fast transactions.",
        category: "crypto",
        company: "Binance",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2024,
        name: "Fantom",
        website: "fantom.foundation",
        description: "High-performance blockchain with EVM compatibility and low fees.",
        category: "crypto",
        company: "Fantom Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2025,
        name: "Near Protocol",
        website: "near.org",
        description: "Sharded proof-of-stake blockchain with human-readable accounts.",
        category: "crypto",
        company: "NEAR Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2026,
        name: "Algorand",
        website: "algorand.com",
        description: "Pure proof-of-stake blockchain with fast finality and low fees.",
        category: "crypto",
        company: "Algorand Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2027,
        name: "Tezos",
        website: "tezos.com",
        description: "Self-amending blockchain with on-chain governance and formal verification.",
        category: "crypto",
        company: "Tezos Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2028,
        name: "Ethereum",
        website: "ethereum.org",
        description: "Decentralized platform for smart contracts and dApps.",
        category: "crypto",
        company: "Ethereum Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2029,
        name: "Bitcoin",
        website: "bitcoin.org",
        description: "First decentralized cryptocurrency with proof-of-work consensus.",
        category: "crypto",
        company: "Bitcoin Core",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2030,
        name: "Monero",
        website: "getmonero.org",
        description: "Privacy-focused cryptocurrency with ring signatures and stealth addresses.",
        category: "crypto",
        company: "Monero Project",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2031,
        name: "Zcash",
        website: "z.cash",
        description: "Privacy-preserving cryptocurrency with zero-knowledge proofs.",
        category: "crypto",
        company: "Electric Coin Co",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2032,
        name: "Dash",
        website: "dash.org",
        description: "Digital cash with instant transactions and private send features.",
        category: "crypto",
        company: "Dash Core Group",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2033,
        name: "Litecoin",
        website: "litecoin.org",
        description: "Peer-to-peer cryptocurrency with faster block generation than Bitcoin.",
        category: "crypto",
        company: "Litecoin Foundation",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2034,
        name: "Ripple",
        website: "ripple.com",
        description: "Enterprise blockchain solution for global payments and remittances.",
        category: "crypto",
        company: "Ripple Labs",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2035,
        name: "Stellar",
        website: "stellar.org",
        description: "Open-source payment protocol for cross-border transactions.",
        category: "crypto",
        company: "Stellar Development Foundation",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "No",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2036,
        name: "OpenSea",
        website: "opensea.io",
        description: "Largest NFT marketplace for digital art, collectibles, and virtual worlds.",
        category: "crypto",
        company: "OpenSea",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2037,
        name: "Rarible",
        website: "rarible.com",
        description: "Community-owned NFT marketplace with governance token.",
        category: "crypto",
        company: "Rarible",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2038,
        name: "Foundation",
        website: "foundation.app",
        description: "Curated NFT marketplace for digital art and collectibles.",
        category: "crypto",
        company: "Foundation",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2039,
        name: "SuperRare",
        website: "superrare.com",
        description: "Single-edition digital art marketplace on Ethereum.",
        category: "crypto",
        company: "SuperRare",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2040,
        name: "Nifty Gateway",
        website: "niftygateway.com",
        description: "Curated NFT marketplace with drops from top artists and brands.",
        category: "crypto",
        company: "Nifty Gateway",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto", "Credit Card"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2041,
        name: "MetaMask",
        website: "metamask.io",
        description: "Popular Ethereum wallet with browser extension and mobile app.",
        category: "crypto",
        company: "ConsenSys",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2042,
        name: "Trust Wallet",
        website: "trustwallet.com",
        description: "Multi-chain mobile wallet supporting thousands of cryptocurrencies.",
        category: "crypto",
        company: "Binance",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2043,
        name: "Coinbase Wallet",
        website: "wallet.coinbase.com",
        description: "Self-custody wallet with dApp browser and DeFi integration.",
        category: "crypto",
        company: "Coinbase",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2044,
        name: "Phantom",
        website: "phantom.app",
        description: "Solana wallet with NFT support and dApp integration.",
        category: "crypto",
        company: "Phantom",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2045,
        name: "Exodus",
        website: "exodus.com",
        description: "Multi-asset desktop and mobile wallet with built-in exchange.",
        category: "crypto",
        company: "Exodus Movement",
        country: "us",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Free"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2046,
        name: "Ledger",
        website: "ledger.com",
        description: "Hardware wallet manufacturer with secure cold storage solutions.",
        category: "crypto",
        company: "Ledger",
        country: "fr",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2047,
        name: "Trezor",
        website: "trezor.io",
        description: "Hardware wallet pioneer with open-source security solutions.",
        category: "crypto",
        company: "SatoshiLabs",
        country: "cz",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    },
    {
        id: 2048,
        name: "Coldcard",
        website: "coldcard.com",
        description: "Bitcoin-only hardware wallet with advanced security features.",
        category: "crypto",
        company: "Coinkite",
        country: "ca",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2049,
        name: "BitBox02",
        website: "shiftcrypto.ch",
        description: "Swiss-made hardware wallet with open-source firmware.",
        category: "crypto",
        company: "Shift Crypto",
        country: "ch",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Credit Card", "Crypto"],
        status: "verified",
        lastChange: "2025-07-29"
    },
    {
        id: 2050,
        name: "Mynymbox",
        website: "mynymbox.io",
        description: "Privacy-focused cryptocurrency platform with advanced anonymity features and secure transactions.",
        category: "crypto",
        company: "Mynymbox",
        country: "unknown",
        logPolicy: "No logs",
        dmca: "Ignored",
        ownsServers: "Yes",
        paymentMethods: ["Crypto"],
        status: "premium",
        lastChange: "2025-07-29"
    }
];

// DOM elements
const servicesTableBody = document.getElementById('servicesTableBody');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('.nav-link');
const moreBtn = document.getElementById('moreBtn');
const submitBtn = document.getElementById('submitBtn');
const telegramBtn = document.getElementById('telegramBtn');
const submitModal = document.getElementById('submitModal');
const closeModal = document.querySelector('.close');
const submitForm = document.getElementById('submitForm');

// Current filter state
let currentFilter = 'all';
let currentCategory = 'all';
let searchTerm = '';

// Initialize the application
function init() {
    // DOM elements for theme and nav
    window.searchInput = document.getElementById('searchInput');
    window.servicesTableBody = document.getElementById('servicesTableBody');
    window.navLinks = document.querySelectorAll('.nav-link');
    window.filterButtons = document.querySelectorAll('.filter-btn');
    window.moreBtn = document.getElementById('moreBtn');
    window.submitBtn = document.getElementById('submitBtn');
    window.submitModal = document.getElementById('submitModal');
    window.closeModal = document.querySelector('.close');
    window.submitForm = document.getElementById('submitForm');
    window.telegramBtn = document.getElementById('telegramBtn');
    window.themeToggle = document.getElementById('themeToggle');

    renderServices();
    setupEventListeners();
    setupMoreButton();
    setupModal();
    setupButtonActions();
    if (window.themeToggle) window.themeToggle.addEventListener('click', toggleTheme);
    applyTheme();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderServices();
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderServices();
        });
    });

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentCategory = link.dataset.category;
            renderServices();
        });
    });
}

// Setup more button functionality
function setupMoreButton() {
    if (moreBtn) {
        // Track the expanded state
        let isExpanded = false;
        
        moreBtn.addEventListener('click', () => {
            const allLinks = document.querySelectorAll('.nav-link');
            
            if (!isExpanded) {
                // Show all links but keep the more button visible
                allLinks.forEach(link => {
                    link.style.display = 'inline-block';
                });
                isExpanded = true;
            } else {
                // Hide appropriate links based on screen size but keep the more button visible
                const screenWidth = window.innerWidth;
                let linksToHide = [];
                
                if (screenWidth >= 1200 && screenWidth <= 1439) {
                    // Hide links after 12th
                    linksToHide = Array.from(allLinks).slice(11);
                } else if (screenWidth >= 992 && screenWidth <= 1199) {
                    // Hide links after 10th
                    linksToHide = Array.from(allLinks).slice(9);
                } else if (screenWidth >= 768 && screenWidth <= 991) {
                    // Hide links after 8th
                    linksToHide = Array.from(allLinks).slice(7);
                } else if (screenWidth >= 576 && screenWidth <= 767) {
                    // Hide links after 6th
                    linksToHide = Array.from(allLinks).slice(5);
                } else if (screenWidth >= 375 && screenWidth <= 575) {
                    // Hide links after 4th
                    linksToHide = Array.from(allLinks).slice(3);
                } else if (screenWidth >= 320 && screenWidth <= 374) {
                    // Hide links after 3rd
                    linksToHide = Array.from(allLinks).slice(2);
                }
                
                linksToHide.forEach(link => {
                    link.style.display = 'none';
                });
                
                isExpanded = false;
            }
        });
    }
}

// Setup modal functionality
function setupModal() {
    // Open modal
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            submitModal.style.display = 'block';
        });
    }

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            submitModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === submitModal) {
            submitModal.style.display = 'none';
        }
    });

    // Handle form submission
    if (submitForm) {
        submitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmission();
        });
    }
}

// Setup button actions
function setupButtonActions() {
    // Telegram button
    if (telegramBtn) {
        telegramBtn.addEventListener('click', () => {
            window.open('https://t.me/offshore_directory', '_blank');
        });
    }
}

// Handle form submission
function handleFormSubmission() {
    const formData = {
        name: document.getElementById('serviceName').value,
        website: document.getElementById('serviceWebsite').value,
        description: document.getElementById('serviceDescription').value,
        category: document.getElementById('serviceCategory').value,
        country: document.getElementById('serviceCountry').value,
        logPolicy: document.getElementById('serviceLogPolicy').value,
        dmca: document.getElementById('serviceDMCA').value,
        ownsServers: document.getElementById('serviceOwnsServers').value,
        paymentMethods: document.getElementById('servicePaymentMethods').value.split(',').map(m => m.trim()),
        status: document.getElementById('serviceStatus').value
    };

    // Add new service to the data
    const newService = {
        id: Date.now(),
        ...formData,
        lastChange: new Date().toISOString().split('T')[0]
    };

    servicesData.push(newService);
    
    // Reset form and close modal
    submitForm.reset();
    submitModal.style.display = 'none';
    
    // Re-render services
    renderServices();
    
    // Show success message
    showNotification('Service submitted successfully!', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
    `;
    
    if (type === 'success') {
        notification.style.background = 'var(--accent-success)';
    } else if (type === 'error') {
        notification.style.background = 'var(--accent-danger)';
    } else {
        notification.style.background = 'var(--accent-primary)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Get status display
function getStatusDisplay(status) {
    switch(status) {
        case 'verified':
            return '<i class="fas fa-check"></i> verified';
        case 'capitalist':
            return '<i class="fas fa-coins"></i> capitalist';
        case 'unverified':
            return '<i class="fas fa-question"></i> unverified';
        case 'trash':
            return '<i class="fas fa-times"></i> trash';
        case 'premium':
            return '<i class="fas fa-star"></i> premium';
        default:
            return '<i class="fas fa-question"></i> unknown';
    }
}

// Get country flag with local file path
function getCountryFlag(country) {
    if (!country || country === 'unknown') {
        return '<span class="country-flag unknown">?</span>';
    }
    return `<img class="country-flag" src="flags/${country}.png" alt="${country.toUpperCase()}" onerror="this.style.display='none'">`;
}

// Render services
function renderServices() {
    let filteredServices = servicesData.filter(service => {
        // Category filter
        if (currentCategory !== 'all' && service.category !== currentCategory) {
            return false;
        }

        // Status filter
        if (currentFilter !== 'all' && service.status !== currentFilter) {
            return false;
        }

        // Search filter
        if (searchTerm) {
            const searchFields = [
                service.name,
                service.description,
                service.website
            ].join(' ').toLowerCase();
            
            if (!searchFields.includes(searchTerm)) {
                return false;
            }
        }

        return true;
    });

    // Sort services by status: premium -> verified -> capitalist -> unverified -> trash
    const statusOrder = {
        'premium': 1,
        'verified': 2,
        'capitalist': 3,
        'unverified': 4,
        'trash': 5
    };

    filteredServices.sort((a, b) => {
        const statusA = statusOrder[a.status] || 6;
        const statusB = statusOrder[b.status] || 6;
        return statusA - statusB;
    });

    if (filteredServices.length === 0) {
        servicesTableBody.innerHTML = `
            <tr>
                <td colspan="10" style="text-align: center; padding: 40px; color: #666;">
                    no services found
                </td>
            </tr>
        `;
        return;
    }

    servicesTableBody.innerHTML = filteredServices.map(service => {
        return `
            <tr>
                <td>${service.name}</td>
                <td><a href="https://${service.website}" target="_blank" class="website-link">${service.website}</a></td>
                <td>${service.description}</td>
                <td>${getCountryFlag(service.country)}</td>
                <td>${service.logPolicy}</td>
                <td>${service.dmca}</td>
                <td>${service.ownsServers}</td>
                <td>
                    <div class="payment-methods">
                        ${service.paymentMethods.map(method => 
                            `<span class="payment-method">${method}</span>`
                        ).join('')}
                    </div>
                </td>
                <td><span class="status ${service.status}">${getStatusDisplay(service.status)}</span></td>
                <td>${formatDate(service.lastChange)}</td>
            </tr>
        `;
    }).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 