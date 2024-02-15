// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }


async function getData() {
  let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await a.json()
      console.log(data)
}

async function main() {
    console.log("Loading")

    console.log("Loading2")

    console.log("Loading3")


    let data = await getData()

    console.log(data)

    console.log("Loading5")

    console.log("Loading6")
}
main()