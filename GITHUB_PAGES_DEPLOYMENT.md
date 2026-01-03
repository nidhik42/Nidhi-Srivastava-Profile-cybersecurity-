# Complete Deployment Guide - Step by Step

## 🚀 OPTION 1: GitHub Pages (EASIEST - RECOMMENDED FOR RESUME)

### Why GitHub Pages?
- ✅ **FREE** - No cost
- ✅ **Fast** - Live in 5 minutes
- ✅ **Professional** - Perfect for resumes
- ✅ **No maintenance** - Automatic HTTPS
- ✅ **Easy updates** - Just run one command

### Step-by-Step Instructions

#### Step 1: Download Your Portfolio Code

**From Emergent/Current System:**
1. Download the entire `/app/frontend` folder to your local computer
2. Save it somewhere like `C:\Users\YourName\Documents\portfolio\frontend` (Windows)
   or `~/Documents/portfolio/frontend` (Mac/Linux)

#### Step 2: Install Prerequisites

**A. Install Node.js (if not already installed)**
1. Go to: https://nodejs.org/
2. Download LTS version (Long Term Support)
3. Run installer and follow prompts
4. Verify installation:
   ```bash
   node --version
   # Should show: v18.x.x or higher
   ```

**B. Install Yarn**
```bash
npm install -g yarn
```

Verify:
```bash
yarn --version
# Should show: 1.22.x or higher
```

#### Step 3: Install Git (if not already installed)

**Windows:**
1. Download from: https://git-scm.com/download/win
2. Install with default options
3. Open "Git Bash" application

**Mac:**
```bash
# Install via Homebrew
brew install git
```

**Linux:**
```bash
sudo apt-get install git
```

Verify:
```bash
git --version
```

#### Step 4: Configure Git

```bash
git config --global user.name "Nidhi Srivastava"
git config --global user.email "nidhiaransh@gmail.com"
```

#### Step 5: Navigate to Your Portfolio Folder

**Windows (Git Bash):**
```bash
cd /c/Users/YourName/Documents/portfolio/frontend
```

**Mac/Linux:**
```bash
cd ~/Documents/portfolio/frontend
```

#### Step 6: Initialize Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-.git

# Push to main branch
git branch -M main
git push -u origin main
```

**Note:** You'll be prompted for GitHub credentials. Use your GitHub username and a Personal Access Token (PAT) as password.

**How to create GitHub Personal Access Token:**
1. Go to GitHub.com → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "Portfolio Deployment"
4. Select scopes: `repo` (all options)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Use this token as your password when pushing

#### Step 7: Install Dependencies

```bash
yarn install
```

Wait for installation to complete (2-3 minutes).

#### Step 8: Test Locally (Optional but Recommended)

```bash
yarn start
```

- Portfolio will open at `http://localhost:3000`
- Check if everything looks good
- Press `Ctrl+C` to stop the server

#### Step 9: Deploy to GitHub Pages

```bash
yarn deploy
```

This will:
- Build your portfolio
- Create `gh-pages` branch
- Deploy to GitHub

Wait for completion (1-2 minutes).

#### Step 10: Enable GitHub Pages

1. Go to: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-/settings/pages
2. Under "Source":
   - Branch: Select `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**
4. Wait 2-5 minutes

#### Step 11: Verify Deployment

Open: **https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/**

✅ Your portfolio is now LIVE!

---

## 📝 How to Add to Resume

### 1. At the Top of Resume (Header Section)

```
NIDHI SRIVASTAVA
Senior GRC Architect & Cybersecurity Leader

Email: nidhiaransh@gmail.com
LinkedIn: linkedin.com/in/nidhi-srivastava-a5493468
Portfolio: nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-
Location: Global | USA
```

### 2. As a Clickable Link (if PDF supports hyperlinks)

In Microsoft Word:
1. Type: "Portfolio: nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-"
2. Select the URL
3. Right-click → Hyperlink
4. Paste: https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/
5. Save as PDF

### 3. In LinkedIn Profile

**Add to Featured Section:**
1. Go to your LinkedIn profile
2. Scroll to "Featured" section
3. Click "Add featured" → Link
4. URL: https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/
5. Title: "Professional Cybersecurity & GRC Portfolio"
6. Description: "Executive portfolio showcasing 18+ years of GRC leadership, AI governance, and enterprise security programs"

**Add to Contact Info:**
1. Click "Contact info"
2. Website → Personal website
3. Add: nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-
4. Save

### 4. In Email Signature

```
Nidhi Srivastava
Senior GRC Architect & Cybersecurity Leader
📧 nidhiaransh@gmail.com
💼 linkedin.com/in/nidhi-srivastava-a5493468
🌐 nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-
```

### 5. Example Resume Professional Summary

```
PROFESSIONAL SUMMARY

Award-winning GRC Architect with 18+ years driving enterprise security, compliance, 
and risk management for Fortune 500 clients. Achieved 95% compliance improvement 
and delivered $60M+ in business impact through strategic governance and AI risk 
frameworks.

Portfolio: nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-
```

---

## 🔄 How to Update Your Portfolio Later

Whenever you make changes:

```bash
# Navigate to frontend folder
cd path/to/frontend

# Make your changes to files

# Deploy
yarn deploy
```

Changes will be live in 2-5 minutes!

---

## ⚠️ Troubleshooting

### Issue: "git push" asks for password but GitHub password doesn't work

**Solution:** GitHub no longer accepts passwords. Use Personal Access Token:
1. Generate token (see Step 6 above)
2. Use token instead of password

### Issue: "yarn: command not found"

**Solution:** Install yarn:
```bash
npm install -g yarn
```

### Issue: Blank page after deployment

**Solution:** 
1. Check browser console (F12)
2. Clear cache (Ctrl+Shift+R)
3. Wait 5 minutes for GitHub Pages to update

### Issue: "gh-pages: command not found"

**Solution:**
```bash
cd frontend
yarn install
yarn deploy
```

### Issue: Changes not showing on live site

**Solution:**
1. Clear browser cache
2. Try incognito/private mode
3. Wait 5 minutes
4. Check: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-/actions

---

## 📱 Share Your Portfolio

### Professional Networks
- **LinkedIn:** Add to Featured section and Contact Info
- **GitHub:** Pin the repository to your profile
- **Twitter/X:** Share with professional hashtags

### Job Applications
- **Resume:** Add to header section
- **Cover Letter:** Mention in first paragraph
- **Application Form:** Include in "Website/Portfolio" field

### Networking
- **Email Signature:** Always visible
- **Business Cards:** Add QR code linking to portfolio
- **Conferences:** Include in speaker bio

---

## ✅ Post-Deployment Checklist

- [ ] Portfolio loads at GitHub Pages URL
- [ ] All sections visible and working
- [ ] Links in navigation work
- [ ] Images load correctly
- [ ] Mobile responsive (test on phone)
- [ ] Added to resume header
- [ ] Added to LinkedIn profile
- [ ] Added to email signature
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Shared with at least 3 professional contacts

---

**Next:** See AWS_DEPLOYMENT_GUIDE.md for enterprise hosting options (optional)

---

**Questions?** Common commands:

```bash
# Start local development
yarn start

# Build production version
yarn build

# Deploy to GitHub Pages
yarn deploy

# Check what branch you're on
git branch

# See deployment status
git log --oneline
```
