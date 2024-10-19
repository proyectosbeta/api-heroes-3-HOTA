FROM denoland/deno:latest as base

WORKDIR /app
COPY . ./

RUN deno cache app.ts
CMD ["run", "--allow-net", "--allow-env", "--allow-read", "app.ts"] 