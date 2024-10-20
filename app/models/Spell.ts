import { ISpell } from "../interfaces/ISpell.ts";

export class Spell {
  readonly spells: Array<ISpell>;

  constructor(spells: Array<ISpell>) {
    this.spells = spells;
  }

  // Return all spells for specific magic.
  getSpells = (): Array<ISpell> => {
    return this.spells;
  };

  // Return spell by id and magic.
  getSpell = (id: string, magic: string): ISpell => {
    const spell = this.spells.filter((spell) => spell.id == id
     && spell.magic === magic)[0];

    return spell;
  };
}
