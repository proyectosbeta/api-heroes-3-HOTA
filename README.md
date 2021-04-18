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

```
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

## Run

```
denon start
```

## Requests

  Method GET: /creature --> All creatures
  Method GET: /creature/castle --> Return all castle creatures 
  Method GET: /creature/rampart --> Return all rampart creatures 
  Method GET: /creature/tower --> Return all tower creatures 
  Method GET: /creature/inferno --> Return all inferno creatures 

## Try in API client

Method GET:

  http://51.15.192.116:4500/creature/
  http://51.15.192.116:4500/creature/castle
  http://51.15.192.116:4500/creature/rampart
  http://51.15.192.116:4500/creature/tower
  http://51.15.192.116:4500/creature/inferno