FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN apk add g++ make py3-pip

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "server"]
