import { Spell } from "../models/Spell.ts";
import { ISpell } from "../interfaces/ISpell.ts";
import { Magic } from "../types/Magic.ts";
import { airSpell, earthSpell, fireSpell, waterSpell } from "../data/spells.ts";
import { isValidMagic } from "../utils/magicUtils.ts";
import { Response } from "../../deps.ts";

let spells: Spell | false;

const magics: Record<Magic, ISpell[]> = {
  fire: fireSpell,
  water: waterSpell,
  air: airSpell,
  earth: earthSpell,
};

const setMagic = (magic: Magic) => {
  const existMagic = isValidMagic(magic);

  spells = existMagic ? new Spell(getDataSpells(magic)) : false;
};

const getDataSpells = (magic: Magic) => {
  return magics[magic];
};

// Return all spells for the specific magic.
const getSpells = ({
  params,
  response,
}: {
  params: { magic: Magic };
  response: Response;
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
  params: { id: string; magic: Magic };
  response: Response;
}) => {
  const id = params.id;
  const magic = params.magic;

  setMagic(magic);

  if (spells instanceof Spell) {
    const spell = spells.getSpell(id);

    if (spell) {
      response.status = 200;
      response.body = spell;
    } else {
      response.status = 404;
      response.body = { message: "404 Not found" };
    }
  } else {
    response.status = 404;
    response.body = { message: "404 Not found" };
  }
};

export { getSpell, getSpells };
