FROM node:alpine

RUN apk add --update tzdata
ENV TZ=Asia/Bangkok 
ENV NODE_ENV production

COPY ./package.json ./

RUN npm install 
RUN npm run build
COPY ./ ./ 

CMD ["npm","start"]