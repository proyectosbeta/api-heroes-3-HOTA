const towns: any = {
    "castle": true,
    "rampart": true,
    "tower": true,
    "inferno": true,
    "necropolis": true,
    "dungeon": true,
    "stronghold": true,
    "fortress": true,
    "conflux": true,
    "cove": true,
};

const getTown = (town: string) => towns[town] || false;

const isValidTown = (town: string) => {
    if(getTown(town)){
        return true;
    }
    return false;
};

export { isValidTown };