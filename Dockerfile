FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install

RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/adminweb /usr/share/nginx/html

EXPOSE 4200
CMD ng serve --host 0.0.0.0 --port 4200
