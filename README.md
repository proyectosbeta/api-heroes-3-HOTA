# Description
API for the Game Heroes Of Might and Magic III (HOTA)

Link:
- https://heroes.thelazy.net//index.php/Main_Page
- Creatures:
  - https://heroes.thelazy.net/index.php/List_of_creatures
- Spells
  - https://heroes.thelazy.net/index.php/List_of_spells_(HotA)

# Tecnologies

- DenoJS

# Development

## Install

```bash
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

## Config

Copy .env.example file

```
cp .env.example .env
```

#### Constants

Change the constants.

```
APP_PORT=4500
APP_HOST="0.0.0.0"
APP_DOMAIN="http://xxx.xxx.xxx.xxx:4500/"
```

#### Upgrade Deno

```bash
deno upgrade
deno cache --reload app.ts
```

## Run

```bash
denon start
```

# Production

Use pm2 for production.

## Install pm2

```bash
  npm install pm2 -g
```

## Start pm2

```bash
  pm2 start /home/proyectosbeta/repositoriosGit/api-heroes-3-HOTA/app.ts --interpreter="deno" --interpreter-args="run --allow-net --allow-read=." --name api-heroes-3-hota
```

## Startup server pm2

```bash
  pm2 startup
```

# Requests

```text
  Method GET: /creature --> All creatures
  Method GET: /creature/castle --> Return all castle creatures
  Method GET: /creature/rampart --> Return all rampart creatures
  Method GET: /creature/tower --> Return all tower creatures
  Method GET: /creature/inferno --> Return all inferno creatures
  Method GET: /creature/necropolis --> Return all inferno creatures
  Method GET: /creature/dungeon --> Return all dungeon creatures
  Method GET: /creature/stronghold --> Return all stronghold creatures
  Method GET: /creature/fortress --> Return all fortress creatures
  Method GET: /creature/conflux --> Return all conflux creatures
  Method GET: /creature/cove --> Return all cove creatures
  Method GET: /spell --> All spells
  Method GET: /spell/fire --> Return all fire spell
  Method GET: /spell/water --> Return all water spell
  Method GET: /spell/air --> Return all air spell
  Method GET: /spell/earth --> Return all earth spell
```

# Try in API client

Method GET:

```bash
  http://51.15.192.116:4500/creature/
  http://51.15.192.116:4500/creature/castle
  http://51.15.192.116:4500/creature/rampart
  http://51.15.192.116:4500/creature/tower
  http://51.15.192.116:4500/creature/inferno
  http://51.15.192.116:4500/creature/necropolis
  http://51.15.192.116:4500/creature/dungeon
  http://51.15.192.116:4500/creature/stronghold
  http://51.15.192.116:4500/creature/fortress
  http://51.15.192.116:4500/creature/conflux
  http://51.15.192.116:4500/creature/cove
  http://51.15.192.116:4500/spell/
  http://51.15.192.116:4500/spell/fire
  http://51.15.192.116:4500/spell/water
  http://51.15.192.116:4500/spell/air
  http://51.15.192.116:4500/spell/earth
```