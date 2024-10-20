import { ICreature } from "../../interfaces/ICreature.ts";
import { APP_DOMAIN } from "../../config/index.ts";

export const infernoCreatures: Array<ICreature> = [
  {
    id: "43",
    name: "Imp",
    level: "1",
    attack: 2,
    defense: 3,
    damage: "1-2",
    health: 4,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "15 (+8)",
    aiValue: 50,
    valueMoney: 50,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Imp.gif`,
    town: "inferno",
  },
  {
    id: "44",
    name: "Familiar",
    level: "1+",
    attack: 4,
    defense: 4,
    damage: "1-2",
    health: 4,
    speed: 7,
    size: 1,
    shots: 0,
    growth: "15 (+8)",
    aiValue: 60,
    valueMoney: 60,
    specialAbilities: "Magic channel",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Familiar.gif`,
    town: "inferno",
  },
  {
    id: "45",
    name: "Gog",
    level: "2",
    attack: 6,
    defense: 4,
    damage: "2-4",
    health: 13,
    speed: 4,
    size: 1,
    shots: 12,
    growth: "8",
    aiValue: 159,
    valueMoney: 125,
    specialAbilities: "Ranged attack",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Gog.gif`,
    town: "inferno",
  },
  {
    id: "46",
    name: "Magog",
    level: "2+",
    attack: 7,
    defense: 4,
    damage: "2-4",
    health: 13,
    speed: 6,
    size: 1,
    shots: 24,
    growth: "8",
    aiValue: 240,
    valueMoney: 175,
    specialAbilities: "Ranged attack, Fireball Attack",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Magog.gif`,
    town: "inferno",
  },
  {
    id: "47",
    name: "Hell Hound",
    level: "3",
    attack: 10,
    defense: 6,
    damage: "2-7",
    health: 25,
    speed: 2,
    size: 2,
    shots: 0,
    growth: "5 (+3)",
    aiValue: 357,
    valueMoney: 200,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Hell_Hound.gif`,
    town: "inferno",
  },
  {
    id: "48",
    name: "Cerberus",
    level: "3+",
    attack: 10,
    defense: 8,
    damage: "2-7",
    health: 25,
    speed: 8,
    size: 2,
    shots: 0,
    growth: "5 (+3)",
    aiValue: 392,
    valueMoney: 250,
    specialAbilities: "3-headed attack, No enemy retaliation",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Cerberus.gif`,
    town: "inferno",
  },
  {
    id: "49",
    name: "Demon",
    level: "4",
    attack: 10,
    defense: 10,
    damage: "7-9",
    health: 35,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "4",
    aiValue: 445,
    valueMoney: 250,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Demon.gif`,
    town: "inferno",
  },
  {
    id: "50",
    name: "Horned Demon",
    level: "4+",
    attack: 10,
    defense: 10,
    damage: "7-9",
    health: 40,
    speed: 6,
    size: 1,
    shots: 0,
    growth: "4",
    aiValue: 480,
    valueMoney: 270,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Horned_Demon.gif`,
    town: "inferno",
  },
  {
    id: "51",
    name: "Pit Fiend",
    level: "5",
    attack: 13,
    defense: 13,
    damage: "13-17",
    health: 45,
    speed: 6,
    size: 1,
    shots: 0,
    growth: "3",
    aiValue: 765,
    valueMoney: 500,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Pit_Fiend.gif`,
    town: "inferno",
  },
  {
    id: "52",
    name: "Pit Lord",
    level: "5+",
    attack: 13,
    defense: 13,
    damage: "13-17",
    health: 45,
    speed: 7,
    size: 1,
    shots: 0,
    growth: "3",
    aiValue: 1224,
    valueMoney: 700,
    specialAbilities: "Summon demons",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Pit_Lord.gif`,
    town: "inferno",
  },
  {
    id: "53",
    name: "Efreet",
    level: "6",
    attack: 16,
    defense: 12,
    damage: "16-24",
    health: 90,
    speed: 9,
    size: 1,
    shots: 0,
    growth: "2",
    aiValue: 1670,
    valueMoney: 900,
    specialAbilities: "Immune to fire (Magic Arrow included), " +
      "Hates genies",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Efreet.gif`,
    town: "inferno",
  },
  {
    id: "54",
    name: "Efreet Sultan",
    level: "6+",
    attack: 16,
    defense: 14,
    damage: "16-24",
    health: 90,
    speed: 13,
    size: 1,
    shots: 0,
    growth: "2",
    aiValue: 1848,
    valueMoney: 1100,
    specialAbilities: "Immune to fire (Magic Arrow included), " +
      "Hates genies, Fire Shield",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Efreet_Sultan.gif`,
    town: "inferno",
  },
  {
    id: "55",
    name: "Devil",
    level: "7",
    attack: 19,
    defense: 21,
    damage: "30-40",
    health: 160,
    speed: 11,
    size: 1,
    shots: 0,
    growth: "1",
    aiValue: 5101,
    valueMoney: 2700,
    specialAbilities: "-1 to enemy luck + no enemy retaliation " +
      "+ Hates angels",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Devil.gif`,
    town: "inferno",
  },
  {
    id: "56",
    name: "Arch Devil",
    level: "7+",
    attack: 26,
    defense: 28,
    damage: "30-40",
    health: 200,
    speed: 17,
    size: 1,
    shots: 0,
    growth: "1",
    aiValue: 7115,
    valueMoney: 4500,
    specialAbilities: "-1 (-2 in Horn of the Abyss ) to enemy luck " +
      "+ no enemy retaliation + Hates angels",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/inferno/Arch_Devil.gif`,
    town: "inferno",
  },
];
