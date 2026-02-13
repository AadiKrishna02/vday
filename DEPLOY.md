# How to Publish Your Valentine's Website

Here are the easiest ways to publish your website:

## Option 1: Netlify Drop (EASIEST - No account needed!)

1. Go to **https://app.netlify.com/drop**
2. Simply drag and drop your entire `Vday` folder onto the page
3. You'll get a link instantly (like `https://random-name.netlify.app`)
4. Share that link with anyone!

## Option 2: GitHub Pages (Free & Permanent)

1. Create a GitHub account at https://github.com (if you don't have one)
2. Create a new repository (click the "+" icon, then "New repository")
3. Name it something like "valentine-website"
4. Don't initialize with README
5. Open Terminal and run these commands:

```bash
cd /Users/aadikrishna/Desktop/Vday
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valentine-website.git
git push -u origin main
```

6. Go to your repository on GitHub
7. Click "Settings" → "Pages"
8. Under "Source", select "main" branch and "/ (root)"
9. Click "Save"
10. Your site will be at: `https://YOUR_USERNAME.github.io/valentine-website/`

## Option 3: Vercel (Also Very Easy)

1. Go to **https://vercel.com** and sign up (free)
2. Click "Add New Project"
3. Drag and drop your `Vday` folder
4. Click "Deploy"
5. You'll get a link instantly!

## Option 4: Surge.sh (Command Line)

1. Install: `npm install -g surge`
2. In Terminal, run:
```bash
cd /Users/aadikrishna/Desktop/Vday
surge
```
3. Follow the prompts (you can use a free subdomain)
4. Done!

---

**Recommendation:** Use **Netlify Drop** (Option 1) - it's the fastest and requires no setup!