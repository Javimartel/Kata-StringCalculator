import { add } from '../core/stringCalculator';

describe('stringCalculator Tests', () => {
    it('should return "0" when string is empty', () => {
        expect(add('')).toBe("0");
    });
});
