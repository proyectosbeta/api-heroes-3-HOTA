import { Creature } from "../../models/Creature.ts";
import { rampartCreatures } from "../../data/rampartCreatures.ts";

const creatures = new Creature(rampartCreatures);

// Return all creatures.
const getCreatures = ({ response }: { response: any }) => {
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

