FROM node:18-alpine AS base

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci
# ou i

FROM base AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
