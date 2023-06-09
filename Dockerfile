FROM node:19

WORKDIR /app

COPY . .

RUN yarn install --production

RUN yarn add next

RUN yarn build

ENV NODE_ENV production

EXPOSE 3001

CMD [ "yarn", "start" ]
