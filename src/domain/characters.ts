import { CharacterSet } from "./models/CharacterSet";

export const UPPERCASES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const LOWERCASES = UPPERCASES.toLowerCase();
export const NUMBERS = "0123456789";
export const SPECIAL_CHARACTERS = "@%+/'!#$^?:.(){}~&";

export const ALL_CHARACTERS: CharacterSet = {
  uppercases: UPPERCASES,
  lowercases: LOWERCASES,
  numbers: NUMBERS,
  specialCharacters: SPECIAL_CHARACTERS
};
