FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Build the React app
RUN npm run build

# Install a basic HTTP server to serve the build (optional)
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Run the built app using `serve`
CMD ["serve", "-s", "build", "-l", "3000"]
