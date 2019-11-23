const add = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number2 < 0 || number2 < 0) {
                return reject('numbr must be a positive')
            }
            resolve(number1 + number2)
        }, 1000)
    })
}

const asyncawait = async () => {
    const sum = await add(1, -2)
    const sum2 = await add(sum, 20)
    return sum2
}
asyncawait().then((sum) => {
    console.log(sum)
}).catch((e) => {
    console.log(e)
})

// const dowork = () => {          //simple arrow function 

// }

// console.log(dowork())   //output undefind

// //async keyword defind asynchronous Function
// const dowork_without_return = async () => {

// }
// console.log(dowork_without_return()) //output promise{undefind}

// const dowork_with_return = async () => {
//     return 'Hitaxi'
// }
// console.log(dowork_with_return())   //output promise{Hitaxi}

// //async with promises
// dowork_with_return().then((result) => {
//     console.log(result)     //output Hitaxi
// }).catch((e) => {
//     console.log(e)
// })

//async await not work faster it make easier 
//await operator is used with promises in asynchronous functions.
//await allows you to work with Promises that look like synchronous

