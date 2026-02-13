#!/bin/bash

# Script to push Valentine's Day website to GitHub
# Usage: ./push-to-github.sh YOUR_GITHUB_USERNAME REPO_NAME

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: ./push-to-github.sh YOUR_GITHUB_USERNAME REPO_NAME"
    echo "Example: ./push-to-github.sh myusername valentine-website"
    exit 1
fi

GITHUB_USER=$1
REPO_NAME=$2

echo "Setting up remote repository..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git

echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Done! Your website is now at:"
echo "   https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
echo "To enable GitHub Pages:"
echo "1. Go to https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
echo "2. Under 'Source', select 'main' branch and '/ (root)'"
echo "3. Click 'Save'"
echo ""