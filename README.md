# Description

API for the Game Heroes Of Might and Magic III (HOTA)

Link:

- [Main HOTA](https://heroes.thelazy.net//index.php/Main_Page)
- [Creatures](https://heroes.thelazy.net/index.php/List_of_creatures)
- [Spells](https://heroes.thelazy.net/index.php/List_of_spells)

# Tecnologies

- DenoJS 1.36.1
- v8 11.6.189.12
- Typescript 5.1.6
- Docker 20.10.17
- Docker compose 1.25.3

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
APP_DOMAIN="https://api-heroes.proyectosbeta.net/"
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

# Docker compose

## Use

```bash
docker-compose build
docker-compose up
```

## Monit

```bash
docker ps
```

## Browser

```bash
http://localhost:4500/
http://localhost:4500/creatures/castle
```

# Production

Use pm2 for production.

## Install pm2

```bash
npm install pm2 -g
```

## Start pm2

```bash
pm2 start /home/proyectosbeta/repositoriosGit/api-heroes-3-HOTA/app.ts --interpreter="deno" --interpreter-args="run --allow-net --allow-env --allow-read" --name api-heroes-3-hota
```

## Startup server pm2

```bash
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u proyectosbeta --hp /home/proyectosbeta
```

# Requests

Town values:

- castle
- rampart
- tower
- inferno
- necropolis
- dungeon
- stronghold
- fortress
- conflux
- cove

Magic values:

- fire
- water
- air
- earth

```text
  Method GET: /creatures/{town}      --> Return all town creatures
  Method GET: /creatures/{town}/{id} --> Return specific creature for the town
  Method GET: /spells/{magic}        --> Return all magic spells
  Method GET: /spells/{magic}/{id}   --> Return specific spell fot the magic
```

# Try in API client

Method GET:

- [Castle](https://api-heroes.proyectosbeta.net/creatures/castle)
- [Pikmen](https://api-heroes.proyectosbeta.net/creatures/castle/1)
- [Rampart](https://api-heroes.proyectosbeta.net/creatures/rampart)
- [Tower](https://api-heroes.proyectosbeta.net/creatures/tower)
- [Inferno](https://api-heroes.proyectosbeta.net/creatures/inferno)
- [Necropolis](https://api-heroes.proyectosbeta.net/creatures/necropolis)
- [Dungeon](https://api-heroes.proyectosbeta.net/creatures/dungeon)
- [Stronghold](https://api-heroes.proyectosbeta.net/creatures/stronghold)
- [Fortress](https://api-heroes.proyectosbeta.net/creatures/fortress)
- [Conflux](https://api-heroes.proyectosbeta.net/creatures/conflux)
- [Inferno](https://api-heroes.proyectosbeta.net/creatures/inferno)
- [Cove](https://api-heroes.proyectosbeta.net/creatures/cove)
- [Fire](https://api-heroes.proyectosbeta.net/spells/fire)
- [Bloodlust](https://api-heroes.proyectosbeta.net/spells/fire/1)
- [Water](https://api-heroes.proyectosbeta.net/spells/water)
- [Air](https://api-heroes.proyectosbeta.net/spells/air)
- [Earth](https://api-heroes.proyectosbeta.net/spells/earth)
