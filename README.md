# Description
API for the Game Heroes Of Might and Magic III (HOTA)

Link:
- https://heroes.thelazy.net//index.php/Main_Page
- Creatures:
  - https://heroes.thelazy.net/index.php/List_of_creatures

# Tecnologies

- DenoJS

# Development

## Install

```bash
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

## Run

```bash
denon start
```

## Requests

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
```

## Try in API client

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
```