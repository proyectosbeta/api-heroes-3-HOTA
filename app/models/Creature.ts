import { Creature as ICreature} from "../types/creature.ts";

export class Creature {
    readonly creatures: Array<ICreature>;

    constructor(creatures: Array<ICreature>) {
        this.creatures = creatures;
    }

    // Return all creatures.
    getCreatures = () => {
        return this.creatures;
    };
    
    // Return creature by id.
    getCreature = (id: string) => {
        const creature = this.creatures.filter((creature) => creature.id == id)[0];
        
        return creature;
    };
};