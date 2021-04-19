import { Creature } from "../models/Creature.ts";
import { castleCreatures } from "../data/creatures/castle.ts";
import { rampartCreatures } from "../data/creatures/rampart.ts";
import { towerCreatures } from "../data/creatures/tower.ts";
import { infernoCreatures } from "../data/creatures/inferno.ts";
import { necropolisCreatures } from "../data/creatures/necropolis.ts";
import { dungeonCreatures } from "../data/creatures/dungeon.ts";
import { strongholdCreatures } from "../data/creatures/stronghold.ts";

let creatures: any;

const factories: any = { 
    'castle': castleCreatures,
    'rampart': rampartCreatures,
    'tower': towerCreatures,
    'inferno': infernoCreatures,
    'necropolis': necropolisCreatures,
    'dungeon': dungeonCreatures,
    'stronghold': strongholdCreatures,
};

const setFactory = (factory: string) => {
    creatures = new Creature(getDataCreatures(factory));
};

const getDataCreatures = (factory: string) => {
    var allCreatures = castleCreatures.concat(rampartCreatures,
      towerCreatures, infernoCreatures, necropolisCreatures,
      dungeonCreatures, strongholdCreatures);

    return factories[factory] || allCreatures;
};

// Return all creatures.
const getCreatures = ({
    params,
    response 
}: {
    params: { factory: string };
    response: any
}) => {
  setFactory(params.factory);

  response.body = creatures.getCreatures();
};

// Return creature by id.
const getCreature = ({
    params,
    response,
}: {
    params: { id: string };
    response: any;
}) => {
  const creature = creatures.getCreature(params.id);

  if (creature) {
      response.status = 200;
      response.body = creature;
  } else {
      response.status = 404;
      response.body = { message: "404 Not found" };
  }
};

export { getCreatures, getCreature };