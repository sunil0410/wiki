FROM node:18-alpine AS builder

# Install python/pip and build tools cuz node-gyp is horrible
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 py3-pip build-base autoconf automake libtool

WORKDIR /app
COPY package.json .
# copy lock file (styled-components dependency)
COPY yarn.lock .

RUN yarn install --ignore-scripts

# Copy what we built into a clean image
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Run as a non-root user
RUN adduser -D polygon
RUN chown -R polygon /app
USER polygon

EXPOSE 3000

CMD [ "sh", "-c", "npx next build && npx next start -p 3000" ]
