import {CharacterSet} from "./models/CharacterSet";

const UPPERCASES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASES = UPPERCASES.toLowerCase();
const NUMBERS = "0123456789";
const SPECIAL_CHARACTERS = "@%+/'!#$^?:.(){}~&";

export const ALL_CHARACTERS: CharacterSet = {
    uppercases: UPPERCASES,
    lowercases: LOWERCASES,
    numbers: NUMBERS,
    specialCharacters: SPECIAL_CHARACTERS
};