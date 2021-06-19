import { Spell } from "../../types/spell.ts";

export const airSpell: Array<Spell> = [
  {
    id: "34",
    name: "Haste",
    level: 1,
    effect: "Target (or all) allied troop's speed is " +
      "increased by 3 (or 5) hexes per turn",
  },
  {
    id: "35",
    name: "View Air",
    level: 1,
    effect: "Reveals location of all unclaimed artifacts",
  },
  {
    id: "36",
    name: "Disguise",
    level: 2,
    effect: "Modifies the army composition scouting report " +
      "visible to enemies",
  },
  {
    id: "37",
    name: "Disrupting Ray",
    level: 2,
    effect: "Reduces defense rating of a single enemy. " +
      "May be used repeatedly on the same target",
  },
  {
    id: "38",
    name: "Fortune",
    level: 2,
    effect: "Increases luck. Basic: Single ally. Expert: All allies",
  },
  {
    id: "39",
    name: "Lightning Bolt",
    level: 2,
    effect: "Inflicts magic damage on a single enemy",
  },
  {
    id: "40",
    name: "Precision",
    level: 2,
    effect: " 	Increases ranged attack rating. Basic: Single " +
      "ally. Expert: All allies",
  },
  {
    id: "41",
    name: "Protection from Air",
    level: 2,
    effect: "Reduces damage taken from air spells. Basic: " +
      "Single ally. Expert: All allies. Effect increased " +
      "from 30%-30%-50%-50% to 50%-50%-75%-75%. Horn of the Abyss",
  },
  {
    id: "42",
    name: "Air Shield",
    level: 3,
    effect: " 	Reduces damage taken from ranged attacks",
  },
  {
    id: "43",
    name: "Destroy Undead",
    level: 3,
    effect: "Inflicts magic damage on all undead creatures",
  },
  {
    id: "44",
    name: "Hypnotize",
    level: 3,
    effect: "Allows control of actions taken by enemy creature",
  },
  {
    id: "45",
    name: "Chain Lightning",
    level: 4,
    effect: "Inflicts magic damage on initial creature and " +
      "reduced damage on nearby creatures",
  },
  {
    id: "46",
    name: "Counterstrike",
    level: 4,
    effect: " 	Allows extra retaliations per round. Basic: " +
      "Single ally. Expert: All allies",
  },
  {
    id: "47",
    name: "Dimension Door",
    level: 5,
    effect: "Teleports hero to visible location",
  },
  {
    id: "48",
    name: "Fly",
    level: 5,
    effect: "Allows movement to visible land over " +
      "all map obstacles. Cannot fly through cave " +
      "walls in the underground",
  },
  {
    id: "49",
    name: "Magic Mirror",
    level: 5,
    effect: "Reflects hostile spells to a random enemy. Basic: " +
      "20% chance of occurrence. Advanced: 30% chance. Expert: " +
      "40% chance",
  },
  {
    id: "50",
    name: "Summon Air Elemental",
    level: 5,
    effect: "Summons allied Air Elementals for the duration of combat",
  },
  {
    id: "51",
    name: "Titan's Lightning Bolt",
    level: 5,
    effect: "Inflicts 600 magic damage on a single enemy. " +
      "Requires Titan's Thunder",
  },
];