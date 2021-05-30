import { Spell } from "../models/Spell.ts";
import { fireSpell } from "../data/spells/fire.ts";
import { waterSpell } from "../data/spells/water.ts";
import { airSpell } from "../data/spells/air.ts";
import { earthSpell } from "../data/spells/earth.ts";

let spells: any;

const magics: any = { 
    'fire': fireSpell,
    'water': waterSpell,
    'air': airSpell,
    'earth': earthSpell,
};

const setMagic = (magic: string) => {
  spells = new Spell(getDataSpells(magic));
};

const getDataSpells = (magic: string) => {
    var allSpells = fireSpell.concat(waterSpell, 
      airSpell, earthSpell);

    return magics[magic] || allSpells;
};

// Return all spells.
const getSpells = ({
    params,
    response 
}: {
    params: { magic: string };
    response: any
}) => {
  setMagic(params.magic);

  response.body = spells.getSpells();
};

// Return spell by id.
const getSpell = ({
    params,
    response,
}: {
    params: { id: string };
    response: any;
}) => {
  const spell = spells.getSpell(params.id);

  if (spell) {
      response.status = 200;
      response.body = spells;
  } else {
      response.status = 404;
      response.body = { message: "404 Not found" };
  }
};

export { getSpells, getSpell };