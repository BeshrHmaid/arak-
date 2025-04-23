# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install production dependencies
RUN npm install --production --silent

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Serve the React app
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
