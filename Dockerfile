FROM node:lts-alpine AS deps

WORKDIR /opt/app
COPY portfolio/package.json portfolio/package-lock.json ./
RUN npm install


FROM node:lts-alpine AS builder

ENV NODE_ENV=production
WORKDIR /opt/app
COPY portfolio .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm run build


FROM node:lts-alpine AS runner

WORKDIR /opt/app
ENV NODE_ENV=production
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules

CMD ["node_modules/.bin/next", "start"]