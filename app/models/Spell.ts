import { Spell as ISpell } from "../types/spell.ts";

export class Spell {
    readonly spells: Array<ISpell>;

    constructor(spells: Array<ISpell>) {
        this.spells = spells;
    }

    // Return all spells.
    getSpells = () => {
        return this.spells;
    };
    
    // Return spell by id.
    getSpell = (id: string) => {
        const spell = this.spells.filter((spell) => spell.id == id)[0];
        
        return spell;
    };
};