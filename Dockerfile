# Build Application
FROM node:alpine AS builder
ENV NODE_ENV=production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --omit=dev --force

COPY . .

RUN npm run build

# Build Image
FROM node:alpine

WORKDIR /production

COPY package.json package-lock.json ./

RUN npm install --omit=dev --force

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/.env ./.env


ENV API_URL=http://covid-insights.ddns.net:5001/graphql

EXPOSE 3001

CMD ["npm", "start"]
