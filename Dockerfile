FROM node:16-alpine AS production

EXPOSE 3000

WORKDIR /opt/titanic-api

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

CMD ["npm", "start"]

FROM production as local

RUN npm install

FROM production
