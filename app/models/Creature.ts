import { ICreature as ICreature } from "../interfaces/ICreature.ts";
import { Town } from "../types/Town.ts";

export class Creature {
  readonly creatures: Array<ICreature>;

  constructor(creatures: Array<ICreature>) {
    this.creatures = creatures;
  }

  // Return all creatures for specific town.
  getCreatures = (): Array<ICreature> => {
    return this.creatures;
  };

  // Return creature by id and town.
  getCreature = (id: string, town: Town) => {
    const creature = this.creatures.filter((creature) =>
      creature.id == id && creature.town === town)[0];

    return creature;
  };
}
