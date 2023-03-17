import { add } from '../core/stringCalculator';

describe('stringCalculator Tests', () => {
    it('should return 0 for empty string', () => {
        expect(add('')).toBe("0");
    });

});