# AWS Deployment Guide - Professional Hosting

## 🌐 Why Deploy on AWS?

- ✅ **Enterprise-grade** hosting
- ✅ **Custom domain** (e.g., nidhisrivastava.com)
- ✅ **Faster performance** with CloudFront CDN
- ✅ **Professional** for senior roles
- ✅ **SSL/HTTPS** included free
- ⚠️ **Cost:** ~$1-3/month

---

## 🎯 RECOMMENDED: AWS S3 + CloudFront

This is the **best** AWS option for a portfolio website.

### Prerequisites
- AWS Account (sign up at aws.amazon.com)
- Credit/debit card for AWS billing
- Your portfolio built (see GitHub Pages guide first)

---

## Step-by-Step AWS Deployment

### PHASE 1: AWS Account Setup

#### Step 1: Create AWS Account

1. Go to: https://aws.amazon.com/
2. Click "Create an AWS Account"
3. Enter:
   - Email: nidhiaransh@gmail.com
   - Account name: "Nidhi Portfolio"
4. Choose "Personal" account type
5. Complete payment information
6. Verify phone number
7. Choose "Basic Support (Free)"

#### Step 2: Sign in to AWS Console

1. Go to: https://console.aws.amazon.com/
2. Sign in with your credentials
3. **Important:** Note your region (top-right, e.g., "US East (N. Virginia)")

---

### PHASE 2: Build Your Portfolio

#### Step 3: Build Production Version

On your local computer:

```bash
# Navigate to frontend folder
cd path/to/frontend

# Build production version
yarn build
```

This creates a `build` folder with optimized files.

---

### PHASE 3: S3 Bucket Setup

#### Step 4: Create S3 Bucket

1. In AWS Console, search for "S3"
2. Click "Create bucket"
3. **Bucket name:** `nidhi-srivastava-portfolio` (must be unique globally)
   - Alternative: `nidhi-cybersecurity-portfolio-2025`
4. **Region:** US East (N. Virginia) - us-east-1
5. **Object Ownership:** ACLs disabled (recommended)
6. **Block Public Access settings:**
   - ❌ UNCHECK "Block all public access"
   - ✅ CHECK acknowledgment box
7. **Bucket Versioning:** Disabled (for now)
8. Click "Create bucket"

#### Step 5: Upload Portfolio Files

1. Click on your bucket name
2. Click "Upload"
3. Click "Add files" and "Add folder"
4. Upload ALL contents from your `build` folder:
   - Select everything INSIDE the build folder
   - NOT the build folder itself
5. Click "Upload"
6. Wait for completion (1-2 minutes)

#### Step 6: Enable Static Website Hosting

1. In your bucket, click "Properties" tab
2. Scroll to "Static website hosting"
3. Click "Edit"
4. Enable: "Static website hosting"
5. **Hosting type:** Host a static website
6. **Index document:** `index.html`
7. **Error document:** `index.html` (for React Router)
8. Click "Save changes"
9. **Note the endpoint URL** (e.g., `http://nidhi-srivastava-portfolio.s3-website-us-east-1.amazonaws.com`)

#### Step 7: Make Bucket Public

