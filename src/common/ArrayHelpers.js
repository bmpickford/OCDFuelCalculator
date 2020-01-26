export const SpliceArr = (arr, size) => {
    let arrays = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++)
        arrays.push([...arr.slice(i * size, size + (i * size))]);
    
    
    return arrays;
}