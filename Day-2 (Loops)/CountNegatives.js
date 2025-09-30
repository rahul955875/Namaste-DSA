function countNegatives(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            count++
        }
    }
    return count;
}
const array = [1, 2, 4, -5, -6, 0.6, 0.0099]
console.log(countNegatives(array))
