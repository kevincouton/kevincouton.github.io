#!/bin/bash

# Blog Deployment Script
# This script builds the project and deploys to GitHub Pages

echo "🚀 Starting blog deployment..."

# Check if we're on the blog-redesign branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "blog-redesign" ]; then
    echo "❌ Please run this script from the blog-redesign branch"
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ There are uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Build the project
echo "📦 Building project..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ dist directory not found after build!"
    exit 1
fi

# Create a temporary directory to store built files
echo "📁 Preparing built files..."
TEMP_DIR="/tmp/blog-deploy-$(date +%s)"
mkdir -p "$TEMP_DIR"
cp -r dist/* "$TEMP_DIR/" 2>/dev/null || true
cp -r dist/.* "$TEMP_DIR/" 2>/dev/null || true

# Switch to master branch
echo "🔄 Switching to master branch..."
git checkout master

# Remove old files (keep .git and other important files)
echo "🧹 Cleaning up old files..."
find . -maxdepth 1 -not -name '.git' -not -name '.gitignore' -not -name '.' -exec rm -rf {} \;

# Copy built files from temp directory
echo "📁 Copying built files..."
cp -r "$TEMP_DIR"/* . 2>/dev/null || true
cp -r "$TEMP_DIR"/.* . 2>/dev/null || true

# Clean up temp directory
rm -rf "$TEMP_DIR"

# Add and commit changes
echo "💾 Committing changes..."
git add .
git commit -m "deploy: update blog from blog-redesign branch

- Built on $(date)
- Source: $(git log --oneline -1 blog-redesign)"

# Push to master
echo "🚀 Pushing to GitHub..."
git push origin master

# Switch back to blog-redesign branch
echo "🔄 Switching back to blog-redesign branch..."
git checkout blog-redesign

echo "✅ Deployment complete!"
echo "🌐 Your blog should be available at: https://kevincouton.github.io"
echo ""
echo "📝 To deploy again:"
echo "   1. Make your changes on the blog-redesign branch"
echo "   2. Commit your changes"
echo "   3. Run: ./deploy.sh"
