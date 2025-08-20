# Use Node.js 20 LTS
FROM node:20-alpine

# Install build tools
RUN apk add --no-cache python3 make g++

# Set working directory for client
WORKDIR /app/client

# Copy package files for client
COPY client/package*.json ./

# Install dependencies
RUN npm ci

# Copy client source code
COPY client ./

# Build the Vite app
RUN npm run build

# Move up to root to handle server.js
WORKDIR /app

# Copy server files and built client
COPY server.js ./
COPY --from=0 /app/client/dist ./dist

# Install only production dependencies for server
COPY package*.json ./
RUN npm install --omit=dev

# Expose port
EXPOSE 5000
ENV NODE_ENV=production

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Start server
CMD ["node", "server.js"]
