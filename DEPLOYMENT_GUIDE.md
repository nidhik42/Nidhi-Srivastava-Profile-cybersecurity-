# Deployment Guide - Nidhi Srivastava Portfolio

## 🚀 GitHub Pages Deployment (RECOMMENDED)

Your portfolio is configured to deploy to: **https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/**

### Prerequisites
- Git installed on your local machine
- GitHub account with repository: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-

### Step-by-Step Deployment Instructions

#### 1. Clone/Download Your Code

If working from Emergent, download your code:
```bash
# From your local machine
# Download the /app/frontend directory from Emergent
```

#### 2. Navigate to Frontend Directory
```bash
cd frontend
```

#### 3. Install Dependencies (if not already installed)
```bash
yarn install
```

#### 4. Build the Production Version
```bash
yarn build
```
This creates an optimized production build in the `build` folder.

#### 5. Deploy to GitHub Pages
```bash
yarn deploy
```

This command will:
- Build your project
- Create/update the `gh-pages` branch
- Push the build folder to GitHub Pages

#### 6. Enable GitHub Pages (First Time Only)

1. Go to your repository: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

#### 7. Wait for Deployment (2-5 minutes)

GitHub will automatically deploy your site. You'll see:
- ✅ Your site is live at https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
cd frontend
yarn build
yarn deploy
```

Changes will be live in 2-5 minutes!

---

## 🌐 Custom Domain (Optional)

### Option 1: Use Your Own Domain

1. Buy a domain (e.g., nidhisrivastava.com) from:
   - Namecheap
   - GoDaddy
   - Google Domains

2. Add CNAME file to your repository:
```bash
echo "nidhisrivastava.com" > frontend/public/CNAME
```

3. Configure DNS records at your domain provider:
```
Type: CNAME
Name: www
Value: nidhik42.github.io
```

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

4. In GitHub Settings > Pages, enter your custom domain
5. Enable "Enforce HTTPS"

---

## 📝 File Checklist Before Deployment

Ensure these files are in your repository:

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── CoreDomains.jsx
│   │   ├── ProjectsShowcase.jsx
│   │   ├── ExperienceTimeline.jsx
│   │   ├── Awards.jsx
│   │   ├── ResearchSpeaking.jsx
│   │   ├── TechStack.jsx
│   │   ├── HiringManagerSummary.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── mock.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🔍 Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check browser console. Ensure basename is correct in App.js:
```javascript
<BrowserRouter basename="/Nidhi-Srivastava-Profile-cybersecurity-">
```

### Issue: 404 errors for assets
**Solution:** Verify homepage in package.json:
```json
"homepage": "https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-"
```

### Issue: Deploy command fails
**Solution:** 
1. Check Git is configured:
```bash
git config --global user.name "Your Name"
git config --global user.email "nidhiaransh@gmail.com"
```

2. Ensure you have push access to the repository

### Issue: Changes not showing
**Solution:** 
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait 5 minutes for GitHub Pages to update
3. Check GitHub Actions tab for deployment status

---

## 📊 Monitoring Your Portfolio

### Check Deployment Status
- Go to: https://github.com/nidhik42/Nidhi-Srivastava-Profile-cybersecurity-/actions
- Look for "pages build and deployment" workflows
- Green checkmark = successful deployment

### Analytics (Optional)
Add Google Analytics to track visitors:

1. Get tracking ID from analytics.google.com
2. Add to `public/index.html`:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## 🎯 Quick Deploy Commands

```bash
# First time setup
cd frontend
yarn install
yarn build
yarn deploy

# Future updates
cd frontend
yarn deploy
```

---

## 📱 Share Your Portfolio

Once deployed, share your portfolio:

**Portfolio URL:** https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/

**LinkedIn:**
1. Go to your LinkedIn profile
2. Edit "Featured" section
3. Add external link
4. Use your portfolio URL

**Resume:**
- Add portfolio link at the top of your resume
- Format: Portfolio: [nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-](https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/)

**Email Signature:**
```
Nidhi Srivastava
Senior GRC Architect & Cybersecurity Leader
Portfolio: https://nidhik42.github.io/Nidhi-Srivastava-Profile-cybersecurity-/
Email: nidhiaransh@gmail.com
LinkedIn: linkedin.com/in/nidhi-srivastava-a5493468
```

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly at the GitHub Pages URL
- [ ] All sections visible (Hero, About, Projects, Experience, Awards, Research, Contact)
- [ ] Navigation links work
- [ ] Images load properly
- [ ] Contact form displays correctly
- [ ] Mobile responsive (test on phone)
- [ ] Shared on LinkedIn
- [ ] Added to resume
- [ ] Tested on different browsers (Chrome, Firefox, Safari)

---

## 🆘 Need Help?

If you encounter issues:
1. Check GitHub Actions logs
2. Verify repository settings
3. Ensure gh-pages branch exists
4. Clear browser cache
5. Wait 5-10 minutes after deployment

---

**Your portfolio is ready to impress hiring managers! 🎉**
