import { Spell } from "../../types/spell.ts";
import { APP_DOMAIN } from '../../config/index.ts';

export const waterSpell: Array<Spell> = [
  {
    id: "17",
    name: "Cure",
    level: 1,
    effect: "Removes all negative spell effects from target " +
      "(or all) allied troop and heals it for (10/20/30 + " +
      "(power x 5)) health points",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Cure.png`,
  },
  {
    id: "18",
    name: "Dispel",
    level: 1,
    effect: "Water Magic 	Removes all spell effects from " +
      "target allied, enemy or all creatures and the battlefield",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Dispel.png`,
  },
  {
    id: "19",
    name: "Bless",
    level: 1,
    effect: "Target (or all) allied creature(s) inflict maximum " +
      "damage (or maximum +1) when they attack",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Bless.png`,
  },
  {
    id: "20",
    name: "Protection from Water",
    level: 1,
    effect: "Reduces damage taken from water spells. Basic: Single " + 
      "ally. Expert: All allies. Effect increased from 30%-30%-50%-50% " +
      "to 50%-50%-75%-75%. Horn of the Abyss",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Protection_from_Water.png`,
  },
  {
    id: "21",
    name: "Summon Boat",
    level: 1,
    effect: "Summons unoccupied boat to nearby body of water",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Summon_Boat.png`,
  },
  {
    id: "22",
    name: "Ice Bolt",
    level: 2,
    effect: "Water Magic 	Inflicts magic damage on a single enemy",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Ice_Bolt.png`,
  },
  {
    id: "23",
    name: "Remove Obstacle",
    level: 2,
    effect: "Removes obstacles from the battlefield. Basic: Only " +
      "trees, rocks and other natural obstacles may be removed. " + 
      "Advanced: May also remove fire walls",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Remove_Obstacle.png`,
  },
  {
    id: "24",
    name: "Scuttle Boat",
    level: 2,
    effect: "Destroys nearby unoccupied boat",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Scuttle_Boat.png`,
  },
  {
    id: "25",
    name: "Weakness",
    level: 2,
    effect: "Reduces attack rating. Basic: Single enemy. " +
      "Expert: All enemies",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Weakness.png`,
  },
  {
    id: "26",
    name: "Forgetfulness",
    level: 3,
    effect: "Prevents use of ranged attacks. Basic: Single " +
      "enemy. Expert: All enemies",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Forgetfulness.png`,
  },
  {
    id: "27",
    name: "Frost Ring",
    level: 3,
    effect: "Inflicts magic damage on all creatures in area",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Frost_Ring.png`,
  },
  {
    id: "28",
    name: "Mirth",
    level: 3,
    effect: " 	Increases morale. Basic: Single ally. " +
      "Expert: All allies",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Mirth.png`,
  },
  {
    id: "29",
    name: "Teleport",
    level: 3,
    effect: "Teleports ally to location on the battlefield. " +
      "Expert: May teleport creature over castle walls",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Teleport.png`,
  },
  {
    id: "30",
    name: "Clone",
    level: 4,
    effect: "Creates clone of allied creature",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Clone.png`,
  },
  {
    id: "31",
    name: "Prayer",
    level: 4,
    effect: "Increases attack rating, defense rating and speed. " +
      "Basic: Single ally. Expert: All allies",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Prayer.png`,
  },
  {
    id: "32",
    name: "Water Walk",
    level: 4,
    effect: "Allows movement to visible land across bodies of water",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Water_Walk.png`,
  },
  {
    id: "33",
    name: "Summon Water Elemental",
    level: 5,
    effect: "Summons allied Water Elementals for the duration of combat",
    imageUrl: `${APP_DOMAIN}assets/images/spell/water/Summon_Water_Elemental.png`,
  },
];