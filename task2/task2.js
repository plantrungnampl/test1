// Input: [1, 4, 2, 3, 5]
//Explanation: The two largest integers are 5 and 4. Their sum is 9.
//Output: 9

function SumofTopTwoIntegers(arr) {
    const sort = arr.sort((a, b) => b - a)
    return sort[0] + sort[1]
}
const arr = [1, 4, 2, 3, 5]
console.log(SumofTopTwoIntegers(arr))