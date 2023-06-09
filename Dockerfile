FROM node:18-alpine3.17

WORKDIR /

COPY package.json /

RUN yarn install --production

COPY . /

RUN yarn build

ENV NODE_ENV production

EXPOSE 3001

CMD [ "yarn", "start" ]
