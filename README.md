# 🌐 Fahrur Rozi – Personal Portfolio Website

Halo! Ini adalah proyek website portofolio pribadi saya, **Muhammad Fahrur Rozi**, yang menampilkan pengalaman, karya, dan keterampilan saya dalam dunia teknologi dan DevOps. Website ini dibangun menggunakan teknologi frontend sederhana tanpa framework modern, namun dengan pendekatan profesional: **HTML5**, **JavaScript Vanilla**, **Tailwind CSS**, dan **Docker + Nginx** untuk deployment.

---

## 🚀 Teknologi yang Digunakan

| Teknologi       | Deskripsi                                             |
|----------------|-------------------------------------------------------|
| HTML5 & JS      | Struktur dan logika halaman web                      |
| Tailwind CSS   | Styling modern berbasis utility-first                 |
| Docker         | Containerisasi untuk kemudahan deployment             |
| Nginx          | Web server untuk menyajikan konten statis             |
| Git & GitHub   | Versi kontrol & kolaborasi                           |

---

## 📁 Struktur Direktori
.

├── docker-compose.yml

├── Dockerfile

├── frontend

│   ├── index.html

│   ├── package-lock.json

│   ├── project1.html

│   ├── project2.html

│   ├── project3.html

│   └── public

│       ├── images

│       │   ├── GMNI.jpg

│       │   ├── GNS3.png

│       │   ├── gunung.png

│       │   ├── porto-1.png

│       │   ├── PP-FB.jpg

│       │   ├── radar.jpg

│       │   └── server.png

│       └── js

│           └── main.js

└── nginx

    └── default.conf

---

## 🧪 Fitur Website

- Tampilan responsive & modern dengan Tailwind CSS
- Navigasi dinamis dan efek scroll interaktif
- Efek animasi ketik (`typewriter`) dan fade-in
- Struktur HTML yang SEO-friendly
- Deployment dengan Docker dan Nginx

---

## 🐳 Cara Menjalankan Proyek (Dockerized)

### Prasyarat:
- Docker & Docker Compose sudah terinstal

### Langkah-langkah:

```bash
# Clone repository ini
git clone https://github.com/rozi8/Portfolio-deploy.git
cd Portfolio-deploy

# Build dan jalankan container
docker-compose down --remove-orphans
docker image prune -f
docker-compose up --build

Akses website di: http://localhost atau IP Server kamu