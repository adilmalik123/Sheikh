# Hostinger Deployment Guide

This project has 2 parts:

- `apps/web` -> Vite/React frontend
- `apps/pocketbase` -> PocketBase backend

Best deployment setup on Hostinger:

- Frontend on `Hostinger Node.js Web App`
- Backend on `Hostinger VPS`

## 1. Frontend Deploy From GitHub

GitHub repo:

- `https://github.com/adilmalik123/Sheikh.git`

### In Hostinger hPanel

1. Open `Websites`
2. Choose your domain
3. Open `Node.js`
4. Create a new Node.js app
5. Choose `Import from GitHub`
6. Connect this repository:
   - `https://github.com/adilmalik123/Sheikh.git`

### Frontend App Settings

Use these values:

- Application root: `apps/web`
- Node.js version: `20.x` or newer
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`

### Important

The frontend currently builds to:

- `dist/apps/web`

If Hostinger does not like the monorepo output path, update the frontend build script later to use local `dist`.

Current frontend scripts are in:

- `apps/web/package.json`

## 2. Backend Deploy on Hostinger VPS

PocketBase should run on VPS, not normal shared hosting.

### On VPS

1. SSH into VPS
2. Install Node.js
3. Clone repo:

```bash
git clone https://github.com/adilmalik123/Sheikh.git
cd Sheikh
```

4. Go to backend:

```bash
cd apps/pocketbase
```

5. Set environment variable:

```bash
export PB_ENCRYPTION_KEY='your-strong-secret-key'
```

6. Start PocketBase:

```bash
./pocketbase serve --http=0.0.0.0:8090 --encryptionEnv=PB_ENCRYPTION_KEY --dir=/data --migrationsDir=./pb_migrations --hooksDir=./pb_hooks --hooksWatch=false
```

### Recommended Production Setup

Use one of these:

- `pm2`
- `systemd`

Example with PM2:

```bash
pm2 start "./pocketbase serve --http=0.0.0.0:8090 --encryptionEnv=PB_ENCRYPTION_KEY --dir=/data --migrationsDir=./pb_migrations --hooksDir=./pb_hooks --hooksWatch=false" --name sheikh-pocketbase
pm2 save
```

## 3. Domain Setup

Recommended structure:

- Frontend: `https://yourdomain.com`
- Backend API: `https://api.yourdomain.com`

## 4. Environment Variables

If frontend needs backend URL, add it in Hostinger app environment settings.

Typical example:

```env
VITE_API_URL=https://api.yourdomain.com
```

## 5. After Deployment

Frontend test:

- Open website domain
- Check homepage
- Check brand pages
- Check multilingual pages

Backend test:

- Confirm PocketBase is running on VPS
- Confirm API/domain responds
- Confirm forms and data features work

## 6. Current Git Status

This repository is already initialized and pushed:

- Remote: `origin`
- Branch: `main`
- Repo: `https://github.com/adilmalik123/Sheikh.git`

