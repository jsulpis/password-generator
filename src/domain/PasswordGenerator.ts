import { GeneratorOptions } from "./models/GeneratorOptions";
import { ALL_CHARACTERS } from "./characters";
import { OptionName } from "./models/OptionName";

export default class PasswordGenerator {
  public readonly DEFAULT_OPTIONS: GeneratorOptions = {
    lowercases: true,
    uppercases: true
  };
  public readonly EMPTY_STRING = "";

  private password = this.EMPTY_STRING;

  /**
   * Generate a password that matches the given options and the given length
   * @param length
   * @param options
   */
  public generatePassword(length: number, options?: GeneratorOptions): string {
    options = options || this.DEFAULT_OPTIONS;
    this.password = this.EMPTY_STRING;

    this.generateRandomPasswordFromOptions(length, options);
    this.enforceAllCriterias(options);

    return this.password;
  }

  private generateRandomPasswordFromOptions(
    length: number,
    options: GeneratorOptions
  ) {
    let randomPassword = this.EMPTY_STRING;
    const CharacterSet = this.computeCharacterSet(options);

    for (let i = 0; i < length; i++) {
      randomPassword += this.pickRandomCharacterFromSet(CharacterSet);
    }
    this.password = randomPassword;
  }

  private computeCharacterSet(options: GeneratorOptions) {
    // Get the keys of options whose value are true and return their corresponding Character set from ALL_CharacterS
    return Object.keys(options)
      .map((key: any) => key as OptionName)
      .filter((key: OptionName) => options[key])
      .map((key: OptionName) => ALL_CHARACTERS[key])
      .join(this.EMPTY_STRING);
  }

  private pickRandomCharacterFromSet(CharacterSet: string) {
    return CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
  }

  private enforceAllCriterias(options: GeneratorOptions) {
    const criterias: OptionName[] = Object.keys(options)
      .map((key: any) => key as OptionName)
      .filter(key => options[key]);

    criterias.forEach((criteria: OptionName) => {
      const CharacterMatchingCriteria = this.pickRandomCharacterFromSet(
        ALL_CHARACTERS[criteria]
      );
      this.pushCharacterAtTheBeginningOfPassword(CharacterMatchingCriteria);
    });
  }

  private pushCharacterAtTheBeginningOfPassword(
    CharacterMatchingCriteria: string
  ) {
    const passwordLength = this.password.length;
    this.password =
      CharacterMatchingCriteria + this.password.slice(0, passwordLength - 1);
  }
}
