FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN apk add g++ make py3-pip

RUN npm install --legacy-peer-deps

EXPOSE 5000

CMD ["npm", "run", "server"]
