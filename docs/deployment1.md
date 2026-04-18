# Deployment Guide: Option 1 — Expo Go Live (Recommended) 🚀

This guide provides a professional, step-by-step walkthrough on how to publish **CampusConnect** directly to Expo servers. This method allows anyone with the **Expo Go** app to access the latest version of your application instantly by scanning a single QR code.

---

## 📋 Prerequisites

Before starting, ensure you have the following:
1. An **Expo Account** (Sign up for free at [expo.dev](https://expo.dev/signup)).
2. **Node.js** installed on your machine.
3. **EAS CLI** installed globally.

> [!IMPORTANT]
> To install EAS CLI, run this command in your terminal:
> ```bash
> npm install -g eas-cli
> ```

---

## 🛠️ Step-by-Step Instructions

### Step 1: Login to your Expo Account
Open your terminal in the project root directory and authenticate with your Expo account.
```bash
npx expo login
```
*Follow the prompts to enter your username/email and password.*

### Step 2: Configure EAS Update
If this is your first time deploying, you need to initialize the EAS configuration for the project.
```bash
eas update:configure
```
*This command will create or update your `app.json` and generate an `eas.json` file in your root folder.*

### Step 3: Publish the Application
Now, send your code to the Expo servers. We will publish this to the `main` branch.
```bash
eas update --branch main --message "Initial Release v1.0"
```
*This process bundles your JavaScript and assets and uploads them to the cloud.*

---

## 📱 How to Access & Present

Once the command in Step 3 completes, your app is live!

1. **Find your Deployment URL:** The terminal will provide a link to the Expo project dashboard (e.g., `https://expo.dev/@your-username/campus-connect`).
2. **Get the QR Code:** 
   - Open that link in your browser.
   - Look for the **QR Code** on the project page.
3. **Scan with Expo Go:**
   - On **Android**: Open the **Expo Go** app and tap "Scan QR Code".
   - On **iOS**: Open the standard **Camera app** and scan the QR code, then tap the "Open in Expo Go" notification.

---

## 💡 Pro-Tips for Presentation
- **Real-Time Data:** Because we are using **Firebase Firestore**, any data you add (Classes, Notes) while the professor is watching will sync instantly across devices!
- **Offline Capability:** If the school Wi-Fi is slow, the app will still open using the cached version from the last time it was loaded in Expo Go.
- **Easy Sharing:** You can print the QR code and put it on your project poster or just show it on your screen during the presentation.

---
> **Developer:** Junlee Marc M Pepito  
> **(c) 2026 | JUNL.EE**
