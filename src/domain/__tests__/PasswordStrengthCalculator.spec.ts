import { PasswordStrengthCalculator } from "../PasswordStrengthCalculator";
import { PasswordStrength } from "../models/PasswordStrength";

describe("PasswordStrengthCalculator", () => {
  const calculator = new PasswordStrengthCalculator();

  it("should calculate a consistent strength of password", () => {
    // Very weak passwords: very short and 2-3 types of characters
    assertPasswordIsVeryWeak("oNxL");
    assertPasswordIsVeryWeak("6zQL");

    // Weak passwords: very short and 4 types or short and 2-3 types
    assertPasswordIsWeak("(8rK");
    assertPasswordIsWeak("6pq4gq");
    assertPasswordIsWeak("2zKQVp");

    // Good Passwords: short and 4 types or medium and 2 types
    assertPasswordIsGood("(5uC21");
    assertPasswordIsGood("4oisg657");

    // Strong passwords: medium and 3-4 types or long and 2 types
    assertPasswordIsStrong("8nR7oGIp");
    assertPasswordIsStrong("^5rA$Yr9");
    assertPasswordIsStrong("9kwwq1ltms");

    // Very strong passwords: long and 3-4 types
    assertPasswordIsVeryStrong("9aXmHZpj1z");
    assertPasswordIsVeryStrong(")7eUmRz{)Y");
  });

  function assertPasswordStrengthIsBetweenAnd(
    password: string,
    min: number,
    max: number
  ) {
    const passwordStrength = calculator.calculateStrength(password).value;
    expect(passwordStrength).toBeGreaterThanOrEqual(min);
    expect(passwordStrength).toBeLessThan(max);
  }

  function assertPasswordIsVeryWeak(password: string) {
    expect(calculator.calculateStrength(password).strength).toBe(
      PasswordStrength.VERY_WEAK
    );
    assertPasswordStrengthIsBetweenAnd(
      password,
      PasswordStrength.VERY_WEAK,
      PasswordStrength.WEAK
    );
  }

  function assertPasswordIsWeak(password: string) {
    expect(calculator.calculateStrength(password).strength).toBe(
      PasswordStrength.WEAK
    );
    assertPasswordStrengthIsBetweenAnd(
      password,
      PasswordStrength.WEAK,
      PasswordStrength.GOOD
    );
  }

  function assertPasswordIsGood(password: string) {
    expect(calculator.calculateStrength(password).strength).toBe(
      PasswordStrength.GOOD
    );
    assertPasswordStrengthIsBetweenAnd(
      password,
      PasswordStrength.GOOD,
      PasswordStrength.STRONG
    );
  }

  function assertPasswordIsStrong(password: string) {
    expect(calculator.calculateStrength(password).strength).toBe(
      PasswordStrength.STRONG
    );
    assertPasswordStrengthIsBetweenAnd(
      password,
      PasswordStrength.STRONG,
      PasswordStrength.VERY_STRONG
    );
  }

  function assertPasswordIsVeryStrong(password: string) {
    expect(calculator.calculateStrength(password).strength).toBe(
      PasswordStrength.VERY_STRONG
    );
    expect(calculator.calculateStrength(password).value).toBeGreaterThanOrEqual(
      PasswordStrength.VERY_STRONG
    );
  }
});
