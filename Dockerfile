FROM mhart/alpine-node:12.4

RUN mkdir -p /var/www/app
WORKDIR /var/www/app
COPY ./package.json ./package-lock.json /var/www/app/

# RUN apk --update --no-cache --virtual dev-dependencies add git python make g++
RUN npm install

COPY . /var/www/app
RUN npm run build

# RUN apk del dev-dependencies

EXPOSE 3000
CMD ["npm", "run", "productionstart"]
