import { Spell } from "../../types/spell.ts";
import { APP_DOMAIN } from '../../config/index.ts';

export const fireSpell: Array<Spell> = [
  {
      id: "1",
      name: "Bloodlust",
      level: 1,
      effect: "Increases the attack skill of target (or all) " +
        "allied creature for melee attacks",
      imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Bloodlust.png`,
  },
  {
    id: "2",
    name: "Curse",
    level: 1,
    effect: "The targeted (or all) enemy unit(s) deliver" +
      "minimum or reduced damage when attacking",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Curse.png`,
  },
  {
    id: "3",
    name: "Protection from Fire",
    level: 1,
    effect: "Reduces damage taken from fire spells." +
      "Basic: Single ally. Expert: All allies. Effect " +
      "increased from 30%-30%-50%-50% to 50%-50%-75%-75%. " +
      "Horn of the Abyss",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Protection_from_Fire.png`,
  },
  {
    id: "4",
    name: "Blind",
    level: 2,
    effect: "Prevents any action from being taken by " +
      "target enemy creature. ",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Blind.png`,
  },
  {
    id: "5",
    name: "Fire Wall",
    level: 2,
    effect: "Creates wall of fire at target location " +
      "that inflicts magic damage on creatures that" + 
      "pass through",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Fire_Wall.png`,
  },
  {
    id: "6",
    name: "Fireball",
    level: 3,
    effect: "Inflicts magic damage on all creatures in area",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Fireball.png`,
  },
  {
    id: "7",
    name: "Land Mine",
    level: 3,
    effect: "locations on the battlefield. Only visible " +
      "to caster and creatures native to the terrain",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Land_Mine.png`,
  },
  {
    id: "8",
    name: "Misfortune",
    level: 3,
    effect: "Reduces luck. Basic: Single enemy. Expert: All enemies",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Misfortune.png`,
  },
  {
    id: "9",
    name: "Armageddon",
    level: 4,
    effect: "Inflicts magic damage on all creatures on the battlefield. " +
      "Damage reduced from 50*(spell power) + 30/30/60/120 to 40*(spell power) " + 
      "+ 30/30/60/120. Horn of the Abyss",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Armageddon.png`,
  },
  {
    id: "10",
    name: "Berserk",
    level: 4,
    effect: "Forces enemy to attack closest creature",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Berserk.png`,
  },
  {
    id: "11",
    name: "Fire Shield",
    level: 4,
    effect: "Inflicts magic damage proportional to " +
      "damage taken from hand-to-hand attacks",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Fire_Shield.png`,
  },
  {
    id: "12",
    name: "Frenzy",
    level: 4,
    effect: "Increases attack rating and sets defense rating to 0",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Frenzy.png`,
  },
  {
    id: "13",
    name: "Inferno",
    level: 4,
    effect: "Inflicts magic damage on all creatures in area",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Inferno.png`,
  },
  {
    id: "14",
    name: "Slayer",
    level: 4,
    effect: " 	Increases attack rating of a single ally against " + 
      "Dragons, Behemoths and Hydras. Advanced: Effect applies" + 
      "to Angels and Devils. Expert: Effect applies to Titans",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Slayer.png`,
  },
  {
    id: "15",
    name: "Sacrifice",
    level: 5,
    effect: "Destroys and removes living, unkilled allies to bring" +
      "previously living, killed allies back to life",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Sacrifice.png`,
  },
  {
    id: "16",
    name: "Summon Fire Elemental",
    level: 5,
    effect: "Summons allied Fire Elementals for the duration of combat",
    imageUrl: `${APP_DOMAIN}assets/images/spell/fire/Summon_Fire_Elemental.png`,
  },
];