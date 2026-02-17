# Google Play Organization Verification Website (React SPA)

This is a lightweight React + Vite single-page corporate site with:
- Home, About, Business Functions, Our App, Governance & Compliance
- Full Privacy Policy & Terms pages
- Contact page with visible support email
- Amazon-inspired deep corporate palette
- Local hero image included at `public/images/hero.png`
- SPA routing support for Netlify via `public/_redirects`

## 1) Install & run
```bash
npm install
npm run dev
```

## 2) Build for static deployment
```bash
npm run build
npm run preview
```

## 3) Required updates for Google Play verification
Edit `src/siteConfig.js` and replace:
- companyLegalName (must match Play Console exactly)
- appName
- supportEmail
- websiteDomain

## 4) Replace the logo
Replace `src/assets/logo.svg` with your official logo (keep the filename or update imports in NavBar/Footer).

## 5) Add more images (optional)
Add images to `public/images/` and reference them in pages as `/images/yourfile.jpg`.
