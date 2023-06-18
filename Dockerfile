# Build Application
FROM node:alpine AS builder
ENV NODE_ENV=production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

# Build Image
FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV API_URL=http://covid-insights.ddns.net:5001/graphql

EXPOSE 3001

CMD ["npm", "run", "start"]
