import { Creature } from "../../types/creature.ts";
import { APP_DOMAIN } from "../../config/index.ts";

export const necropolisCreatures: Array<Creature> = [
  {
    id: "57",
    name: "Skeleton",
    level: "1",
    attack: 5,
    defense: 4,
    damage: "1-3",
    health: 6,
    speed: 4,
    size: 1,
    shots: 0,
    growth: "12 (+6)",
    aiValue: 60,
    valueMoney: 60,
    specialAbilities: "Undead",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/necropolis/Skeleton.gif`,
    town: "necropolis",
  },
  {
    id: "58",
    name: "Skeleton Warrior",
    level: "1+",
    attack: 6,
    defense: 6,
    damage: "1-3",
    health: 6,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "12 (+6)",
    aiValue: 85,
    valueMoney: 70,
    specialAbilities: "Undead",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/necropolis/Skeleton_Warrior.gif`,
    town: "necropolis",
  },
  {
    id: "59",
    name: "Walking Dead",
    level: "2",
    attack: 5,
    defense: 5,
    damage: "2-3",
    health: 15,
    speed: 3,
    size: 1,
    shots: 0,
    growth: "8",
    aiValue: 98,
    valueMoney: 100,
    specialAbilities: "Undead",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/necropolis/Walking_Dead.gif`,
    town: "necropolis",
  },
  {
    id: "60",
    name: "Zombie",
    level: "2+",
    attack: 5,
    defense: 5,
    damage: "2-3",
    health: 20,
    speed: 4,
    size: 1,
    shots: 0,
    growth: "8",
    aiValue: 128,
    valueMoney: 125,
    specialAbilities: "Undead, Disease",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/necropolis/Zombie.gif`,
    town: "necropolis",
  },
  {
    id: "61",
    name: "Wight",
    level: "3",
    attack: 7,
    defense: 7,
    damage: "3-5",
    health: 18,
    speed: 5,
    size: 1,
    shots: 0,
    growth: "7",
    aiValue: 252,
    valueMoney: 200,
    specialAbilities: "Undead, Regeneration",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/necropolis/Wight.gif`,
    town: "necropolis",
  },
  {
    id: "62",
    name: "Wraith",
    level: "3+",
    attack: 7,
    defense: 7,
    damage: "3-5",
    health: 18,
    speed: 7,
    size: 1,
    shots: 0,
    growth: "7",
    aiValue: 315,
    valueMoney: 230,
    specialAbilities: "Undead, Regeneration, Mana drain",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/necropolis/Wraith.gif`,
    town: "necropolis",
  },
  {
    id: "63",
    name: "Vampire",
    level: "4",
    attack: 10,
    defense: 9,
    damage: "5-8",
    health: 30,
    speed: 6,
    size: 1,
    shots: 0,
    growth: "4",
    aiValue: 555,
    valueMoney: 360,
    specialAbilities: "Undead, No enemy retaliation",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/necropolis/Vampire.gif`,
    town: "necropolis",
  },
  {
    id: "64",
    name: "Vampire Lord",
    level: "4+",
    attack: 10,
    defense: 10,
    damage: "5-8",
    health: 40,
    speed: 9,
    size: 1,
    shots: 0,
    growth: "4",
    aiValue: 783,
    valueMoney: 500,
    specialAbilities: "Undead, No enemy retaliation, Life drain",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/necropolis/Vampire_Lord.gif`,
    town: "necropolis",
  },
  {
    id: "65",
    name: "Lich",
    level: "5",
    attack: 13,
    defense: 10,
    damage: "11-13",
    health: 30,
    speed: 6,
    size: 1,
    shots: 12,
    growth: "3",
    aiValue: 848,
    valueMoney: 550,
    specialAbilities: "Undead, Ranged attack, Death cloud",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/necropolis/Lich.gif`,
    town: "necropolis",
  },
  {
    id: "66",
    name: "Power Lich",
    level: "5+",
    attack: 13,
    defense: 10,
    damage: "11-15",
    health: 40,
    speed: 7,
    size: 1,
    shots: 24,
    growth: "3",
    aiValue: 1079,
    valueMoney: 600,
    specialAbilities: "Undead, Ranged attack, Death cloud",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/necropolis/Power_Lich.gif`,
    town: "necropolis",
  },
  {
    id: "67",
    name: "Black Knight",
    level: "6",
    attack: 16,
    defense: 16,
    damage: "15-30",
    health: 120,
    speed: 7,
    size: 2,
    shots: 0,
    growth: "2",
    aiValue: 2087,
    valueMoney: 1200,
    specialAbilities: "Undead, Curses enemies",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/necropolis/Black_Knight.gif`,
    town: "necropolis",
  },
  {
    id: "68",
    name: "Dread Knight",
    level: "6+",
    attack: 18,
    defense: 18,
    damage: "15-30",
    health: 120,
    speed: 9,
    size: 2,
    shots: 0,
    growth: "2",
    aiValue: 2382,
    valueMoney: 1500,
    specialAbilities: "Undead, Curses enemies, Death blow attack",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/necropolis/Dread_Knight.gif`,
    town: "necropolis",
  },
  {
    id: "69",
    name: "Bone Dragon",
    level: "7",
    attack: 17,
    defense: 15,
    damage: "25-50",
    health: 150,
    speed: 9,
    size: 2,
    shots: 0,
    growth: "1",
    aiValue: 3388,
    valueMoney: 1800,
    specialAbilities: "Undead, Decreases enemy morale by -1, Dragon",
    imageUrl: `${APP_DOMAIN}assets/images/creatures/necropolis/Bone_Dragon.gif`,
    town: "necropolis",
  },
  {
    id: "70",
    name: "Ghost Dragon",
    level: "7+",
    attack: 19,
    defense: 17,
    damage: "25-50",
    health: 200,
    speed: 14,
    size: 2,
    shots: 0,
    growth: "1",
    aiValue: 4696,
    valueMoney: 3000,
    specialAbilities: "Undead, Decreases enemy morale by -1, Dragon, " +
      "Aging 20%",
    imageUrl:
      `${APP_DOMAIN}assets/images/creatures/necropolis/Ghost_Dragon.gif`,
    town: "necropolis",
  },
];
