const modThree = require('../modThreeStandard');

describe.only('modThree FSM Tests', () => {
    test('empty input string should return 0', () => {
        expect(modThree('')).toBe(0);
    });

    test('single input "0" should return 0', () => {
        expect(modThree('0')).toBe(0);
    });

    test('single input "1" should return 1', () => {
        expect(modThree('1')).toBe(1);
    });

    test('input "10" should return 2', () => {
        expect(modThree('10')).toBe(2);
    });

    test('input "11" should return 0', () => {
        expect(modThree('11')).toBe(0);
    });

    test('input "110" should return 0', () => {
        expect(modThree('110')).toBe(0);
    });

    test('input "1010" should return 0', () => {
        expect(modThree('110')).toBe(0);
    });

    test('input "101" should return 2', () => {
        expect(modThree('101')).toBe(2)
    });

    test('input "1111" should return 0', () => {
        expect(modThree('1111')).toBe(0);
    });

    test('input "0000" should return 0', () => {
        expect(modThree('0000')).toBe(0);
    });

    test('input "1000" should return 0', () => {
        expect(modThree('1000')).toBe(2);
    });

    test('input "001" should return 1', () => {
        expect(modThree('001')).toBe(1);
    });

    test('input "0010" should return 2', () => {
        expect(modThree('0010')).toBe(2);
    });

    test('input "10101" should return 0', () => {
        expect(modThree('10101')).toBe(0);
    });

    test('input "12" should return NaN', () => {
        expect(modThree('12')).toBe(NaN);
    });

    test('input numeric 1 is not valid', () => {
        expect(modThree(1)).toBe('Input is not a binary string');
    })
});