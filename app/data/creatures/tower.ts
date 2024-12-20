import { ICreature } from "../../interfaces/ICreature.ts";
import { APP_DOMAIN } from "../../config/index.ts";

export const towerCreatures: Array<ICreature> = [
  {
    id: "29",
    name: "Gremlin",
    level: "1",
    attack: 3,
    defense: 3,
    damage: "1-2",
    health: 4,
    speed: 4,
    size: 1,
    shots: 0,
    growth: "16",
    aiValue: 44,
    valueMoney: 30,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Gremlin.gif`,
    town: "tower",
  },
  {
    id: "30",
    name: "Master Gremlin",
    level: "1+",
    attack: 4,
    defense: 4,
    damage: "1-2",
    health: 4,
    speed: 5,
    size: 1,
    shots: 8,
    growth: "16",
    aiValue: 66,
    valueMoney: 40,
    specialAbilities: "Ranged attack",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Master_Gremlin.gif`,
    town: "tower",
  },
  {
    id: "31",
    name: "Stone Gargoyle",
    level: "2",
    attack: 6,
    defense: 6,
    damage: "2-3",
    health: 16,
    speed: 6,
    size: 1,
    shots: 0,
    growth: "9 (+4)",
    aiValue: 165,
    valueMoney: 130,
    specialAbilities: "Non-living",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Stone_Gargoyle.gif`,
    town: "tower",
  },
  {
    id: "32",
    name: "Obsidian Gargoyle",
    level: "2+",
    attack: 7,
    defense: 7,
    damage: "2-3",
    health: 16,
    speed: 9,
    size: 1,
    shots: 0,
    growth: "9 (+4)",
    aiValue: 201,
    valueMoney: 160,
    specialAbilities: "Non-living",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/tower/Obsidian_Gargoyle.gif`,
    town: "tower",
  },
  {
    id: "33",
    name: "Stone Golem",
    level: "3",
    attack: 7,
    defense: 10,
    damage: "4-5",
    health: 30,
    speed: 3,
    size: 1,
    shots: 0,
    growth: "6",
    aiValue: 250,
    valueMoney: 150,
    specialAbilities: "Spell damage resistance 50%, Golem",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Stone_Golem.gif`,
    town: "tower",
  },
  {
    id: "34",
    name: "Iron Golem",
    level: "3+",
    attack: 9,
    defense: 10,
    damage: "4-5",
    health: 35,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "6",
    aiValue: 412,
    valueMoney: 200,
    specialAbilities: "Spell damage resistance 75%, Golem",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Iron_Golem.gif`,
    town: "tower",
  },
  {
    id: "35",
    name: "Mage",
    level: "4",
    attack: 11,
    defense: 8,
    damage: "7-9",
    health: 25,
    speed: 5,
    size: 1,
    shots: 24,
    growth: "4",
    aiValue: 570,
    valueMoney: 350,
    specialAbilities: "Ranged attack, No melee penalty, Hero's " +
      "combat spells cost 2 less mana, No Obstacle penalty",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Mage.gif`,
    town: "tower",
  },
  {
    id: "36",
    name: "Arch Mage",
    level: "4+",
    attack: 12,
    defense: 9,
    damage: "7-9",
    health: 30,
    speed: 7,
    size: 1,
    shots: 24,
    growth: "4",
    aiValue: 680,
    valueMoney: 450,
    specialAbilities: "Ranged attack, No melee penalty, Hero's " +
      "combat spells cost 2 less mana, No Obstacle penalty",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Arch_Mage.gif`,
    town: "tower",
  },
  {
    id: "37",
    name: "Genie",
    level: "5",
    attack: 12,
    defense: 12,
    damage: "13-16",
    health: 40,
    speed: 7,
    size: 1,
    shots: 0,
    growth: "3",
    aiValue: 884,
    valueMoney: 550,
    specialAbilities: "Hates efreeti",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Genie.gif`,
    town: "tower",
  },
  {
    id: "38",
    name: "Master Genie",
    level: "5+",
    attack: 12,
    defense: 12,
    damage: "13-16",
    health: 40,
    speed: 11,
    size: 1,
    shots: 0,
    growth: "3",
    aiValue: 942,
    valueMoney: 600,
    specialAbilities: "Hates efreeti, Spellcaster",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Master_Genie.gif`,
    town: "tower",
  },
  {
    id: "39",
    name: "Naga",
    level: "6",
    attack: 16,
    defense: 13,
    damage: "20",
    health: 110,
    speed: 5,
    size: 2,
    shots: 0,
    growth: "2",
    aiValue: 2016,
    valueMoney: 1100,
    specialAbilities: "No enemy retaliation",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Naga.gif`,
    town: "tower",
  },
  {
    id: "40",
    name: "Naga Queen",
    level: "6+",
    attack: 16,
    defense: 13,
    damage: "30",
    health: 110,
    speed: 7,
    size: 2,
    shots: 0,
    growth: "2",
    aiValue: 2840,
    valueMoney: 1600,
    specialAbilities: "No enemy retaliation",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Naga_Queen.gif`,
    town: "tower",
  },
  {
    id: "41",
    name: "Giant",
    level: "7",
    attack: 19,
    defense: 16,
    damage: "40-60",
    health: 150,
    speed: 7,
    size: 1,
    shots: 0,
    growth: "1",
    aiValue: 3718,
    valueMoney: 2000,
    specialAbilities: "Immunity to mind spells",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Giant.gif`,
    town: "tower",
  },
  {
    id: "42",
    name: "Titan",
    level: "7+",
    attack: 24,
    defense: 24,
    damage: "40-60",
    health: 300,
    speed: 11,
    size: 1,
    shots: 24,
    growth: "1",
    aiValue: 7500,
    valueMoney: 5000,
    specialAbilities: "Ranged attack, Immunity to mind spells, " +
      "No melee Penalty, Hates Black Dragons",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/tower/Titan.gif`,
    town: "tower",
  },
];
