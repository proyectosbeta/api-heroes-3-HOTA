import { Creature } from "../models/Creature.ts";
import { isValidTown } from "../middleware/townMiddleware.ts";
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
  castle: castleCreatures,
  rampart: rampartCreatures,
  tower: towerCreatures,
  inferno: infernoCreatures,
  necropolis: necropolisCreatures,
  dungeon: dungeonCreatures,
  stronghold: strongholdCreatures,
  fortress: fortressCreatures,
  conflux: confluxCreatures,
  cove: coveCreatures,
};

const setTown = (town: string) => {
  const existTown = isValidTown(town);

  creatures = existTown ? new Creature(getDataCreatures(town)) : false;
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

  const data = creatures.getCreatures();
  setResponse(response, data, true);
};

// Return creature by id and specific town.
const getCreature = async ({
  params,
  response,
}: {
  params: { id: string; town: string };
  response: any;
}) => {
  const { id } = params as { id: string };
  const { town } = params as { town: string };

  setTown(town);

  const data = await creatures.getCreature(id, town);
  setResponse(response, data, false);
};

const setResponse = (response: any, data: any, many: boolean) => {
  if (data) {
    const count = many ? Object.keys(data).length : 1;

    response.status = 200;
    response.body = data;

    response.headers.set("Access-Control-Expose-Headers", "X-Total-Count");
    response.headers.set("X-Total-Count", count);
  } else {
    response.status = 404;
    response.body = { message: "404 Not found" };
  }
};

export { getCreature, getCreatures };
