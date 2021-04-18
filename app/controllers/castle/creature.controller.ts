import { castleCreatures } from "../../data/castleCreatures.ts";

// Array castle creatures.
const creatures = castleCreatures;

// Return all creatures
const getCreatures = ({ response }: { response: any }) => {
  response.body = creatures;
};

// Return creature by id
const getCreature = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const creature = creatures.filter((creature) => creature.id == params.id)[0];

  if (creature) {
    response.status = 200;
    response.body = creature;
  } else {
    response.status = 404;
    response.body = { message: "404 Not found" };
  }
};

export { getCreatures, getCreature };
