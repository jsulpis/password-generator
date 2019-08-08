import {Criteria} from "./Criteria";

export type CharacterSet = { [key in keyof typeof Criteria]: string }