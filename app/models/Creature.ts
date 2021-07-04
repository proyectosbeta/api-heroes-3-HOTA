import { Creature as ICreature } from "../types/creature.ts";

export class Creature {
  readonly creatures: Array<ICreature>;

  constructor(creatures: Array<ICreature>) {
    this.creatures = creatures;
  }

  // Return all creatures for specific town.
  getCreatures = () => {
    return this.creatures;
  };

  // Return creature by id and town.
  getCreature = (id: string, town: string) => {
    const creature = this.creatures.filter((creature) =>
      creature.id == id && creature.town === town)[0];

    return creature;
  };
}
