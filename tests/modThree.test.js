const modThree = require('../modThree');

describe('modThree function', () => {

    test('should return 0 for an empty string', () => {
        expect(modThree('')).toBe(0);
    });

    test('should return 1 for the string "1"', () => {
        expect(modThree('1')).toBe(1);
    });

    test('should return 0 for the string "0"', () => {
        expect(modThree('0')).toBe(0);
    });

    test('should return 1 for the binary string "1101"', () => {
        expect(modThree('1101')).toBe(1);
    });

    test('should return 2 for the binary string "1110"', () => {
        expect(modThree('1110')).toBe(2);
    });

    test('should return 0 for the binary string "1111"', () => {
        expect(modThree('1111')).toBe(0);
    });

    test('should return 0 for all zeros string "0000"', () => {
        expect(modThree('0000')).toBe(0);
    });

    test('should return 2 for alternating ones and zeros string "101"', () => {
        expect(modThree('101')).toBe(2);
    });

    test('should handle invalid non-binary input "1a10101010101010")', () => {
        expect(modThree('1a10101010101010')).toBe(NaN);
    });

    test('should 1 non-binary input', () => {
        expect(modThree(1)).toBe('Input is not a binary string');
    });
});
