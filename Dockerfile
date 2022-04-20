FROM node:16.13.1-alpine3.13
RUN mkdir /docker-project
WORKDIR /docker-project
COPY package.json /docker-project
RUN npm install
COPY . /docker-project
RUN npm run build
CMD ["npm", "start"]

