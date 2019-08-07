import PasswordGenerator from "./PasswordGenerator";

describe("PasswordGenerator", () => {
    it('should create without error', () => {
        expect(new PasswordGenerator()).toBeTruthy();
    })
});
