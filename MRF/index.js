let arr = [1, 12, 45, 77, 900];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)

// }

// Map Function

let newArr = arr.map((element, index, arr) => {
    return element ** 2
})
console.log(newArr)

// Filter Method

const greaterThanSeven = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
}
console.log(arr.filter(greaterThanSeven))

// Reduce Function


let arr2 = [2, 3, 4, 5, 6]
const red = (a, b) => {
    return a + b;
}
console.log(arr2.reduce(red));

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenNumber = (even) => {
    if (even % 2 == 0) {
        return even;
    }
    

}
let na =newArray.filter(evenNumber)
console.log(na)