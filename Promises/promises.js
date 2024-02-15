console.log("This is Promises")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("Random number was not supportion to you")
    }
    else {
        setTimeout(() => {
            console.log("I am resolve")
            resolve("rushi")
        }, 2000);

    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("Random number was not supportion to you 2")
    }
    else {
        setTimeout(() => {
            console.log("I am resolve 2")
            resolve("rushi 2")
        }, 1000);

    }
})


let promise3 = Promise.any([prom1, prom2])
promise3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
}
)
