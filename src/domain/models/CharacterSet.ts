import { OptionName } from "./OptionName";

export type CharacterSet = { [key in keyof typeof OptionName]: string };
