FROM denoland/deno:latest as base

WORKDIR /app
COPY . ./

RUN deno install --global -qAf --unstable https://deno.land/x/denon/denon.ts
RUN deno cache app.ts

CMD ["denon", "run", "--allow-net", "--allow-env", "--allow-read", "app.ts"] 