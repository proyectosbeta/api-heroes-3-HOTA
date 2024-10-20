import { Town } from "../types/Town.ts";

const towns: { [key in Town] } = {
  [Town.Castle]: true,
  [Town.Rampart]: true,
  [Town.Tower]: true,
  [Town.Inferno]: true,
  [Town.Necropolis]: true,
  [Town.Dungeon]: true,
  [Town.Stronghold]: true,
  [Town.Fortress]: true,
  [Town.Conflux]: true,
  [Town.Cove]: true,
};

const getTown = (town: Town) => towns[town] || false;

const isValidTown = (town: Town) => {
  return getTown(town);
};

export { isValidTown };
