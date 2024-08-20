// Input: ['a', 'ab', 'abc', 'cd', 'def', 'gh']
// Output: ['ab', 'cd', 'gh']
function findArrLeng(arr) {
    const lengnumber = {}
    let maxCount = 0
    let maxLength = 0
    for (const str of arr) {
        const lengthIndex = str.length
        lengnumber[lengthIndex] = (lengnumber[lengthIndex] || 0) + 1
        if (lengnumber[lengthIndex] > maxCount) {
            maxCount = lengnumber[lengthIndex]
            maxLength = lengthIndex
        }
    }
    return arr.filter((i) => i.length === maxLength)
}
let arr = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
console.log(findArrLeng(arr))