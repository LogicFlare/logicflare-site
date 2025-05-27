FROM node:18-alpine AS builder  

WORKDIR /app  

COPY package.json package-lock.json* ./  
RUN npm ci --frozen-lockfile  

COPY . .  
RUN npm run build  

# Usar uma imagem simples para servir arquivos estáticos  
FROM node:18-alpine  

WORKDIR /app  

# Instalar serve para servir os arquivos  
RUN npm install -g serve  

# Copiar arquivos buildados  
COPY --from=builder /app/dist ./dist  

EXPOSE 3000  

# Servir na porta 3000  
CMD ["serve", "-s", "dist", "-l", "3000"]