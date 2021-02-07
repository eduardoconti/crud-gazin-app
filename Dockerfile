FROM node:15.7.0-alpine

WORKDIR /app

COPY package*.json /app/

RUN CI=true

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]