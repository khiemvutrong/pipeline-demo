FROM node:12.5

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Bundle app source
COPY . .
RUN npm install
CMD [ "npm", "start" ]