// let arr = ["Rushi", "Abhi", 1, 2, 3, {}, []];

// function newArr(arr) {
//     return arr.filter(element => Array.isArray(element));
// }

// console.log(newArr(arr));


let arr = ["Rushi", "Abhi", 1, 2, 3, {}, []];

function newArr(arr) {
    return arr.filter(element => typeof element === 'object' && !Array.isArray(element));
}

console.log(newArr(arr));
