FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci --frozen-lockfile

COPY . .

RUN npm run build

# Adicione uma etapa final para iniciar o servidor
CMD ["npm", "run", "dev"]