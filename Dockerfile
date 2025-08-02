FROM nginx:alpine

# Salin semua file HTML/JS/CSS ke direktori default nginx
COPY ./frontend /usr/share/nginx/html

EXPOSE 80
