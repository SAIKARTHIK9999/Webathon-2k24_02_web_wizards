# Use official Node.js image with version 18.17.0 as the base image
FROM node:18.17.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

#!/bin/sh
# set host in hosts

RUN sed -i -e "s#;sendmail_path =#sendmail_path = /usr/sbin/sendmail -t -i#g"  \
    /your_path_to/php.ini
COPY ./config/sendmail_config.sh .

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "run", "dev"]
