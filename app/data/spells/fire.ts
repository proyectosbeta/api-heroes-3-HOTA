import { Spell } from "../../types/spell.ts";

export const fireSpell: Array<Spell> = [
  {
      id: "1",
      name: "Bloodlust",
      level: 1,
      effect: "Increases the attack skill of target (or all) " +
        "allied creature for melee attacks",
  },
  {
    id: "2",
    name: "Curse",
    level: 1,
    effect: "The targeted (or all) enemy unit(s) deliver" +
      "minimum or reduced damage when attacking",
  },
  {
    id: "3",
    name: "Protection from Fire",
    level: 1,
    effect: "Reduces damage taken from fire spells." +
      "Basic: Single ally. Expert: All allies. Effect " +
      "increased from 30%-30%-50%-50% to 50%-50%-75%-75%. " +
      "Horn of the Abyss",
  },
  {
    id: "4",
    name: "Blind",
    level: 2,
    effect: "Prevents any action from being taken by " +
      "target enemy creature. ",
  },
  {
    id: "5",
    name: "Fire Wall",
    level: 2,
    effect: "Creates wall of fire at target location " +
      "that inflicts magic damage on creatures that" + 
      "pass through",
  },
  {
    id: "6",
    name: "Fireball",
    level: 3,
    effect: "Inflicts magic damage on all creatures in area",
  },
  {
    id: "7",
    name: "Land Mine",
    level: 3,
    effect: "locations on the battlefield. Only visible " +
      "to caster and creatures native to the terrain",
  },
  {
    id: "8",
    name: "Misfortune",
    level: 3,
    effect: "Reduces luck. Basic: Single enemy. Expert: All enemies",
  },
  {
    id: "9",
    name: "Armageddon",
    level: 4,
    effect: "Inflicts magic damage on all creatures on the battlefield. " +
      "Damage reduced from 50*(spell power) + 30/30/60/120 to 40*(spell power) " + 
      "+ 30/30/60/120. Horn of the Abyss",
  },
  {
    id: "10",
    name: "Berserk",
    level: 4,
    effect: "Forces enemy to attack closest creature",
  },
  {
    id: "11",
    name: "Fire Shield",
    level: 4,
    effect: "Inflicts magic damage proportional to " +
      "damage taken from hand-to-hand attacks",
  },
  {
    id: "12",
    name: "Frenzy",
    level: 4,
    effect: "Increases attack rating and sets defense rating to 0",
  },
  {
    id: "13",
    name: "Inferno",
    level: 4,
    effect: "Inflicts magic damage on all creatures in area",
  },
  {
    id: "14",
    name: "Slayer",
    level: 4,
    effect: " 	Increases attack rating of a single ally against " + 
      "Dragons, Behemoths and Hydras. Advanced: Effect applies" + 
      "to Angels and Devils. Expert: Effect applies to Titans",
  },
  {
    id: "15",
    name: "Sacrifice",
    level: 5,
    effect: "Destroys and removes living, unkilled allies to bring" +
      "previously living, killed allies back to life",
  },
  {
    id: "16",
    name: "Summon Fire Elemental",
    level: 5,
    effect: "Summons allied Fire Elementals for the duration of combat",
  },
];