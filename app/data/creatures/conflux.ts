import { Creature } from "../../types/creature.ts";

export const confluxCreatures: Array<Creature> = [
    {
      id: "110",
      name: "Pixie",
      level: "1",
      attack: 2,
      defense: 2,
      damage: "1-2",
      health: 3,
      speed: 7,
      size: 1,
      shots: 0,
      growth: "20 (+10)",
      aiValue: 55,
      valueMoney: 25,
      specialAbilities: "",
    },
    {
      id: "111",
      name: "Sprite",
      level: "1+",
      attack: 2,
      defense: 2,
      damage: "1-3",
      health: 3,
      speed: 9,
      size: 1,
      shots: 0,
      growth: "20 (+10)",
      aiValue: 95,
      valueMoney: 30,
      specialAbilities: "No enemy retaliation",
    },
    {
      id: "112",
      name: "Air Elemental",
      level: "2",
      attack: 9,
      defense: 9,
      damage: "2-8",
      health: 25,
      speed: 7,
      size: 1,
      shots: 0,
      growth: "6",
      aiValue: 356,
      valueMoney: 250,
      specialAbilities: "Elemental, Immune to Meteor Shower, Vulnerable to Lightning Bolt, Chain Lightning and Armageddon",
    },
    {
      id: "113",
      name: "Storm Elemental",
      level: "2+",
      attack: 9,
      defense: 9,
      damage: "2-8",
      health: 25,
      speed: 8,
      size: 1,
      shots: 24,
      growth: "6",
      aiValue: 486,
      valueMoney: 275,
      specialAbilities: "Elemental, Immune to Meteor Shower, Vulnerable to Lightning Bolt, Chain Lightning and Armageddon, Spellcaster (Protection from Air), Ranged attack",
    },
    {
      id: "114",
      name: "Water Elemental",
      level: "3",
      attack: 8,
      defense: 10,
      damage: "3-7",
      health: 30,
      speed: 5,
      size: 2,
      shots: 0,
      growth: "6",
      aiValue: 325,
      valueMoney: 300,
      specialAbilities: "Elemental, Immune to to Ice Bolt and Frost Ring, Vulnerable to Armageddon, Fireball, Inferno",
    },
    {
      id: "115",
      name: "Ice Elemental",
      level: "3+",
      attack: 8,
      defense: 10,
      damage: "3-7",
      health: 30,
      speed: 6,
      size: 2,
      shots: 24,
      growth: "6",
      aiValue: 380,
      valueMoney: 375,
      specialAbilities: "Ranged attack, Elemental, Immune to to Ice Bolt and Frost Ring, Vulnerable to Armageddon, Fireball, Inferno",
    },
    {
      id: "116",
      name: "Fire Elemental",
      level: "4",
      attack: 10,
      defense: 8,
      damage: "4-6",
      health: 35,
      speed: 6,
      size: 1,
      shots: 0,
      growth: "5",
      aiValue: 345,
      valueMoney: 350,
      specialAbilities: "Elemental, Immune to fire (Magic Arrow included), Vulnerable to Ice Bolt and Frost Ring",
    },
    {
      id: "117",
      name: "Energy Elemental",
      level: "4+",
      attack: 12,
      defense: 8,
      damage: "4-6",
      health: 35,
      speed: 8,
      size: 1,
      shots: 0,
      growth: "5",
      aiValue: 470,
      valueMoney: 400,
      specialAbilities: "Elemental, Immune to fire (Magic Arrow included), Vulnerable to Ice Bolt and Frost Ring, Spellcaster (Protection from Fire)",
    },
    {
      id: "118",
      name: "Earth Elemental",
      level: "5",
      attack: 10,
      defense: 10,
      damage: "4-8",
      health: 40,
      speed: 4,
      size: 1,
      shots: 0,
      growth: "4",
      aiValue: 330,
      valueMoney: 400,
      specialAbilities: "Elemental, Immune to Armageddon - Lightning Bolt and Chain Lightning, Vulnerable to Meteor Shower",
    },
    {
      id: "119",
      name: "Magma Elemental",
      level: "5+",
      attack: 11,
      defense: 11,
      damage: "6-10",
      health: 40,
      speed: 6,
      size: 1,
      shots: 0,
      growth: "4",
      aiValue: 490,
      valueMoney: 500,
      specialAbilities: "Elemental, Immune to Armageddon - Lightning Bolt and Chain Lightning, Vulnerable to Meteor Shower, Spellcaster (Protection from Earth)",
    },
    {
      id: "120",
      name: "Psychic Elemental",
      level: "6",
      attack: 15,
      defense: 13,
      damage: "10-20",
      health: 75,
      speed: 7,
      size: 1,
      shots: 0,
      growth: "2",
      aiValue: 1669,
      valueMoney: 950,
      specialAbilities: "Elemental, No enemy retaliation, Attacks all adjacent hexes",
    },
    {
      id: "121",
      name: "Magic Elemental",
      level: "6+",
      attack: 15,
      defense: 13,
      damage: "15-25",
      health: 80,
      speed: 9,
      size: 1,
      shots: 0,
      growth: "2",
      aiValue: 2012,
      valueMoney: 1200,
      specialAbilities: "Elemental, No enemy retaliation, Attacks all adjacent hexes, Immune to all magic",
    },
    {
      id: "122",
      name: "Firebird",
      level: "7",
      attack: 18,
      defense: 18,
      damage: "30-40",
      health: 150,
      speed: 15,
      size: 2,
      shots: 0,
      growth: "1",
      aiValue: 4336,
      valueMoney: 2000,
      specialAbilities: "Immune to fire (Magic Arrow included), (50% fire resistance), Breath attack",
    },
    {
      id: "123",
      name: "Phoenix",
      level: "7+",
      attack: 21,
      defense: 18,
      damage: "30-40",
      health: 200,
      speed: 21,
      size: 2,
      shots: 0,
      growth: "1",
      aiValue: 6721,
      valueMoney: 3000,
      specialAbilities: "Immune to fire (Magic Arrow included), Breath attack, Rebirth",
    },
];