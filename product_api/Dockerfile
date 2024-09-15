FROM node:18.3.0-slim

WORKDIR /home/node/app

COPY package*.json tsconfig.json ./

RUN npm install

USER node

CMD ["npm", "start"]