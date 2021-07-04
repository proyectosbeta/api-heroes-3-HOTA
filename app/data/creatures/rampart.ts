import { Creature } from "../../types/creature.ts";
import { APP_DOMAIN } from "../../config/index.ts";

export const rampartCreatures: Array<Creature> = [
  {
    id: "15",
    name: "Centaur",
    level: "1",
    attack: 5,
    defense: 3,
    damage: "2-3",
    health: 8,
    speed: 6,
    size: 2,
    shots: 0,
    growth: "14",
    aiValue: 100,
    valueMoney: 70,
    specialAbilities: "",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Centaur.gif`,
    factory: "rampart",
  },
  {
    id: "16",
    name: "Centaur Captain",
    level: "1+",
    attack: 6,
    defense: 3,
    damage: "2-3",
    health: 10,
    speed: 8,
    size: 2,
    shots: 0,
    growth: "14",
    aiValue: 138,
    valueMoney: 90,
    specialAbilities: "",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/rampart/Centaur_Captain.gif`,
    factory: "rampart",
  },
  {
    id: "17",
    name: "Dwarf",
    level: "2",
    attack: 6,
    defense: 7,
    damage: "2-4",
    health: 20,
    speed: 3,
    size: 1,
    shots: 0,
    growth: "8 (+4)",
    aiValue: 138,
    valueMoney: 120,
    specialAbilities: "Magic resistance 20%",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Dwarf.gif`,
    factory: "rampart",
  },
  {
    id: "18",
    name: "Battle Dwarf",
    level: "2+",
    attack: 7,
    defense: 7,
    damage: "2-4",
    health: 20,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "8 (+4)",
    aiValue: 209,
    valueMoney: 150,
    specialAbilities: "Magic resistance 40%",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Battle_Dwarf.gif`,
    factory: "rampart",
  },
  {
    id: "19",
    name: "Wood Elf",
    level: "3",
    attack: 9,
    defense: 5,
    damage: "3-5",
    health: 15,
    speed: 6,
    size: 1,
    shots: 24,
    growth: "7",
    aiValue: 234,
    valueMoney: 200,
    specialAbilities: "Ranged attack",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Wood_Elf.gif`,
    factory: "rampart",
  },
  {
    id: "20",
    name: "Grand Elf",
    level: "3+",
    attack: 9,
    defense: 5,
    damage: "3-5 (x2)",
    health: 15,
    speed: 7,
    size: 1,
    shots: 24,
    growth: "7",
    aiValue: 331,
    valueMoney: 225,
    specialAbilities: "Ranged attack, Double attack",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Grand_Elf.gif`,
    factory: "rampart",
  },
  {
    id: "21",
    name: "Pegasus",
    level: "4",
    attack: 9,
    defense: 8,
    damage: "5-9",
    health: 30,
    speed: 8,
    size: 2,
    shots: 0,
    growth: "5",
    aiValue: 518,
    valueMoney: 250,
    specialAbilities: "Magic damper",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Pegasus.gif`,
    factory: "rampart",
  },
  {
    id: "22",
    name: "Silver Pegasus",
    level: "4+",
    attack: 9,
    defense: 10,
    damage: "5-9",
    health: 30,
    speed: 12,
    size: 2,
    shots: 0,
    growth: "5",
    aiValue: 532,
    valueMoney: 275,
    specialAbilities: "Magic damper",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Silver_Pegasus.gif`,
    factory: "rampart",
  },
  {
    id: "23",
    name: "Dendroid Guard",
    level: "5",
    attack: 9,
    defense: 12,
    damage: "10-14",
    health: 55,
    speed: 3,
    size: 1,
    shots: 0,
    growth: "3 (+2)",
    aiValue: 517,
    valueMoney: 350,
    specialAbilities: "Binding",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Dendroid_Guard.gif`,
    factory: "rampart",
  },
  {
    id: "24",
    name: "Dendroid Soldier",
    level: "5+",
    attack: 9,
    defense: 12,
    damage: "10-14",
    health: 65,
    speed: 4,
    size: 1,
    shots: 0,
    growth: "3 (+2)",
    aiValue: 803,
    valueMoney: 425,
    specialAbilities: "Binding",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/rampart/Dendroid_Soldier.gif`,
    factory: "rampart",
  },
  {
    id: "25",
    name: "Unicorn",
    level: "6",
    attack: 15,
    defense: 14,
    damage: "18-22",
    health: 90,
    speed: 7,
    size: 2,
    shots: 0,
    growth: "2",
    aiValue: 1806,
    valueMoney: 850,
    specialAbilities: "Blinding 20%, Aura of magic resistance 20%",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Unicorn.gif`,
    factory: "rampart",
  },
  {
    id: "26",
    name: "War Unicorn",
    level: "6+",
    attack: 15,
    defense: 14,
    damage: "18-22",
    health: 110,
    speed: 9,
    size: 2,
    shots: 0,
    growth: "2",
    aiValue: 2030,
    valueMoney: 950,
    specialAbilities: "Blinding 20%, Aura of magic resistance 20%",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/War_Unicorn.gif`,
    factory: "rampart",
  },
  {
    id: "27",
    name: "Green Dragon",
    level: "7",
    attack: 18,
    defense: 18,
    damage: "40-50",
    health: 180,
    speed: 10,
    size: 2,
    shots: 0,
    growth: "1",
    aiValue: 4872,
    valueMoney: 2400,
    specialAbilities: "Breath attack, Immune to level 1–3 spells, " +
      "Counts as dragon",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Green_Dragon.gif`,
    factory: "rampart",
  },
  {
    id: "28",
    name: "Gold Dragon",
    level: "7+",
    attack: 27,
    defense: 27,
    damage: "40-50",
    health: 250,
    speed: 16,
    size: 2,
    shots: 0,
    growth: "1",
    aiValue: 8613,
    valueMoney: 4000,
    specialAbilities: "Breath attack, Immune to level 1–4 spells, " +
      "Counts as dragon",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/rampart/Gold_Dragon.gif`,
    factory: "rampart",
  },
];
