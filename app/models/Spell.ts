import { ISpell } from "../interfaces/ISpell.ts";
import { Magic } from "../types/Magic.ts";

export class Spell {
  readonly spells: ISpell[];

  constructor(spells: ISpell[]) {
    this.spells = spells;
  }

  // Return all spells for specific magic.
  getSpells = (): ISpell[] => {
    return this.spells;
  };

  // Return spell by id and magic.
  getSpell = (id: string, magic: Magic): ISpell => {
    const spell = this.spells.filter((spell) => spell.id == id
     && spell.magic === magic)[0];

    return spell;
  };
}
