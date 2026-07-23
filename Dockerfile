# ── Stage 1: Builder ──────────────────────────────────────────────────────────
FROM node:22-bookworm-slim AS builder

WORKDIR /app

# Install system deps needed by native modules (node-gyp, canvas, etc.)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package.json ./

# Install all deps fresh — package-lock.json dikecualikan via .dockerignore
# karena dibuat di Windows dan hanya berisi binary platform Windows.
# npm install di sini akan resolve binary Linux yang benar.
RUN npm install --ignore-scripts

# Copy full source
COPY . .

# Embed Vite environment variables during build
ARG VITE_TURNSTILE_SITE_KEY
ENV VITE_TURNSTILE_SITE_KEY=$VITE_TURNSTILE_SITE_KEY

# Build
ENV NITRO_PRESET=node-server
# Increase Node.js heap for large builds
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm run build

# ── Stage 2: Production runner ─────────────────────────────────────────────────
FROM node:22-bookworm-slim AS runner

WORKDIR /app

RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]