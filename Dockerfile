### STAGE 1: Build ###
FROM node:14.20.0-alpine3.15 AS build

WORKDIR /usr/src/app

ARG ENV_NAME
ENV ENV_NAME=${ENV_NAME}

COPY package.json package-lock.json angular.json ./
COPY . .

RUN npm install
RUN npm run build:${ENV_NAME}

### STAGE 2: Run ###
FROM nginx:alpine

EXPOSE 4300

ARG URL_PROXY
ENV URL_PROXY=${URL_PROXY}

RUN echo $URL_PROXY

COPY nginx/default.conf /etc/nginx/conf.d
RUN sed -i "s/PASSPROXYKONG/${URL_PROXY}/g" /etc/nginx/conf.d/default.conf && cat /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist/ebox-webapp /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]
