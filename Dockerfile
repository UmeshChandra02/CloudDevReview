# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy root dependencies and install backend dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend
COPY . .

# Build React app
WORKDIR /app/client
RUN npm install
RUN npm run build

# Back to root for server
WORKDIR /app

# Start the backend server
EXPOSE 5000
CMD ["node", "server.js"]
