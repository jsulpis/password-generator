import {LOWERCASES, NUMBERS, SPECIAL_CHARACTERS, UPPERCASES} from "./characters";
import {PasswordStrength} from "./models/PasswordStrength";

export interface PasswordStrengthAnalysis {
  value: number;
  strength: PasswordStrength;
}

export class PasswordStrengthCalculator {

  private strengthValue = 0;

  /**
   * Calculate the strength of a password using basic rules.
   * @param password
   */
  calculateStrength(password: string): PasswordStrengthAnalysis {
    this.strengthValue = password.length ** 2;

    this.calculateScore(password, UPPERCASES);
    this.calculateScore(password, LOWERCASES);
    this.calculateScore(password, NUMBERS);
    this.calculateScore(password, SPECIAL_CHARACTERS);

    const passwordStrength = this.findStrengthFromValue(this.strengthValue);
    return {
      value: this.strengthValue,
      strength: passwordStrength
    }
  }

  private calculateScore(password: string, characterSet: string) {
    const length = password.length;
    const numberOfCharactersMatchingSet = (password.match(`[${characterSet}]`) || []).length;
    this.strengthValue += numberOfCharactersMatchingSet * 2;

    // malus only this type of characters or no character of given type
    if (numberOfCharactersMatchingSet === length || numberOfCharactersMatchingSet === 0) {
      this.strengthValue -= length;
    }
  }

  private findStrengthFromValue(strengthValue: number): PasswordStrength {
    return Object.values(PasswordStrength)
      .filter(strengthTreshold => strengthValue >= strengthTreshold)
      .pop();
  }
}
