#!/bin/bash

# Offshore Directory - Rust WASM Build Script

echo "🌊 Building Offshore Directory (Rust WASM)..."

# Check if Rust is installed
if ! command -v cargo &> /dev/null; then
    echo "❌ Rust is not installed. Please install Rust from https://rustup.rs/"
    exit 1
fi

# Check if Trunk is installed
if ! command -v trunk &> /dev/null; then
    echo "📦 Installing Trunk..."
    cargo install trunk
fi

# Add WASM target if not already added
echo "🎯 Adding WASM target..."
rustup target add wasm32-unknown-unknown

# Build the application
echo "🔨 Building application..."

# Check if we want to run desktop or web version
if [ "$1" = "desktop" ]; then
    echo "🖥️  Building desktop version..."
    cargo build --release
    echo "✅ Desktop build complete!"
    echo "🚀 Run with: cargo run"
elif [ "$1" = "web" ]; then
    echo "🌐 Building web version..."
    trunk build --release
    echo "✅ Web build complete!"
    echo "🚀 Run with: trunk serve"
else
    echo "🌐 Building web version..."
    trunk build --release
    echo "✅ Web build complete!"
    echo "🚀 Starting web server..."
    trunk serve
fi

echo "🎉 Build process complete!" 