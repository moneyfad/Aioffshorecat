# 🌊 Offshore Directory - Rust WASM Powered

A fast, modern web application that combines the power of Rust with universal web compatibility. The backend logic is written in Rust and compiled to WebAssembly for maximum performance, while the frontend uses standard HTML/CSS/JavaScript to ensure compatibility with all devices (laptops, phones, consoles, etc.).

## 🚀 Features

- **Rust Performance**: Backend logic written in Rust, compiled to WASM for speed
- **Universal Compatibility**: Works on all devices and browsers
- **Modern UI**: Responsive design that adapts to any screen size
- **Real-time Search**: Instant filtering powered by Rust
- **Category Filtering**: Filter by service categories
- **Status Filtering**: Filter by service status (premium, verified, etc.)
- **Cross-Platform**: No special software required - runs in any web browser

## 🛠️ Technology Stack

- **Backend**: Rust (compiled to WebAssembly)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Trunk for WASM compilation
- **Styling**: Modern CSS with responsive design
- **Icons**: Font Awesome
- **Fonts**: JetBrains Mono

## 📦 Installation

### Prerequisites

1. **Install Rust**: https://rustup.rs/
2. **Install Trunk** (for WASM builds):
   ```bash
   cargo install trunk
   ```
3. **Add WASM target**:
   ```bash
   rustup target add wasm32-unknown-unknown
   ```

### Running the Application

#### Web Application (Recommended)
```bash
trunk serve
```
Then open http://localhost:8080 in your browser.

#### Build for Production
```bash
trunk build --release
```

#### Using Build Scripts
```bash
# Linux/Mac
./build.sh

# Windows
build.bat
```

## 🏗️ Project Structure

```
offshore-directory/
├── src/
│   └── lib.rs              # Rust backend logic (WASM)
├── Cargo.toml              # Rust dependencies
├── Trunk.toml              # Web build configuration
├── index.html              # Main web page
├── styles.css              # CSS styling
├── script.js               # JavaScript frontend logic
├── flags/                  # Country flag images
├── build.sh                # Linux/Mac build script
├── build.bat               # Windows build script
└── README.md               # This file
```

## 🎨 Features

### Service Categories
- Email Services
- VPN Services
- Hosting Services
- Domain Services
- Cryptocurrency Services
- Gaming Services
- Social Media
- Tools
- Products
- Password Managers
- Chess Services

### Service Status Types
- **Premium**: High-quality, recommended services
- **Verified**: Trusted and verified services
- **Capitalist**: Commercial services with mixed reviews
- **Unverified**: Services requiring verification
- **Trash**: Services to avoid

### Search and Filtering
- Real-time search across service names and descriptions (powered by Rust)
- Filter by category
- Filter by status
- Combined filtering (search + category + status)

## 🔧 Development

### Adding New Services
Edit the `load_services()` function in `src/lib.rs`:

```rust
self.services.push(Service::new(
    id,                    // Unique ID
    "Service Name",        // Service name
    "service.com",         // Website URL
    "Description...",      // Service description
    "category",            // Category (email, vpn, etc.)
    "Company Name",        // Company name
    "country_code",        // Country code (us, de, etc.)
    "Log Policy",          // Logging policy
    "DMCA Policy",         // DMCA policy
    "Owns Servers",        // Server ownership
    vec!["Payment", "Methods"], // Payment methods
    "status",              // Status (premium, verified, etc.)
    "2025-07-29"          // Last update date
));
```

### Customizing the UI
The UI is built using standard HTML/CSS/JavaScript. Modify `styles.css` for styling changes and `index.html` for structure changes.

## 🌐 Web Deployment

To deploy the web version:

1. Build the application:
   ```bash
   trunk build --release
   ```

2. Upload the contents of the `dist/` folder to your web server.

## 📱 Device Compatibility

### Supported Devices
- ✅ **Desktop/Laptop**: Windows, macOS, Linux
- ✅ **Mobile Phones**: iOS Safari, Android Chrome, etc.
- ✅ **Tablets**: iPad, Android tablets
- ✅ **Gaming Consoles**: PlayStation, Xbox (with web browsers)
- ✅ **Smart TVs**: Any device with a web browser
- ✅ **E-readers**: Kindle, etc. (with browsers)

### Browser Support
The web version works in all modern browsers that support WebAssembly:
- Chrome 57+
- Firefox 52+
- Safari 11+
- Edge 16+
- Mobile browsers

## 🚀 Performance Benefits

### Rust WASM Backend
- **Fast Search**: Instant filtering of thousands of services
- **Efficient Memory**: Optimized data structures
- **Type Safety**: Compile-time error checking
- **Small Bundle**: Efficient WASM compilation

### Universal Frontend
- **No Installation**: Works immediately in any browser
- **Responsive Design**: Adapts to any screen size
- **Touch Friendly**: Optimized for mobile devices
- **Accessibility**: WCAG compliant design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices and browsers
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆚 Migration from JavaScript

This Rust WASM version replaces the previous pure JavaScript implementation with:
- **Better Performance**: Rust-powered search and filtering
- **Type Safety**: Compile-time error checking
- **Smaller Bundle**: Efficient WASM compilation
- **Universal Access**: Works on any device with a browser
- **Modern Architecture**: Separation of concerns (Rust backend, JS frontend)

The functionality remains the same, but with improved performance and reliability.

## 🔗 Links

- **Original Inspiration**: offshore.cat
- **PissMail**: https://pissmail.com/
- **MailHaven**: https://mailhaven.su/
- **Lagging Chess**: https://lagging.site/
- **Font Awesome**: https://fontawesome.com/
- **JetBrains Mono**: https://www.jetbrains.com/lp/mono/

## 📞 Support

For questions or suggestions, please open an issue on the repository.

---

**Built with ❤️ for the privacy community using Rust and WebAssembly** 