1. Go to "Permissions" tab
2. Scroll to "Bucket policy"
3. Click "Edit"
4. Paste this policy (replace `YOUR-BUCKET-NAME`):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::nidhi-srivastava-portfolio/*"
        }
    ]
}
```

5. Click "Save changes"

#### Step 8: Test Your Website

1. Go to "Properties" tab
2. Scroll to "Static website hosting"
3. Click the "Bucket website endpoint" link
4. Your portfolio should load! 🎉

---

### PHASE 4: CloudFront CDN (Optional but Recommended)

CloudFront provides:
- HTTPS/SSL (secure)
- Faster loading worldwide
- Professional custom domain support

#### Step 9: Create CloudFront Distribution

1. In AWS Console, search for "CloudFront"
2. Click "Create distribution"
3. **Origin domain:** Click and select your S3 bucket website endpoint
   - Format: `nidhi-srivastava-portfolio.s3-website-us-east-1.amazonaws.com`
4. **Protocol:** HTTP only (S3 website endpoint)
5. **Viewer protocol policy:** Redirect HTTP to HTTPS
6. **Allowed HTTP methods:** GET, HEAD
7. **Cache key and origin requests:** CachingOptimized (recommended)
8. **Compress objects automatically:** Yes
9. **Price class:** Use all edge locations (best performance)
10. **Alternate domain name (CNAME):** Leave empty for now (add custom domain later)
11. **Default root object:** `index.html`
12. Click "Create distribution"

#### Step 10: Wait for CloudFront Deployment

- Status will show "Deploying" (~10-15 minutes)
- When ready, status changes to "Enabled"
- **Copy the Distribution domain name** (e.g., `d1234567890.cloudfront.net`)

#### Step 11: Test CloudFront URL

1. Visit: `https://YOUR-CLOUDFRONT-URL` (from step 10)
2. Your portfolio should load with HTTPS! 🎉

---

### PHASE 5: Custom Domain (Optional - Professional)

#### Step 12: Purchase Domain (if you don't have one)

**Option A: AWS Route 53**
1. In AWS Console, search for "Route 53"
2. Click "Registered domains" → "Register domain"
3. Search for: `nidhisrivastava.com` or similar
4. Follow purchase steps (~$12-15/year)

**Option B: External Registrar (Cheaper)**
- Namecheap: ~$8-10/year
- GoDaddy: ~$12-15/year
- Google Domains: ~$12/year

#### Step 13: Request SSL Certificate

1. In AWS Console, search for "Certificate Manager"
2. **Important:** Switch to **US East (N. Virginia)** region (top-right)
3. Click "Request certificate"
4. **Certificate type:** Request a public certificate
5. **Domain names:** 
   - `nidhisrivastava.com`
   - `www.nidhisrivastava.com`
6. **Validation method:** DNS validation (recommended)
7. Click "Request"
8. Click on your certificate
9. **For DNS validation:**
   - Click "Create records in Route 53" (if using Route 53)
   - Or copy CNAME records to add to your domain registrar
10. Wait for validation (5-30 minutes)

#### Step 14: Add Custom Domain to CloudFront

1. Go to CloudFront → Distributions
2. Select your distribution
3. Click "Edit"
4. **Alternate domain names (CNAMEs):**
   - Add: `nidhisrivastava.com`
   - Add: `www.nidhisrivastava.com`
5. **Custom SSL certificate:** Select your certificate from dropdown
6. Click "Save changes"

#### Step 15: Configure DNS

**If using Route 53:**
1. Go to Route 53 → Hosted zones
2. Click your domain
3. Click "Create record"
4. **Record 1:**
   - Record name: (leave empty for apex domain)
   - Record type: A
   - Alias: Yes
   - Route traffic to: Alias to CloudFront distribution
   - Choose your distribution
5. **Record 2:**
   - Record name: www
   - Record type: CNAME
   - Value: your-cloudfront-url.cloudfront.net
6. Click "Create records"

**If using external registrar:**
1. Log in to your domain registrar
2. Find DNS settings
3. Add CNAME record:
   - Name: www
   - Value: your-cloudfront-url.cloudfront.net
4. Add A record (if supported) or redirect apex to www

#### Step 16: Test Custom Domain

Wait 10-30 minutes, then visit:
- `https://nidhisrivastava.com`
- `https://www.nidhisrivastava.com`

✅ Professional domain with HTTPS!

---

## 📝 Update Resume with Custom Domain

### With Custom Domain:

```
NIDHI SRIVASTAVA
Senior GRC Architect & Cybersecurity Leader

Email: nidhiaransh@gmail.com
Portfolio: nidhisrivastava.com
LinkedIn: linkedin.com/in/nidhi-srivastava-a5493468
```

### With AWS CloudFront (without custom domain):

```
NIDHI SRIVASTAVA
Senior GRC Architect & Cybersecurity Leader

Email: nidhiaransh@gmail.com
Portfolio: d1234567890.cloudfront.net
LinkedIn: linkedin.com/in/nidhi-srivastava-a5493468
```

---

## 💰 AWS Cost Breakdown

### Monthly Costs:
- **S3 Storage:** ~$0.10 (for ~100MB)
- **S3 Requests:** ~$0.01
- **CloudFront Data Transfer:** 
  - First 1TB/month: Free (AWS Free Tier first 12 months)
  - After: ~$0.05/GB
- **Route 53 (if using custom domain):**
  - Hosted zone: $0.50/month
  - Queries: ~$0.01

**Total estimated cost:** $1-3/month (very low traffic)

### Free Tier Benefits (First 12 Months):
- S3: 5GB storage
- CloudFront: 1TB data transfer out
- Route 53: 50 queries/month to each hosted zone

---

## 🔄 How to Update Your AWS Portfolio

### Option 1: Manual Update (via AWS Console)

1. Build new version:
   ```bash
   cd frontend
   yarn build
   ```

2. Go to S3 bucket in AWS Console
3. Delete old files
4. Upload new files from `build` folder
5. **Invalidate CloudFront cache:**
   - Go to CloudFront → Distributions
   - Select your distribution
   - Click "Invalidations" tab
   - Click "Create invalidation"
   - Object paths: `/*`
   - Click "Create invalidation"
6. Wait 2-5 minutes for changes to propagate

### Option 2: AWS CLI (Advanced - Automated)

Install AWS CLI and configure:

```bash
# Install AWS CLI
# Windows: Download from aws.amazon.com/cli
# Mac: brew install awscli
# Linux: sudo apt-get install awscli

# Configure AWS CLI
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Region: us-east-1
# Output format: json

# Deploy script
cd frontend
yarn build
aws s3 sync build/ s3://nidhi-srivastava-portfolio --delete
aws cloudfront create-invalidation --distribution-id YOUR-DISTRIBUTION-ID --paths "/*"
```

---

## 🔒 Security Best Practices

1. **Enable S3 Bucket Versioning:** Protect against accidental deletion
2. **Use IAM User:** Don't use root account for deployments
3. **Enable CloudTrail:** Track AWS API calls
4. **Set up billing alerts:** Get notified if costs exceed $5/month
5. **Backup your files:** Keep local copy of portfolio

---

## 📊 Monitoring & Analytics

### Enable CloudFront Access Logs

1. Go to CloudFront → Distributions
2. Edit your distribution
3. **Standard logging:** On
4. **S3 bucket:** Create new bucket (e.g., `portfolio-logs-nidhisrivastava`)
5. Save changes

### Add Google Analytics

1. Get tracking ID from analytics.google.com
2. Add to `public/index.html` in your portfolio
3. Rebuild and redeploy

---

## ⚠️ Troubleshooting

### Issue: 403 Forbidden Error

**Solution:**
- Check bucket policy is correct
- Verify "Block all public access" is OFF
- Ensure files are uploaded to root of bucket

### Issue: CloudFront shows old version

**Solution:**
Create invalidation: `/*`

### Issue: Custom domain not working

**Solution:**
- Check DNS propagation: dnschecker.org
- Verify certificate is in US East (N. Virginia)
- Wait 30 minutes after DNS changes

### Issue: HTTPS not working

**Solution:**
- Ensure certificate status is "Issued"
- Verify certificate attached to CloudFront distribution
- Check SSL/TLS settings in CloudFront

---

## 📈 Comparison: GitHub Pages vs AWS

| Feature | GitHub Pages | AWS S3+CloudFront |
|---------|--------------|-------------------|
| **Cost** | Free | $1-3/month |
| **Custom Domain** | Yes (free) | Yes ($12+/year) |
| **HTTPS** | Free | Free |
| **Performance** | Good | Excellent (CDN) |
| **Professional** | Very Good | Excellent |
| **Setup Complexity** | Easy | Moderate |
| **Maintenance** | None | Low |
| **Best For** | Quick deployment | Enterprise branding |

**Recommendation for Resume:**
- **CISO/Executive roles:** AWS with custom domain
- **All other roles:** GitHub Pages is perfect

---

## ✅ AWS Deployment Checklist

- [ ] AWS account created
- [ ] S3 bucket created and public
- [ ] Portfolio files uploaded
- [ ] Static website hosting enabled
- [ ] Portfolio accessible via S3 URL
- [ ] CloudFront distribution created
- [ ] HTTPS working via CloudFront
- [ ] (Optional) Custom domain purchased
- [ ] (Optional) SSL certificate issued
- [ ] (Optional) Custom domain configured
- [ ] Added to resume
- [ ] Added to LinkedIn
- [ ] Tested on multiple devices

---

## 🎯 Next Steps After Deployment

1. **Share on LinkedIn:** Featured section + Contact info
2. **Update Resume:** Add to header
3. **Email Signature:** Include portfolio link
4. **Business Cards:** Add QR code
5. **Job Applications:** Include in all applications
6. **Set up analytics:** Track visitors
7. **Monitor costs:** Set billing alert

---

**Questions or Issues?**

Common commands:
```bash
# Build portfolio
yarn build

# Sync to S3
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR-ID --paths "/*"

# Check AWS CLI configuration
aws configure list
```

---

**Ready to deploy?** Start with GitHub Pages (easiest), then move to AWS if you want a custom domain.
