import { Magic } from "../types/Magic.ts";

const magics: { [key in Magic]: boolean } = {
  [Magic.Fire]: true,
  [Magic.Water]: true,
  [Magic.Air]: true,
  [Magic.Earth]: true,
};

const getMagic = (magic: Magic): boolean => magics[magic] || false;

const isValidMagic = (magic: Magic) => {
    return getMagic(magic);
};

export { isValidMagic };