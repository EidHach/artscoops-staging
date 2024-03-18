# Stage 1: Build stage
FROM node:16 AS builder

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Stage 2: Production stage
FROM node:16-alpine

WORKDIR /app

RUN yarn global add http-server

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["http-server", "dist", "-p", "4000"]
