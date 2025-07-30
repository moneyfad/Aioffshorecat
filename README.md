# Offshore Directory

A comprehensive directory of offshore services, inspired by offshore.cat with enhanced features and responsive design.

## 🌟 Features

- **500+ Services** from offshore.cat and tld-list.com
- **Big Country Flags** (40×30px desktop, responsive mobile)
- **Local Flag Files** (104+ flag files included)
- **Mobile/Console/PC** responsive design
- **Professional UI** matching offshore.cat aesthetic
- **Search and Filtering** functionality
- **Status Badges** with proper categorization
- **Payment Method Tags** for easy scanning

## 📊 Categories

- **Hosting Services** (30+ providers)
- **Domain Registrars** (45+ registrars from tld-list.com)
- **VPN Services** (20+ providers)
- **Email Services** (16+ providers)
- **Messenger Services** (20+ platforms)
- **Crypto Services** (Comprehensive list)
- **CDN/WAF Services** (Multiple providers)
- **Upload Services** (File sharing platforms)
- **Products** (Privacy-focused hardware)
- **Recommended** (Premium services with star ratings)

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/offshore-directory.git
   cd offshore-directory
   ```

2. **Start the local server:**
   ```bash
   python -m http.server 8000
   ```

3. **Open in your browser:**
   ```
   http://localhost:8000
   ```

## 🎨 Design Features

- **Dark Theme** (#0a0a0a background)
- **JetBrains Mono** typography
- **Minimalist Design** matching offshore.cat
- **Responsive Tables** with column hiding on mobile
- **Touch-Friendly** buttons (44px minimum)
- **Accessibility** features for all input methods

## 📱 Responsive Design

- **Desktop**: Full table with all columns
- **Tablet** (768px): Hides logPolicy, dmca, ownsServers columns
- **Mobile** (480px): Hides paymentMethods, lastChange columns
- **Flags**: Scale from 40×30px to 20×15px across devices

## 🏁 Country Flags

- **104+ Flag Files** downloaded locally
- **Big Flags** (40×30px on desktop)
- **Responsive Scaling** for mobile devices
- **Fallback Styling** for unknown countries
- **Enhanced Borders** and shadows

## 🔍 Search & Filter

- **Real-time Search** across all fields
- **Category Filtering** (hosting, domains, vpn, etc.)
- **Status Filtering** (verified, capitalist, unverified, premium)
- **Payment Method** filtering
- **Country-based** filtering

## 📈 Status System

- **Verified** ✅ - Trusted services
- **Capitalist** 💰 - Large corporations
- **Unverified** ⚠️ - New or unknown services
- **Premium** ⭐ - Recommended services
- **Trash** 🗑️ - Avoid these services

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with media queries
- **Vanilla JavaScript** - No frameworks required
- **Python HTTP Server** - Simple local hosting
- **Git** - Version control

## 📋 File Structure

```
offshore-directory/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── flags/              # Country flag images (104+ files)
├── README.md           # This file
├── .gitignore          # Git ignore rules
├── download_flags.ps1  # PowerShell script for downloading flags
└── offshore_scraper_fixed.html  # Enhanced scraper tool
```

## 🔧 Customization

### Adding New Services

Edit `script.js` and add new entries to the `servicesData` array:

```javascript
{
    id: 999,
    name: "Service Name",
    website: "service.com",
    description: "Service description",
    category: "category",
    company: "Company Name",
    country: "country_code",
    logPolicy: "Policy",
    dmca: "Policy",
    ownsServers: "Yes/No",
    paymentMethods: ["Method1", "Method2"],
    status: "verified/capitalist/unverified/premium",
    lastChange: "YYYY-MM-DD"
}
```

### Adding New Flags

1. Download flag from [flagcdn.com](https://flagcdn.com)
2. Save as `flags/country_code.png`
3. Update the `getCountryFlag()` function if needed

## 🌐 Live Demo

Visit the live demo at: [Your GitHub Pages URL]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by [offshore.cat](https://offshore.cat)
- Flag images from [flagcdn.com](https://flagcdn.com)
- Domain registrar data from [tld-list.com](https://tld-list.com)

## 📞 Support

If you have questions or suggestions, please open an issue on GitHub.

---

**Last Updated**: 2025-01-29  
**Total Services**: 500+  
**Flag Files**: 104+ 