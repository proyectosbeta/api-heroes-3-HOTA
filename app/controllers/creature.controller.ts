import { Creature } from "../models/Creature.ts";
import { ICreature } from "../interfaces/ICreature.ts";
import { Town } from "../types/Town.ts";
import { isValidTown } from "../middleware/townMiddleware.ts";
import { 
  castleCreatures,
  rampartCreatures,
  towerCreatures,
  infernoCreatures,
  necropolisCreatures,
  dungeonCreatures,
  strongholdCreatures,
  fortressCreatures,
  confluxCreatures,
  coveCreatures
} from "../data/creatures.ts";
import { Response } from "../../deps.ts";


let creatures: Creature | false;

const towns: Record <Town, ICreature[]> = {
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

const setTown = (town: Town) => {
  const existTown = isValidTown(town);

  creatures = existTown ? new Creature(getDataCreatures(town)) : false;
};

const getDataCreatures = (town: Town) => {
  return towns[town];
};

// Return all creatures for the specific town.
const getCreatures = ({
  params,
  response,
}: {
  params: { town: Town };
  response: Response;
}) => {
  setTown(params.town);

  if(creatures instanceof Creature){
    const data = creatures.getCreatures();
    setResponse(response, data, true);
  }
};

// Return creature by id and specific town.
const getCreature = async ({
  params,
  response,
}: {
  params: { id: string; town: Town };
  response: Response;
}) => {
  const { id } = params as { id: string };
  const { town } = params as { town: Town };

  setTown(town);

  if(creatures instanceof Creature){
    const data = await creatures.getCreature(id);
    setResponse(response, data, false);
  }
};

const setResponse = (response: Response, data: ICreature | ICreature[] | undefined, many: boolean) => {
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
