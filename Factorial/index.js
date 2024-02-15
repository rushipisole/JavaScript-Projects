var a = prompt("Enter Your Number");
var b = parseInt(a);



function factorial(number) {
    let Fac = 1;
    for (let index = 1; index <= number; index++) {
        Fac = Fac * index;

    }
    return Fac;
}   
console.log(factorial(b));