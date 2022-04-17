FROM node:alpine
EXPOSE 3004 9229


COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build
