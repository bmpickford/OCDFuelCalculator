export const SpliceArr = (arr, size) => {
    let arrays = [];

    while (arr.length > 0)
        arrays.push(arr.splice(0, size));

    return arrays;
}