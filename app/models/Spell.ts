import { Spell as ISpell } from "../types/spell.ts";

export class Spell {
  readonly spells: Array<ISpell>;

  constructor(spells: Array<ISpell>) {
    this.spells = spells;
  }

  // Return all spells for specific magic.
  getSpells = () => {
    return this.spells;
  };

  // Return spell by id and magic.
  getSpell = (id: string, magic: string) => {
    const spell = this.spells.filter((spell) => spell.id == id
     && spell.magic === magic)[0];

    return spell;
  };
}
