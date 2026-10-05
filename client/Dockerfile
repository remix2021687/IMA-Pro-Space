# --- STAGE 1: Base ---
FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# --- STAGE 2: Dependencies ---
FROM base AS deps
WORKDIR /app

# Копируем манифесты и возможные конфиги pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* .npmrc* ./

# Отключаем строгую блокировку build-скриптов для pnpm
ENV PNPM_STRICT_DEP_BUILDS=false

# Устанавливаем зависимости с фиксацией локфайла
RUN pnpm install --frozen-lockfile

# --- STAGE 3: Builder ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# --- STAGE 4: Runner ---
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]