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

# Switch to master branch
echo "🔄 Switching to master branch..."
git checkout master

# Remove old files (keep .git and other important files)
echo "🧹 Cleaning up old files..."
find . -maxdepth 1 -not -name '.git' -not -name '.gitignore' -not -name 'deploy.sh' -not -name '.' -exec rm -rf {} \;

# Copy built files to root
echo "📁 Copying built files..."
cp -r dist/* .
cp -r dist/.* . 2>/dev/null || true

# Remove dist directory
rm -rf dist

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
