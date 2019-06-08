# This Dockerfile builds the entire application in its current folder into a docker container
# using node alpine. Then it runs the application through the productionstart command which is 
# defined in the package.json file.
#
# The server runs on port 3000
#
# Last Modified
#       William Kwok
#       June 7, 2019

FROM mhart/alpine-node:12.4

RUN mkdir -p /var/www/app
WORKDIR /var/www/app
COPY ./package.json ./package-lock.json /var/www/app/
RUN npm install
COPY . /var/www/app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "productionstart"]
