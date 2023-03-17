import { add } from '../core/stringCalculator';

describe('stringCalculator Tests', () => {
    it('should return 0 for empty string', () => {
        expect(add('')).toBe("0");
    });

    it('should return the same number if the string only has one number', () => {
        expect(add('1')).toBe("1");
    });

});