import { ICreature as ICreature } from "../interfaces/ICreature.ts";

export class Creature {
  readonly creatures: ICreature[];

  constructor(creatures: ICreature[]) {
    this.creatures = creatures;
  }

  // Return all creatures for specific town.
  getCreatures = (): ICreature[] => {
    return this.creatures;
  };

  // Return creature by id
  getCreature(id: string): ICreature | undefined {
    return this.creatures.find((creature) => creature.id === id);
  }
}
