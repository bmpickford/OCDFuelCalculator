import { FindLitresForFuelPrice } from './Fuel';

describe('fuel data test suite', () => {
    it('finds fuel data for valid number found in the json', () => {
        const price = 0.98;
        const want = '{"price":0.98,"litres":[50,100]}';
        const got = FindLitresForFuelPrice(price);

        expect(JSON.stringify(got)).toBe(want);
    });

    it('returns undefined if price not present', () => {
        const price = 0.01;
        const got = FindLitresForFuelPrice(price);

        expect(got).toBe(undefined);
    });

    it('returns undefined if price is NaN', () => {
        const price = 'notanumber';
        const got = FindLitresForFuelPrice(price);

        expect(got).toBe(undefined);
    });
});