# Ilitha Voucher Manager — PWA Setup Guide

Follow these steps once and the app will be on your Android home screen,
appearing in the share sheet when you share from 1Voucher.

---

## Step 1 — Create a free GitHub account
Go to https://github.com and sign up if you don't have an account.

## Step 2 — Create a new repository
1. Click the **+** button (top right) → **New repository**
2. Name it exactly: `ilitha-vouchers`
3. Set it to **Public**
4. Click **Create repository**

## Step 3 — Upload the files
1. Click **uploading an existing file** (link on the empty repo page)
2. Drag and drop ALL these files into the upload area:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/icon-192.png`
   - `icons/icon-512.png`
   
   ⚠️ For the icons: create the `icons` folder by typing `icons/icon-192.png`
   in the filename box when uploading — GitHub will create the folder automatically.

3. Click **Commit changes**

## Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under "Source" select **Deploy from a branch**
3. Choose branch: **main**, folder: **/ (root)**
4. Click **Save**
5. Wait ~2 minutes. Your app URL will be:
   `https://YOUR-USERNAME.github.io/ilitha-vouchers/`

## Step 5 — Install on Android
1. Open **Chrome** on your Android phone
2. Go to your GitHub Pages URL above
3. Tap the **three-dot menu** → **Add to Home screen** → **Install**
4. Ilitha will appear on your home screen like a real app ✅

## Step 6 — Share from 1Voucher
1. Open 1Voucher, find your voucher
2. Tap **Share**
3. Ilitha will now appear in the share sheet
4. Tap it — the voucher code lands directly in the app
5. Pick denomination, add recipient name, tap Save ✅

---

## Updating the app later
Just re-upload the changed files to GitHub — the app updates automatically.
