const magics: any = {
    "fire": true,
    "water": true,
    "air": true,
    "earth": true,
};

const getMagic = (magic: string) => magics[magic] || false;

const isValidMagic = (magic: string) => {
    if(getMagic(magic)){
        return true;
    }
    return false;
};

export { isValidMagic };