# Build frontend
FROM node:20.10.0 AS frontend-builder
WORKDIR /app/client
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Prepare backend
FROM node:20.10.0 AS backend-builder
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm install
COPY server/ ./

# Create final image
FROM node:20.10.0 
WORKDIR /app/server
COPY --from=frontend-builder /app/client/build ./client/build
COPY --from=backend-builder /app/server ./
EXPOSE 4000
CMD [ "node", "server.js" ]
