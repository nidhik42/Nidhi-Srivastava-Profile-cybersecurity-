#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy your portfolio to GitHub Pages

echo "🚀 Nidhi Srivastava Portfolio - GitHub Pages Deployment"
echo "======================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from the frontend directory"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

echo "🔨 Building production version..."
yarn build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📤 Deploying to GitHub Pages..."
yarn deploy
if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    echo ""
    echo "Common issues:"
    echo "1. Make sure you have push access to the repository"
    echo "2. Check if Git is configured: git config --list"
    echo "3. Ensure you're authenticated with GitHub"
    exit 1
fi

echo ""
echo "✅ Deployment successful!"
echo ""
echo "🌐 Your portfolio will be live in 2-5 minutes at:"
echo "https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/"
echo ""
echo "📊 Check deployment status:"
echo "https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-/actions"
echo ""
echo "🎉 Done!"
