import { SpliceArr } from "./ArrayHelpers"

describe('splice array test suite', () => {
    it('splices array with 9 values into 3 subarrays when size is 3', () => {
        const size = 3;
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const splicedArr = SpliceArr(arr, size);
        expect(splicedArr.length).toBe(3);
        expect(splicedArr[splicedArr.length - 1].length).toBe(3);
    });

    it('splices array with 2 values into 1 subarrays when size is 3', () => {
        const size = 3;
        const arr = [1, 2];

        const splicedArr = SpliceArr(arr, size);
        expect(splicedArr.length).toBe(1);
        expect(splicedArr[splicedArr.length - 1].length).toBe(2);
    });

    it('returns empty array if no values', () => {
        const size = 3;
        const arr = [];

        const splicedArr = SpliceArr(arr, size);
        expect(splicedArr.length).toBe(0);
    });
});