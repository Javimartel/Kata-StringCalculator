import { add } from '../core/stringCalculator';

describe('stringCalculator Tests', () => {
    it('should return "0" when string is empty', () => {
        expect(add('')).toBe("0");
    });

    it('should return "1" when string is "1"', () => {
        expect(add('1')).toBe("1");
    });

    it('should return the sum of multiple numbers', () => {
        expect(add('1, 2')).toBe("3");
    });

    it('should return the sum of unknown numbers', () => {
        expect(add('1, 2, 3')).toBe("6");
    });
});
