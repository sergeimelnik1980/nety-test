###test images
FROM node:10.13.0

WORKDIR /home/nety-test

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci

COPY ./ ./

RUN npm run build

CMD ["npm", "run", "start"]

