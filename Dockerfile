FROM node:10

WORKDIR usr/src/App

COPY package*.json ./

RUN npm install

RUN npm audit fix

COPY . .

EXPOSE 3003

CMD ["npm","start"]