import { Creature } from "../../types/creature.ts";
import { APP_DOMAIN } from "../../config/index.ts";

export const coveCreatures: Array<Creature> = [
  {
    id: "127",
    name: "Nymph",
    level: "1",
    attack: 5,
    defense: 2,
    damage: "1-2",
    health: 4,
    speed: 6,
    size: 1,
    shots: 0,
    growth: "16",
    aiValue: 57,
    valueMoney: 35,
    specialAbilities: "Immune to Ice Bolt and Frost Ring",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Nymph.gif`,
    factory: "cove",
  },
  {
    id: "128",
    name: "Oceanid",
    level: "1+",
    attack: 6,
    defense: 2,
    damage: "1-3",
    health: 4,
    speed: 8,
    size: 1,
    shots: 0,
    growth: "16",
    aiValue: 75,
    valueMoney: 45,
    specialAbilities: "Immune to Ice Bolt and Frost Ring",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Oceanid.gif`,
    factory: "cove",
  },
  {
    id: "129",
    name: "Crew Mate",
    level: "2",
    attack: 7,
    defense: 4,
    damage: "2-4",
    health: 15,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "9 (+4)",
    aiValue: 155,
    valueMoney: 110,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Crew_Mate.gif`,
    factory: "cove",
  },
  {
    id: "130",
    name: "Seaman",
    level: "2+",
    attack: 8,
    defense: 6,
    damage: "3-4",
    health: 15,
    speed: 6,
    size: 1,
    shots: 0,
    growth: "9 (+4)",
    aiValue: 174,
    valueMoney: 140,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Seaman.gif`,
    factory: "cove",
  },
  {
    id: "131",
    name: "Pirate",
    level: "3",
    attack: 8,
    defense: 6,
    damage: "3-7",
    health: 15,
    speed: 6,
    size: 1,
    shots: 4,
    growth: "7",
    aiValue: 312,
    valueMoney: 225,
    specialAbilities: "Ranged attack, No melee penalty",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Pirate.gif`,
    factory: "cove",
  },
  {
    id: "132",
    name: "Corsair",
    level: "3+",
    attack: 10,
    defense: 8,
    damage: "3-7",
    health: 15,
    speed: 7,
    size: 1,
    shots: 4,
    growth: "7",
    aiValue: 407,
    valueMoney: 275,
    specialAbilities: "Ranged attack, No melee penalty, " +
      "No enemy retaliation",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Corsair.gif`,
    factory: "cove",
  },
  {
    id: "133",
    name: "Sea Dog",
    level: "3++",
    attack: 12,
    defense: 11,
    damage: "3-7",
    health: 15,
    speed: 8,
    size: 1,
    shots: 12,
    growth: "7",
    aiValue: 602,
    valueMoney: 375,
    specialAbilities: "Ranged attack, No melee penalty, " +
      "No enemy retaliation, Accurate shot. The ability is " +
      "triggered after a shot: each creature in an attacking " +
      "stack has a X% chance of killing a creature in the " +
      "attacked squad, but the total number of killed " +
      "creatures cannot be more than(number of creatures " +
      "in an attacking squad) * X / 100(rounded up).X = 3 " +
      "multiplier for shooting without penalty and X = 2 " +
      "if shooting with penalty.Ability doesn't work if " +
      "shooting at creatures behind walls",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Sea_Dog.gif`,
    factory: "cove",
  },
  {
    id: "134",
    name: "Stormbird",
    level: "4",
    attack: 10,
    defense: 8,
    damage: "5-9",
    health: 30,
    speed: 9,
    size: 2,
    shots: 0,
    growth: "4 (+3)",
    aiValue: 502,
    valueMoney: 275,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Stormbird.gif`,
    factory: "cove",
  },
  {
    id: "135",
    name: "Ayssid",
    level: "4+",
    attack: 11,
    defense: 8,
    damage: "6-10",
    health: 30,
    speed: 11,
    size: 2,
    shots: 0,
    growth: "4 (+3)",
    aiValue: 645,
    valueMoney: 325,
    specialAbilities: "Ferocity. If at least one creature was killed " +
      "by the attack, a second blow is inflicted",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Ayssid.gif`,
    factory: "cove",
  },
  {
    id: "136",
    name: "Sea Witch",
    level: "5",
    attack: 12,
    defense: 7,
    damage: "10-14",
    health: 35,
    speed: 6,
    size: 1,
    shots: 12,
    growth: "3",
    aiValue: 790,
    valueMoney: 515,
    specialAbilities: "Ranged attack, " +
      "Casts after a shot (Basic level). Casts Weakness for 3 " +
      "rounds on an attacked stack. If Weakness is already applied, " +
      "casts Disrupting Ray",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Sea_Witch.gif`,
    factory: "cove",
  },
  {
    id: "137",
    name: "Sorceress",
    level: "5+",
    attack: 12,
    defense: 9,
    damage: "10-16",
    health: 35,
    speed: 7,
    size: 1,
    shots: 12,
    growth: "3",
    aiValue: 852,
    valueMoney: 565,
    specialAbilities: "Ranged attack, Casts after the shot (Advanced " +
      "level). Casts Weakness for 3 rounds on an attacked " +
      "stack. If Weakness is already applied, casts Disrupting Ray",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Sorceress.gif`,
    factory: "cove",
  },
  {
    id: "138",
    name: "Nix",
    level: "6",
    attack: 13,
    defense: 16,
    damage: "18-22",
    health: 80,
    speed: 6,
    size: 1,
    shots: 0,
    growth: "2",
    aiValue: 1415,
    valueMoney: 1000,
    specialAbilities: "Ignores 30% of enemy's attack skill " +
      "(= 30% of the attack parameter is ignored  " +
      "a creature attacks Nix)",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Nix.gif`,
    factory: "cove",
  },
  {
    id: "139",
    name: "Nix Warrior",
    level: "6+",
    attack: 14,
    defense: 17,
    damage: "18-22",
    health: 90,
    speed: 7,
    size: 1,
    shots: 0,
    growth: "2",
    aiValue: 2116,
    valueMoney: 1300,
    specialAbilities: "Ignores 60% of enemy's attack skill. " +
      "(= 60% of the attack parameter is ignored " +
      "when a creature attacks Nix Warrior)",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Nix_Warrior.gif`,
    factory: "cove",
  },
  {
    id: "140",
    name: "Sea Serpent",
    level: "7",
    attack: 22,
    defense: 16,
    damage: "30-55",
    health: 180,
    speed: 9,
    size: 2,
    shots: 0,
    growth: "1",
    aiValue: 3953,
    valueMoney: 2200,
    specialAbilities: "Poisonous. Has a 30% chance to poison " +
      "enemy after the attack.Decrements 10% of Max Health " +
      "instantly and at the beginning of every round. " +
      "Lasts for 3 rounds.Cannot exceed 50% of " +
      "total decremented Health",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Sea_Serpent.gif`,
    factory: "cove",
  },
  {
    id: "141",
    name: "Haspid",
    level: "7+",
    attack: 29,
    defense: 20,
    damage: "30-55",
    health: 300,
    speed: 21,
    size: 2,
    shots: 0,
    growth: "1",
    aiValue: 7220,
    valueMoney: 4000,
    specialAbilities: "Poisonous. Has a 30% chance to poison " +
      "enemy after the attack. Decrements 10% of Max " +
      "Health instantly and at the beginning " +
      "of every round. Lasts for 3 rounds. " +
      "Cannot exceed 50% of total decremented " +
      "Health, Revenge. Has an increase to the Damage " +
      "parameter before the attack by the following formula: " +
      "(((number of haspids at the beginning of the battle + 1) " +
      "* (1 haspid health) / (total health now + 1 haspid health) - 1) ^ 0.5) * 100%",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/cove/Haspid.gif`,
    factory: "cove",
  },
];
