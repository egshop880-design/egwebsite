# EG Shop AZ

Bu layihə Hetzner VPS üzərində Node.js, PM2 və Nginx ilə işləmək üçün hazırlanıb.

## Lokal işlətmə

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
npm start
```

Build-dən sonra server faylı burada yaranır:

```bash
.output/server/index.mjs
```

## Hetzner VPS deploy

Serverdə layihə qovluğuna daxil olun və bu komandaları işlədin:

```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
pm2 save
```

Yeniləmə zamanı:

```bash
git pull
npm install
npm run build
pm2 restart egshopaz
```

Status və loglar:

```bash
pm2 status
pm2 logs egshopaz
curl -I http://localhost:3000
```

Nginx `server` bloku üçün əsas proxy:

```nginx
server {
    server_name egshop.az www.egshop.az;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```