# 🚀 Complete GitHub Setup & Deployment Guide

## Issue: index.html Not Showing in Main Branch

The index.html and other portfolio files need to be pushed to GitHub first.

---

## 📦 COMPLETE SETUP (Step-by-Step)

### STEP 1: Download Your Portfolio

Download the **ENTIRE `/app` folder** (not just frontend) to your local computer.

Save to: 
- Windows: `C:\Users\YourName\portfolio\`
- Mac/Linux: `~/portfolio/`

Your folder structure should look like:
```
portfolio/
├── frontend/
│   ├── public/
│   │   ├── index.html       ← This is what you need!
│   │   ├── 404.html
│   │   └── .nojekyll
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/
├── README.md
└── other files...
```

---

### STEP 2: Open Terminal

**Windows:** 
1. Press `Win + R`
2. Type `cmd` and press Enter
3. Or open "Git Bash"

**Mac/Linux:**
1. Press `Cmd + Space`
2. Type "Terminal"
3. Press Enter

---

### STEP 3: Navigate to Your Portfolio

```bash
# Windows (Git Bash or CMD)
cd C:\Users\YourName\portfolio

# Mac/Linux
cd ~/portfolio
```

Verify you're in the right place:
```bash
ls
# Should show: frontend, backend, README.md, etc.
```

---

### STEP 4: Initialize Git Repository

```bash
# Initialize git
git init

# Configure your identity
git config user.name "Nidhi Srivastava"
git config user.email "nidhiaransh@gmail.com"

# Add all files
git add .

# Check what will be committed
git status
# Should show: frontend/, backend/, etc.

# Commit all files
git commit -m "Initial portfolio setup with complete codebase"
```

---

### STEP 5: Connect to GitHub Repository

```bash
# Add GitHub repository as remote
git remote add origin https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-.git

# Verify remote is added
git remote -v
# Should show your repository URL
```

---

### STEP 6: Push to GitHub

```bash
# Set main as default branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**IMPORTANT:** When asked for password:
- ❌ Don't use your GitHub password (it won't work)
- ✅ Use a Personal Access Token (PAT)

**How to get PAT:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: "Portfolio Deployment"
4. Expiration: 90 days (or No expiration)
5. Select scopes:
   - ✅ `repo` (all sub-options)
6. Click "Generate token"
7. **COPY THE TOKEN** (you'll only see it once!)
8. Use this token as your password

---

### STEP 7: Verify Files on GitHub

1. Go to: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-
2. Refresh the page
3. You should now see:
   - ✅ `frontend/` folder
   - ✅ `backend/` folder
   - ✅ `README.md`
   - ✅ All deployment guides

4. Navigate to: `frontend/public/`
5. You should see:
   - ✅ `index.html`
   - ✅ `404.html`
   - ✅ `.nojekyll`

---

### STEP 8: Deploy to GitHub Pages

Now that files are on GitHub, deploy the portfolio:

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
yarn install

# Deploy to GitHub Pages
yarn deploy
```

You should see:
```
Published
```

---

### STEP 9: Enable GitHub Pages

1. Go to: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-/settings/pages
2. Under "Source":
   - Branch: Select **`gh-pages`**
   - Folder: Select **`/ (root)`**
3. Click **Save**
4. GitHub will show: "Your site is ready to be published at https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/"

---

### STEP 10: Wait & Test

1. **Wait 5 minutes** for GitHub Pages to build
2. Clear browser cache (`Ctrl + Shift + R` or `Cmd + Shift + R`)
3. Visit: **https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/**
4. Your portfolio should be LIVE! 🎉

---

## 🔍 Verification Checklist

After completing all steps:

**On GitHub (main branch):**
- [ ] Repository shows `frontend/` and `backend/` folders
- [ ] `frontend/public/index.html` exists
- [ ] `frontend/src/` contains all components
- [ ] `frontend/package.json` exists
- [ ] README.md is visible

**On GitHub (gh-pages branch):**
- [ ] Click "Branch" dropdown → Select `gh-pages`
- [ ] You should see built files: `index.html`, `static/`, etc.

**On Live Site:**
- [ ] https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/ loads
- [ ] Hero section with your name visible
- [ ] All navigation links work
- [ ] Projects, Awards, Research sections load
- [ ] No console errors (press F12 to check)

---

## 🐛 Troubleshooting

### Issue 1: "Permission denied (publickey)"

**Solution:**
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-.git

# Try pushing again
git push -u origin main
```

### Issue 2: "Authentication failed"

**Solution:**
- You're using your GitHub password (which doesn't work)
- Create a Personal Access Token (see Step 6)
- Use the token as your password

