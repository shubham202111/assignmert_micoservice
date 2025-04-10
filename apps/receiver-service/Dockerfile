FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install NestJS CLI globally
RUN npm install -g @nestjs/cli

# Copy only package files first for layer caching
COPY package*.json ./
COPY nest-cli.json ./
COPY tsconfig*.json ./

# Copy apps directory
COPY ./apps ./apps

# Install dependencies
RUN npm install

# Start receiver service in watch/dev mode
CMD ["npm", "run", "start:dev:receiver"]
