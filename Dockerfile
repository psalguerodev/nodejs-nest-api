FROM node:alpine

LABEL author="Patrick Salguero Avalos"
LABEL email="patrick.salguero.avalos@gmail.com"

WORKDIR /nestjsapp

COPY package.json .

RUN npm install

COPY dist .

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:docker" ]