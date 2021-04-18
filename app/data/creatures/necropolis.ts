import { Creature } from "../../types/creature.ts";

export const necropolisCreatures: Array<Creature> = [
    {
      id: "55",
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
    },
    {
      id: "56",
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
    },
    {
      id: "57",
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
    },
    {
      id: "58",
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
    },
    {
      id: "59",
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
    },
    {
      id: "60",
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
    },
    {
      id: "61",
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
    },
    {
      id: "62",
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
    },
    {
      id: "63",
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
      valueMoney: 5500,
      specialAbilities: "Undead, Ranged attack, Death cloud",
    },
    {
      id: "64",
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
    },
    {
      id: "65",
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
    },
    {
      id: "66",
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
    },
    {
      id: "67",
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
    },
    {
      id: "68",
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
      specialAbilities: "Undead, Decreases enemy morale by -1, Dragon, Aging 20%",
    },
];