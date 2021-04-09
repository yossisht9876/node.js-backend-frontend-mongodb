
FROM node:7
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install
#copying the source code of Application into the container dir
COPY . /usr/src/app
#container exposed network port number
EXPOSE 8080
#command to run within the container
CMD ["node", "index.js"]