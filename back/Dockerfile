FROM node:alpine

RUN apk add --update tzdata
ENV TZ=Asia/Bangkok 
ENV NODE_ENV production

COPY ./package.json ./

RUN npm install && npm run build
COPY ./ ./ 

# RUN apt-get update && apt-get install vim
CMD ["npm","start"]