### Issue 3: "Repository not found"

**Solution:**
1. Check repository name is exactly: `Nidhi-Srivastava-Profile-cybersecurity-`
2. Verify repository exists: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-
3. Make sure repository is public (not private)

### Issue 4: "yarn: command not found"

**Solution:**
```bash
# Install yarn
npm install -g yarn

# Verify installation
yarn --version
```

### Issue 5: "npm: command not found"

**Solution:**
- Install Node.js from: https://nodejs.org/
- Download LTS version
- Restart terminal after installation

### Issue 6: Files pushed but index.html still not visible

**Solution:**
1. Refresh GitHub page (Ctrl+F5)
2. Check you're looking in `frontend/public/` folder
3. Verify files were committed:
   ```bash
   git log --oneline
   # Should show your commit
   ```

### Issue 7: "gh-pages" branch doesn't exist

**Solution:**
- This is normal! It's created automatically by `yarn deploy`
- Run `yarn deploy` from `/frontend` folder
- Wait 1-2 minutes, then check branches

---

## 📁 Correct File Structure on GitHub

After Step 6, your GitHub repository should look like:

```
Nidhi-Srivastava-Profile-cybersecurity-/
├── .emergent/
├── .gitignore
├── README.md
├── AWS_DEPLOYMENT_GUIDE.md
├── DEPLOYMENT_FIX_GUIDE.md
├── DEPLOYMENT_GUIDE.md
├── GITHUB_PAGES_DEPLOYMENT.md
├── QUICK_DEPLOYMENT_GUIDE.md
├── QUICK_FIX.md
├── RESUME_INTEGRATION_EXAMPLES.md
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── ...
└── frontend/
    ├── public/
    │   ├── index.html          ← MUST BE HERE!
    │   ├── 404.html
    │   ├── .nojekyll
    │   ├── favicon.ico
    │   └── manifest.json
    ├── src/
    │   ├── components/
    │   ├── data/
    │   ├── pages/
    │   ├── App.js
    │   └── index.js
    ├── package.json
    ├── tailwind.config.js
    └── deploy.sh
```

---

## 🎯 Quick Commands Reference

```bash
# Check current location
pwd

# List files in current directory
ls -la

# Check git status
git status

# Check git branches
git branch -a

# Check remote repositories
git remote -v

# View recent commits
git log --oneline -5

# Navigate to frontend
cd frontend

# Install dependencies
yarn install

# Test locally
yarn start

# Build production
yarn build

# Deploy to GitHub Pages
yarn deploy
```

---

## ✅ Success Indicators

You'll know everything is working when:

1. ✅ GitHub shows all files in main branch
2. ✅ `frontend/public/index.html` is visible on GitHub
3. ✅ `yarn deploy` completes successfully
4. ✅ `gh-pages` branch exists
5. ✅ GitHub Pages shows "Your site is live"
6. ✅ Portfolio loads at: https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/

---

## 🔄 Future Updates

After initial setup, updating is easy:

```bash
# Navigate to portfolio folder
cd path/to/portfolio

# Make your changes to files

# Commit changes
git add .
git commit -m "Updated portfolio with new project"
git push origin main

# Deploy updated version
cd frontend
yarn deploy
```

Changes live in 2-5 minutes!

---

## 📧 Add to Resume (After Live)

```
NIDHI SRIVASTAVA
Senior GRC Architect & Cybersecurity Leader

📧 nidhiaransh@gmail.com
💼 linkedin.com/in/nidhi-srivastava-a5493468
🌐 nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-
📍 Global | USA
```

---

## 🆘 Still Need Help?

If you're stuck:

1. **Check Git is installed:**
   ```bash
   git --version
   # Should show: git version 2.x.x
   ```

2. **Check Node.js is installed:**
   ```bash
   node --version
   # Should show: v18.x.x or higher
   ```

3. **Check you're in the right folder:**
   ```bash
   pwd
   ls
   # Should see: frontend/, backend/, etc.
   ```

4. **Check GitHub Actions:**
   - Go to: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-/actions
   - Look for deployment status

5. **Check Browser Console:**
   - Press F12
   - Look for errors
   - Share error messages if you need help

---

**Follow these steps exactly and your portfolio will be live!** 🚀

**Timeline:**
- Steps 1-6: Push to GitHub → 10 minutes
- Steps 7-9: Deploy to Pages → 5 minutes
- Step 10: Wait for live → 5 minutes
- **Total:** ~20 minutes
