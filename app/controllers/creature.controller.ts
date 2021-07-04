import { Creature } from "../models/Creature.ts";
import { castleCreatures } from "../data/creatures/castle.ts";
import { rampartCreatures } from "../data/creatures/rampart.ts";
import { towerCreatures } from "../data/creatures/tower.ts";
import { infernoCreatures } from "../data/creatures/inferno.ts";
import { necropolisCreatures } from "../data/creatures/necropolis.ts";
import { dungeonCreatures } from "../data/creatures/dungeon.ts";
import { strongholdCreatures } from "../data/creatures/stronghold.ts";
import { fortressCreatures } from "../data/creatures/fortress.ts";
import { confluxCreatures } from "../data/creatures/conflux.ts";
import { coveCreatures } from "../data/creatures/cove.ts";

let creatures: any;

const towns: any = {
  "castle": castleCreatures,
  "rampart": rampartCreatures,
  "tower": towerCreatures,
  "inferno": infernoCreatures,
  "necropolis": necropolisCreatures,
  "dungeon": dungeonCreatures,
  "stronghold": strongholdCreatures,
  "fortress": fortressCreatures,
  "conflux": confluxCreatures,
  "cove": coveCreatures,
};

const setTown = (town: string) => {
  creatures = new Creature(getDataCreatures(town));
};

const getDataCreatures = (town: string) => {
  return towns[town];
};

// Return all creatures for the specific town.
const getCreatures = ({
  params,
  response,
}: {
  params: { town: string };
  response: any;
}) => {
  setTown(params.town);

  if (creatures) {
    response.status = 200;
    response.body = creatures.getCreatures();
  } else {
    response.status = 404;
    response.body = { message: "404 Not found" };
  }
};

// Return creature by id and specific town.
const getCreature = ({
  params,
  response,
}: {
  params: { id: string, town: string };
  response: any;
}) => {
  const id = params.id;
  const town = params.town;

  setTown(town);
  
  const creature = creatures.getCreature(id, town);

  if (creature) {
    response.status = 200;
    response.body = creature;
  } else {
    response.status = 404;
    response.body = { message: "404 Not found" };
  }
};

export { getCreature, getCreatures };