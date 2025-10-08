# 🚀 Deploy to Render (Static Site)

## ✅ What this project is now
- **Static frontend only** (Vite + React)
- ✅ No backend server
- ✅ No database
- ✅ Contact form removed

## 📦 Build artifacts
- `vite build` outputs to `dist/public/`
- Render serves that directory as a static site

## 🗂️ Key files
- `render.yaml` → static site config
- `package.json` → Vite dev/build scripts
- `vite.config.ts` → builds to `dist/public`

## 🔧 Local commands
```bash
npm ci
npm run build      # -> dist/public
npm run dev        # Vite dev server
```

## 🎯 Deploy to Render
1. Push to GitHub
2. In Render, click New → Static Site
3. Select your repo
4. Configure:
   - Build Command: `npm ci && npm run build`
   - Publish Directory: `dist/public`
   - Auto Deploy: On
5. Create Static Site and wait for deploy to finish

Your app will be live at: https://ashnoor-portfolio.on.render.com (or your Render-provided URL)

## 🧹 Optional cleanup
If you want to slim the repo further:
- Remove the `server/` and `shared/` directories if no longer needed
- Remove unused dependencies from `package.json` (express, drizzle, passport, ws, etc.)
- Remove `drizzle.config.ts` if database is not used

## 🐛 Troubleshooting
- If build fails, check Render logs
- Ensure `publish` path is `dist/public`
- Ensure `render.yaml` uses `type: static`

## 🌐 Custom domain (optional)
- Add a custom domain in Render → Settings → Custom Domains
- Update DNS as instructed; SSL is handled by Render

## ✅ Final checklist
- [x] `render.yaml` set to static
- [x] `package.json` uses Vite-only scripts
- [x] Contact form removed
- [x] No backend or database required
