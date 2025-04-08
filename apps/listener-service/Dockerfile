FROM node:18-alpine

WORKDIR /app

# COPY . .
COPY package*.json ./
COPY nest-cli.json ./
COPY tsconfig*.json ./
COPY ./apps ./apps

RUN npm install

CMD ["npm", "run", "start:dev:listener"]



