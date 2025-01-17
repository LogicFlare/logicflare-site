FROM node:18-alpine AS base

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --frozen-lockfile

COPY . . 
EXPOSE 3000
# run dev só pra dev
CMD ["npm", "run", "build"]
