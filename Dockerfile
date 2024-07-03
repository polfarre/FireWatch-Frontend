# Official base image
FROM node:18-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# add app
COPY . .

RUN chown -R  root:root /app/node_modules

# Expose the port the app runs on
EXPOSE 5173

# start app dev environment
CMD ["npm", "run", "dev"]
