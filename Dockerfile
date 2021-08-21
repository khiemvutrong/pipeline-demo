FROM node:10.5
RUN mkdir -p /app
WORKDIR /app

COPY . .
CMD [ "npm", "start" ]