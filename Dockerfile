FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npm", "run", "start" ]
