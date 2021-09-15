# Description

API for the Game Heroes Of Might and Magic III (HOTA)

Link:

- [Main HOTA](https://heroes.thelazy.net//index.php/Main_Page)
- [Creatures](https://heroes.thelazy.net/index.php/List_of_creatures)
- [Spells](https://heroes.thelazy.net/index.php/List_of_spells)

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
pm2 start /home/proyectosbeta/repositoriosGit/api-heroes-3-HOTA/app.ts --interpreter="deno" --interpreter-args="run --allow-net --allow-env --allow-read=." --name api-heroes-3-hota```

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
  Method GET: /creature/{town}      --> Return all town creatures
  Method GET: /creature/{town}/{id} --> Return specific creature for the town
  Method GET: /spell/{magic}        --> Return all magic spells
  Method GET: /spell/{magic}/{id}   --> Return specific spell fot the magic
```

# Try in API client

Method GET:

- [Castle](http://51.15.192.116:4500/creature/castle)
- [Pikmen](http://51.15.192.116:4500/creature/castle/1)
- [Rampart](http://51.15.192.116:4500/creature/rampart)
- [Tower](http://51.15.192.116:4500/creature/tower)
- [Inferno](http://51.15.192.116:4500/creature/inferno)
- [Necropolis](http://51.15.192.116:4500/creature/necropolis)
- [Dungeon](http://51.15.192.116:4500/creature/dungeon)
- [Stronghold](http://51.15.192.116:4500/creature/stronghold)
- [Fortress](http://51.15.192.116:4500/creature/fortress)
- [Conflux](http://51.15.192.116:4500/creature/conflux)
- [Inferno](http://51.15.192.116:4500/creature/inferno)
- [Cove](http://51.15.192.116:4500/creature/cove)
- [Fire](http://51.15.192.116:4500/spell/fire)
- [Bloodlust](http://51.15.192.116:4500/spell/fire/1)
- [Water](http://51.15.192.116:4500/spell/water)
- [Air](http://51.15.192.116:4500/spell/air)
- [Earth](http://51.15.192.116:4500/spell/earth)
