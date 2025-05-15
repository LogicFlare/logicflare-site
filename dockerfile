FROM node:18-alpine AS builder  

WORKDIR /app  
COPY package.json package-lock.json* ./

RUN npm ci --frozen-lockfile

COPY . . 

RUN npm run build    

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80  

CMD ["-g", "daemon off;"]