import { Spell } from "../../types/spell.ts";

export const earthSpell: Array<Spell> = [
  {
    id: "52",
    name: "Shield",
    level: 1,
    effect: "Reduces damage taken from hand-to-hand attacks. " + 
      "Basic: Single ally. Expert: All allies",
    imageUrl: "", 
  },
  {
    id: "53",
    name: "Slow",
    level: 1,
    effect: "Decreases speed. Basic: Single enemy. Expert: " +
      "All enemies. Advanced/Expert Slow reduce speed by a " +
      "new reduced formula (old speed x 0.5 + 1). Horn of " +
      "the Abyss",
    imageUrl: "",
  },
  {
    id: "54",
    name: "Stone Skin",
    level: 1,
    effect: "Increases defense rating. Basic: Single ally. " +
      "Expert: All allies",
    imageUrl: "",
  },
  {
    id: "55",
    name: "View Earth",
    level: 1,
    effect: "Reveals location of all resources",
    imageUrl: "",
  },
  {
    id: "56",
    name: " Death Ripple",
    level: 2,
    effect: "Inflicts magic damage on all living creatures",
    imageUrl: "",
  },
  {
    id: "57",
    name: "Quicksand",
    level: 2,
    effect: "Places quicksand at random locations on the battlefield. " +
      "Only visible to caster and creatures native to the terrain. " +
      "Creatures attempting to pass through quicksand become stuck " +
      "and make the location of the quicksand visible",
    imageUrl: "",
  },
  {
    id: "58",
    name: "Animate Dead",
    level: 3,
    effect: "Reanimates killed undead creatures. Reanimated creatures " +
      "are not lost when combat ends",
    imageUrl: "",
  },
  {
    id: "59",
    name: "Anti-Magic",
    level: 3,
    effect: "Grants spell immunity to a single creature",
    imageUrl: "",
  },
  {
    id: "60",
    name: "Earthquake",
    level: 3,
    effect: "Inflicts damage on random castle wall sections " +
      "during a siege",
    imageUrl: "",
  },
  {
    id: "61",
    name: "Force Field",
    level: 3,
    effect: "Places force field at specified location. " +
      "Creatures cannot pass this field",
    imageUrl: "",
  },
  {
    id: "62",
    name: "Protection from Earth",
    level: 3,
    effect: "Reduces damage taken from earth spells. Basic: " +
      "Single ally. Expert: All allies. Effect increased " +
      "from 30%-30%-50%-50% to 50%-50%-75%-75%. Horn of the Abyss",
    imageUrl: "",
  },
  {
    id: "63",
    name: "Meteor Shower",
    level: 4,
    effect: "Inflicts magic damage on all creatures in area",
    imageUrl: "",
  },
  {
    id: "64",
    name: "Resurrection",
    level: 4,
    effect: "Resurrects killed living creatures until the " +
      "end of combat. Advanced: Resurrected creatures are " +
      "not lost when combat ends",
    imageUrl: "",
  },
  {
    id: "65",
    name: "Sorrow",
    level: 4,
    effect: "Reduces morale. Basic: Single enemy. Expert: All enemies",
    imageUrl: "",
  },
  {
    id: "66",
    name: "Town Portal",
    level: 4,
    effect: "Teleports hero to closest allied, unoccupied town. " +
      "Advanced: May choose any allied, unoccupied town",
    imageUrl: "",
  },
  {
    id: "67",
    name: "Implosion",
    level: 5,
    effect: "Inflicts magic damage on a single enemy",
    imageUrl: "",
  },
  {
    id: "68",
    name: "Summon Earth Elemental",
    level: 5,
    effect: "Summons allied Earth Elementals for the duration of combat",
    imageUrl: "",
  },
];