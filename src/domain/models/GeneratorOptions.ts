import {Criteria} from "./Criteria";

export type GeneratorOptions = Partial<{ [key in keyof typeof Criteria]: boolean }>