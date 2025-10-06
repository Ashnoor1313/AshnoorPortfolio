# Use Node.js 20 LTS
FROM node:20-alpine

# Install build tools
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source code
COPY . .

# Build both frontend and backend
RUN npm run build

# Expose port
EXPOSE 5000
ENV NODE_ENV=production

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

# Start server (built backend is at dist/index.js)
CMD ["node", "dist/index.js"]
