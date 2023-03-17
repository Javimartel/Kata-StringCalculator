import { add } from '../core/stringCalculator';

describe('stringCalculator Tests', () => {
    it('should return 0 for empty string', () => {
        expect(add('')).toBe("0");
    });

    it('should return the same number if the string only has one number', () => {
        expect(add('1')).toBe("1");
    });

    it('should return the sum of the numbers separated by commas', () => {
        expect(add('1, 2')).toBe("3");
    });

    it('should return the sum of unknown number or arguments', () => {
        expect(add('1, 2, 3')).toBe("6");
    });

    it('should return the sum of the numbers separated by commas and newlines', () => {
        expect(add('1\n2, 3')).toBe("6");
    });
});