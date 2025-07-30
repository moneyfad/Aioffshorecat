@echo off
REM Offshore Directory - Rust WASM Build Script (Windows)

echo 🌊 Building Offshore Directory (Rust WASM)...

REM Check if Rust is installed
cargo --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Rust is not installed. Please install Rust from https://rustup.rs/
    pause
    exit /b 1
)

REM Check if Trunk is installed
trunk --version >nul 2>&1
if errorlevel 1 (
    echo 📦 Installing Trunk...
    cargo install trunk
)

REM Add WASM target if not already added
echo 🎯 Adding WASM target...
rustup target add wasm32-unknown-unknown

REM Build the application
echo 🔨 Building application...

REM Check if we want to run desktop or web version
if "%1"=="desktop" (
    echo 🖥️  Building desktop version...
    cargo build --release
    echo ✅ Desktop build complete!
    echo 🚀 Run with: cargo run
) else if "%1"=="web" (
    echo 🌐 Building web version...
    trunk build --release
    echo ✅ Web build complete!
    echo 🚀 Run with: trunk serve
) else (
    echo 🌐 Building web version...
    trunk build --release
    echo ✅ Web build complete!
    echo 🚀 Starting web server...
    trunk serve
)

echo 🎉 Build process complete!
pause 