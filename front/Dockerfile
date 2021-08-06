# FROM node:alpine as build-stage
# WORKDIR /react-app
# COPY package*.json /react-app
# RUN npm install
# COPY ./ /react-app
# RUN npm run build

FROM nginx:1.15
COPY --from=build-stage /react-app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf