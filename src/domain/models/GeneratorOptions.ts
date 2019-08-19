import { OptionName } from "./OptionName";

export type GeneratorOptions = Partial<
  { [key in keyof typeof OptionName]: boolean }
>;
