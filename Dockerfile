# Stage 1: Build the React app
FROM node:14-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the React app files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the desired port (default is 80 for NGINX)
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
