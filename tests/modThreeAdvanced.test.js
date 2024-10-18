const modThree = require('../modThreeAdvanced');

describe('modThree FSM Tests', () => {
    test('empty input string should return 0', () => {
        expect(modThree('')).toBe(0);
    });

    test('single input "0" should return 0', () => {
        expect(modThree('0')).toBe(0);
    });

    test('single input "1" should return 1', () => {
        expect(modThree('1')).toBe(1);
    });
});