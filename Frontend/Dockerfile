# Use an official Node runtime as a parent image
FROM node:16 as build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# Start serving the built application using serve package
FROM node:16

# Set working directory for production
WORKDIR /usr/src/app

# Install serve to serve the build folder
RUN npm install -g serve

# Copy built assets from the build stage
COPY --from=build /usr/src/app/build /usr/src/app/build

# Expose port 3000 and start serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
