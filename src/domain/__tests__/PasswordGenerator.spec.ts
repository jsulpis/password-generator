import PasswordGenerator from "../PasswordGenerator";
import {GeneratorOptions} from "../models/GeneratorOptions";

describe("PasswordGenerator", () => {
    const PASSWORD_LENGTH = 12;

    it('should create without error', () => {
        expect(new PasswordGenerator()).toBeTruthy();
    });

    it("should generate a password of a given length", () => {
        expect(new PasswordGenerator().generatePassword(PASSWORD_LENGTH).length).toBe(PASSWORD_LENGTH);
    });

    it("should generate a password with uppercases", () => {
        // Given
        const options: GeneratorOptions = {uppercases: true};
        // When
        const password = new PasswordGenerator().generatePassword(PASSWORD_LENGTH, options);
        // Then
        expect(password.length).toBe(PASSWORD_LENGTH);
        const upperCaseRegex = new RegExp(`^[A-Z]{${PASSWORD_LENGTH}}$`);
        expect(upperCaseRegex.test(password)).toBeTruthy();
    });

    it("should generate a password with lowercasess", () => {
        // Given
        const options: GeneratorOptions = {lowercases: true};
        // When
        const password = new PasswordGenerator().generatePassword(PASSWORD_LENGTH, options);
        // Then
        expect(password.length).toBe(PASSWORD_LENGTH);
        const upperCaseRegex = new RegExp(`^[a-z]{${PASSWORD_LENGTH}}$`);
        expect(upperCaseRegex.test(password)).toBeTruthy();
    });

    it("should generate a password with both uppercases and lowercasess", () => {
        // Given
        const options: GeneratorOptions = {lowercases: true, uppercases: true};
        // When
        const password = new PasswordGenerator().generatePassword(2, options);
        // Then
        expect(password.length).toBe(2);
        const allLettersRegex = new RegExp(`^[a-zA-Z]{${2}}$`);
        const atLeastOneLowercaseRegex = new RegExp(`[a-z]+`);
        const atLeastOneUppercaseRegex = new RegExp(`[A-Z]+`);
        expect(allLettersRegex.test(password)).toBeTruthy();
        expect(atLeastOneLowercaseRegex.test(password)).toBeTruthy();
        expect(atLeastOneUppercaseRegex.test(password)).toBeTruthy();
    });

    it("should generate a password with numbers", () => {
        // Given
        const options: GeneratorOptions = {numbers: true};
        // When
        const password = new PasswordGenerator().generatePassword(PASSWORD_LENGTH, options);
        // Then
        expect(password.length).toBe(PASSWORD_LENGTH);
        const upperCaseRegex = new RegExp(`^[0-9]{${PASSWORD_LENGTH}}$`);
        expect(upperCaseRegex.test(password)).toBeTruthy();
    });

    it("should generate a password with uppercases, lowercases and numbers", () => {
        // Given
        const options: GeneratorOptions = {lowercases: true, uppercases: true, numbers: true};
        const passwordLength = 3;
        // When
        const password = new PasswordGenerator().generatePassword(passwordLength, options);
        // Then
        expect(password.length).toBe(passwordLength);
        const allGoodRegex = new RegExp(`^[a-zA-Z0-9]{${passwordLength}}$`);
        const atLeastOneLowercaseRegex = new RegExp(`[a-z]+`);
        const atLeastOneUppercaseRegex = new RegExp(`[A-Z]+`);
        const atLeastOneNumberRegex = new RegExp(`[0-9]+`);
        expect(allGoodRegex.test(password)).toBeTruthy();
        expect(atLeastOneLowercaseRegex.test(password)).toBeTruthy();
        expect(atLeastOneUppercaseRegex.test(password)).toBeTruthy();
        expect(atLeastOneNumberRegex.test(password)).toBeTruthy();
    });

    it("should generate a password with special characters", () => {
        // Given
        const options: GeneratorOptions = {specialCharacters: true};
        // When
        const password = new PasswordGenerator().generatePassword(PASSWORD_LENGTH, options);
        // Then
        expect(password.length).toBe(PASSWORD_LENGTH);
        const upperCaseRegex = new RegExp(`^[@%+/'!#$^?:.(){}~&]{${PASSWORD_LENGTH}}$`);
        expect(upperCaseRegex.test(password)).toBeTruthy();
    });

    it("should generate a password with all possible character types", () => {
        // Given
        const options: GeneratorOptions = {lowercases: true, uppercases: true, numbers: true, specialCharacters: true};
        const passwordLength = 4;
        // When
        const password = new PasswordGenerator().generatePassword(passwordLength, options);
        // Then
        expect(password.length).toBe(passwordLength);
        const allGoodRegex = new RegExp(`^[a-zA-Z0-9@%+/'!#$^?:.(){}~&]{${passwordLength}}$`);
        const atLeastOneLowercaseRegex = new RegExp(`[a-z]+`);
        const atLeastOneUppercaseRegex = new RegExp(`[A-Z]+`);
        const atLeastOneNumberRegex = new RegExp(`[0-9]+`);
        const atLeastOneSpecialCharacterRegex = new RegExp(`[@%+/'!#$^?:.(){}~&]+`);
        expect(allGoodRegex.test(password)).toBeTruthy();
        expect(atLeastOneLowercaseRegex.test(password)).toBeTruthy();
        expect(atLeastOneUppercaseRegex.test(password)).toBeTruthy();
        expect(atLeastOneNumberRegex.test(password)).toBeTruthy();
        expect(atLeastOneSpecialCharacterRegex.test(password)).toBeTruthy();
    })
});
