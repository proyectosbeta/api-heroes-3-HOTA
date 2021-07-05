import { Spell } from "../models/Spell.ts";
import { isValidMagic } from "../middleware/magicMiddleware.ts";
import { fireSpell } from "../data/spells/fire.ts";
import { waterSpell } from "../data/spells/water.ts";
import { airSpell } from "../data/spells/air.ts";
import { earthSpell } from "../data/spells/earth.ts";

let spells: any;

const magics: any = {
  "fire": fireSpell,
  "water": waterSpell,
  "air": airSpell,
  "earth": earthSpell,
};

const setMagic = (magic: string) => {
  const existMagic = isValidMagic(magic);

  spells = (existMagic)? new Spell(getDataSpells(magic)) : false;
};

const getDataSpells = (magic: string) => {
  return magics[magic];
};

// Return all spells for the specific magic.
const getSpells = ({
  params,
  response,
}: {
  params: { magic: string };
  response: any;
}) => {
  setMagic(params.magic);

  if (spells) {
    response.status = 200;
    response.body = spells.getSpells();
  } else {
    response.status = 404;
    response.body = { message: "404 Not found" };
  }
};

// Return spell by id and specific magic.
const getSpell = ({
  params,
  response,
}: {
  params: { id: string, magic: string };
  response: any;
}) => {
  const id = params.id;
  const magic = params.magic;

  setMagic(magic);

  const spell = spells.getSpell(id, magic);

  if (spell) {
    response.status = 200;
    response.body = spell;
  } else {
    response.status = 404;
    response.body = { message: "404 Not found" };
  }
};

export { getSpell, getSpells };
