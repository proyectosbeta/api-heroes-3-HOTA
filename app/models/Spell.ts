import { ISpell } from "../interfaces/ISpell.ts";

export class Spell {
  readonly spells: ISpell[];

  constructor(spells: ISpell[]) {
    this.spells = spells;
  }

  // Return all spells for specific magic.
  getSpells = (): ISpell[] => {
    return this.spells;
  };

  // Return spell by id
  getSpell(id: string): ISpell | undefined {
    return this.spells.find((spell) => spell.id === id);
  }
}
