# Description

API for the Game Heroes Of Might and Magic III (HOTA)

Link:

- [Main HOTA](https://heroes.thelazy.net//index.php/Main_Page)
- [Creatures](https://heroes.thelazy.net/index.php/List_of_creatures)
- [Spells](https://heroes.thelazy.net/index.php/List_of_spells)

## Tecnologies

- DenoJS 2.0.2
- v8 12.9.202.13-rusty
- Typescript 5.6.2
- Denon v2.5.0
- Docker 27.3.1

## Development

### Install

```bash
deno install --global -qAf --unstable https://deno.land/x/denon/denon.ts
```

### Config

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

### Upgrade Deno

```bash
deno upgrade
deno cache --reload app.ts
```

### Run

```bash
denon start
```

### Use lint

```bash
deno lint
```

### Use code formatting

#### Check

```bash
deno fmt --check
```

#### Use

```bash
deno fmt
```

## Docker compose

### Use

```bash
docker compose up --build -d
```

### Monit

```bash
docker compose logs -f app
```

## Browser

```bash
http://localhost:4500/api/v1/creatures/castle
```

## Production

Use pm2 for production.

### Install pm2

```bash
npm install pm2 -g
```

### Start pm2

```bash
pm2 start /home/proyectosbeta/repositoriosGit/api-heroes-3-HOTA/app.ts --interpreter="deno" --interpreter-args="run --allow-net --allow-env --allow-read" --name api-heroes-3-hota
```

### Startup server pm2

```bash
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u proyectosbeta --hp /home/proyectosbeta
```

## Requests

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
Method GET: /api/v1/creatures/{town}       --> Return all town creatures
Method GET: /api/v1//creatures/{town}/{id} --> Return specific creature for the town
Method GET: /api/v1//spells/{magic}        --> Return all magic spells
Method GET: /api/v1//spells/{magic}/{id}   --> Return specific spell fot the magic
```

## Try in API client

Method GET:

- [Castle](https://api-heroes.proyectosbeta.net/api/v1/creatures/castle)
- [Pikmen](https://api-heroes.proyectosbeta.net/api/v1/creatures/castle/1)
- [Rampart](https://api-heroes.proyectosbeta.net/api/v1/creatures/rampart)
- [Tower](https://api-heroes.proyectosbeta.net/api/v1/creatures/tower)
- [Inferno](https://api-heroes.proyectosbeta.net/creatures/inferno)
- [Necropolis](https://api-heroes.proyectosbeta.net/api/v1/creatures/necropolis)
- [Dungeon](https://api-heroes.proyectosbeta.net/api/v1/creatures/dungeon)
- [Stronghold](https://api-heroes.proyectosbeta.net/api/v1/creatures/stronghold)
- [Fortress](https://api-heroes.proyectosbeta.net/api/v1/creatures/fortress)
- [Conflux](https://api-heroes.proyectosbeta.net/api/v1/creatures/conflux)
- [Inferno](https://api-heroes.proyectosbeta.net/api/v1/creatures/inferno)
- [Cove](https://api-heroes.proyectosbeta.net/api/v1/creatures/cove)
- [Fire](https://api-heroes.proyectosbeta.net/api/v1/spells/fire)
- [Bloodlust](https://api-heroes.proyectosbeta.net/api/v1/spells/fire/1)
- [Water](https://api-heroes.proyectosbeta.net/api/v1/spells/water)
- [Air](https://api-heroes.proyectosbeta.net/api/v1/spells/air)
- [Earth](https://api-heroes.proyectosbeta.net/api/v1/spells/earth)
