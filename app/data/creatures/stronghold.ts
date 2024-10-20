import { ICreature } from "../../interfaces/ICreature.ts";
import { APP_DOMAIN } from "../../config/index.ts";

export const strongholdCreatures: Array<ICreature> = [
  {
    id: "85",
    name: "Goblin",
    level: "1",
    attack: 4,
    defense: 2,
    damage: "1-2",
    health: 5,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "15 (+8)",
    aiValue: 60,
    valueMoney: 40,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Goblin.gif`,
    town: "stronghold",
  },
  {
    id: "86",
    name: "Hobgoblin",
    level: "1+",
    attack: 5,
    defense: 3,
    damage: "1-2",
    health: 5,
    speed: 7,
    size: 1,
    shots: 0,
    growth: "15 (+8)",
    aiValue: 78,
    valueMoney: 50,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Hobgoblin.gif`,
    town: "stronghold",
  },
  {
    id: "87",
    name: "Wolf Rider",
    level: "2",
    attack: 7,
    defense: 5,
    damage: "2-4",
    health: 10,
    speed: 6,
    size: 2,
    shots: 0,
    growth: "9",
    aiValue: 130,
    valueMoney: 100,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Wolf_Rider.gif`,
    town: "stronghold",
  },
  {
    id: "88",
    name: "Wolf Raider",
    level: "2+",
    attack: 8,
    defense: 5,
    damage: "3-4 (x2)",
    health: 10,
    speed: 8,
    size: 2,
    shots: 0,
    growth: "9",
    aiValue: 203,
    valueMoney: 140,
    specialAbilities: "Double attack",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Wolf_Raider.gif`,
    town: "stronghold",
  },
  {
    id: "89",
    name: "Orc",
    level: "3",
    attack: 8,
    defense: 4,
    damage: "2-5",
    health: 15,
    speed: 4,
    size: 1,
    shots: 12,
    growth: "7",
    aiValue: 192,
    valueMoney: 150,
    specialAbilities: "Ranged attack",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Orc.gif`,
    town: "stronghold",
  },
  {
    id: "90",
    name: "Orc Chieftain",
    level: "3+",
    attack: 8,
    defense: 4,
    damage: "2-5",
    health: 20,
    speed: 5,
    size: 1,
    shots: 24,
    growth: "7",
    aiValue: 240,
    valueMoney: 165,
    specialAbilities: "Ranged attack",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/stronghold/Orc_Chieftain.gif`,
    town: "stronghold",
  },
  {
    id: "91",
    name: "Ogre",
    level: "4",
    attack: 13,
    defense: 7,
    damage: "6-12",
    health: 40,
    speed: 4,
    size: 1,
    shots: 0,
    growth: "4",
    aiValue: 416,
    valueMoney: 300,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Ogre.gif`,
    town: "stronghold",
  },
  {
    id: "92",
    name: "Ogre Mage",
    level: "4+",
    attack: 13,
    defense: 7,
    damage: "6-12",
    health: 60,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "4",
    aiValue: 672,
    valueMoney: 400,
    specialAbilities: "Spellcaster (Bloodlust)",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Ogre_Mage.gif`,
    town: "stronghold",
  },
  {
    id: "93",
    name: "Roc",
    level: "5",
    attack: 13,
    defense: 11,
    damage: "11-15",
    health: 60,
    speed: 7,
    size: 2,
    shots: 0,
    growth: "3",
    aiValue: 1027,
    valueMoney: 600,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Roc.gif`,
    town: "stronghold",
  },
  {
    id: "94",
    name: "Thunderbird",
    level: "5+",
    attack: 13,
    defense: 11,
    damage: "11-15",
    health: 60,
    speed: 11,
    size: 2,
    shots: 0,
    growth: "3",
    aiValue: 1106,
    valueMoney: 700,
    specialAbilities: "Lightning strike",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Thunderbird.gif`,
    town: "stronghold",
  },
  {
    id: "95",
    name: "Cyclops",
    level: "6",
    attack: 15,
    defense: 12,
    damage: "16-20",
    health: 70,
    speed: 6,
    size: 1,
    shots: 16,
    growth: "2",
    aiValue: 1266,
    valueMoney: 750,
    specialAbilities: "Ranged attack, Can attack siege walls",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Cyclops.gif`,
    town: "stronghold",
  },
  {
    id: "96",
    name: "Cyclops King",
    level: "6+",
    attack: 17,
    defense: 13,
    damage: "16-20",
    health: 70,
    speed: 8,
    size: 1,
    shots: 24,
    growth: "2",
    aiValue: 1443,
    valueMoney: 1100,
    specialAbilities: "Ranged attack, Can attack siege walls",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/stronghold/Cyclops_King.gif`,
    town: "stronghold",
  },
  {
    id: "97",
    name: "Behemoth",
    level: "7",
    attack: 17,
    defense: 17,
    damage: "30-50",
    health: 160,
    speed: 6,
    size: 2,
    shots: 0,
    growth: "1",
    aiValue: 3162,
    valueMoney: 1500,
    specialAbilities: "Attack reduces enemy's defense by 40% " +
      "and 1 point temporarily",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/stronghold/Behemoth.gif`,
    town: "stronghold",
  },
  {
    id: "98",
    name: "Ancient Behemoth",
    level: "7+",
    attack: 19,
    defense: 19,
    damage: "30-50",
    health: 300,
    speed: 9,
    size: 2,
    shots: 0,
    growth: "1",
    aiValue: 6168,
    valueMoney: 3000,
    specialAbilities: "Attack reduces enemy's defense by 80% " +
      "and 1 point temporarily",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/stronghold/Ancient_Behemoth.gif`,
    town: "stronghold",
  },
];
