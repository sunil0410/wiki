# Use the official Node.js 14 image as the base
FROM node:18-alpine

# Install docker dependencies
RUN apk add --update --no-cache python3 py3-pip build-base autoconf automake libtool

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm ci --production

# Copy the entire project to the working directory
COPY . .

# Build the Docusaurus application
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the Docusaurus application
CMD ["npx", "http-server", "build", "-p", "3000"]
