# Stage 1: Build Stage with Yarn
FROM node:18.18.0-alpine as builder

WORKDIR /app

# Install yarn
RUN npm install -g yarn --force

COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy project and build
COPY . .

RUN yarn build

# Stage 2: Serve static files with Nginx
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]