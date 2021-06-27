import { Spell } from "../../types/spell.ts";
import { APP_DOMAIN } from '../../config/index.ts';

export const airSpell: Array<Spell> = [
  {
    id: "34",
    name: "Haste",
    level: 1,
    effect: "Target (or all) allied troop's speed is " +
      "increased by 3 (or 5) hexes per turn",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Haste.png`,
  },
  {
    id: "35",
    name: "View Air",
    level: 1,
    effect: "Reveals location of all unclaimed artifacts",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/View_Air.png`,
  },
  {
    id: "36",
    name: "Disguise",
    level: 2,
    effect: "Modifies the army composition scouting report " +
      "visible to enemies",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Disguise.png`,
  },
  {
    id: "37",
    name: "Disrupting Ray",
    level: 2,
    effect: "Reduces defense rating of a single enemy. " +
      "May be used repeatedly on the same target",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Disrupting_Ray.png`,
  },
  {
    id: "38",
    name: "Fortune",
    level: 2,
    effect: "Increases luck. Basic: Single ally. Expert: All allies",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Fortune.png`,
  },
  {
    id: "39",
    name: "Lightning Bolt",
    level: 2,
    effect: "Inflicts magic damage on a single enemy",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Lightning_Bolt.png`,
  },
  {
    id: "40",
    name: "Precision",
    level: 2,
    effect: " 	Increases ranged attack rating. Basic: Single " +
      "ally. Expert: All allies",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Precision.png`,
  },
  {
    id: "41",
    name: "Protection from Air",
    level: 2,
    effect: "Reduces damage taken from air spells. Basic: " +
      "Single ally. Expert: All allies. Effect increased " +
      "from 30%-30%-50%-50% to 50%-50%-75%-75%. Horn of the Abyss",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Protection_from_Air.png`,
  },
  {
    id: "42",
    name: "Air Shield",
    level: 3,
    effect: "Reduces damage taken from ranged attacks",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Air_Shield.png`,
  },
  {
    id: "43",
    name: "Destroy Undead",
    level: 3,
    effect: "Inflicts magic damage on all undead creatures",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Destroy_Undead.png`,
  },
  {
    id: "44",
    name: "Hypnotize",
    level: 3,
    effect: "Allows control of actions taken by enemy creature",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Hypnotize.png`,
  },
  {
    id: "45",
    name: "Chain Lightning",
    level: 4,
    effect: "Inflicts magic damage on initial creature and " +
      "reduced damage on nearby creatures",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Chain_Lightning.png`,
  },
  {
    id: "46",
    name: "Counterstrike",
    level: 4,
    effect: " 	Allows extra retaliations per round. Basic: " +
      "Single ally. Expert: All allies",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Counterstrike.png`,
  },
  {
    id: "47",
    name: "Dimension Door",
    level: 5,
    effect: "Teleports hero to visible location",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Dimension_Door.png`,
  },
  {
    id: "48",
    name: "Fly",
    level: 5,
    effect: "Allows movement to visible land over " +
      "all map obstacles. Cannot fly through cave " +
      "walls in the underground",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Fly.png`,
  },
  {
    id: "49",
    name: "Magic Mirror",
    level: 5,
    effect: "Reflects hostile spells to a random enemy. Basic: " +
      "20% chance of occurrence. Advanced: 30% chance. Expert: " +
      "40% chance",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Magic_Mirror.png`,
  },
  {
    id: "50",
    name: "Summon Air Elemental",
    level: 5,
    effect: "Summons allied Air Elementals for the duration of combat",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Summon_Air_Elemental.png`,
  },
  {
    id: "51",
    name: "Titan's Lightning Bolt",
    level: 5,
    effect: "Inflicts 600 magic damage on a single enemy. " +
      "Requires Titan's Thunder",
    imageUrl: `${APP_DOMAIN}assets/images/spells/air/Titan's_Lightning_Bolt.png`,
  },
];