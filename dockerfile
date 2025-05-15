# Etapa 1: build com Node.js
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --frozen-lockfile

COPY . .
RUN npm run build

# Etapa 2: copiar arquivos para Nginx
FROM nginx:alpine

# Remove o conteúdo antigo da pasta html
RUN rm -rf /usr/share/nginx/html/*

# Copia o build do React (Vite) para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opcional) copiar sua config personalizada do nginx
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
