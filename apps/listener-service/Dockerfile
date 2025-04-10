FROM node:18.17-slim

WORKDIR /app

RUN npm install -g @nestjs/cli

COPY package*.json ./
COPY nest-cli.json ./
COPY tsconfig*.json ./
COPY ./apps ./apps

RUN npm install

CMD ["nest", "start", "listener-service", "--watch"]
