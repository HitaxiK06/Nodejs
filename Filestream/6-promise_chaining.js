const add = (a, b) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

//1. Nested  Not ideal reason->catch multitime

add(1, 2).then((sum) => {
    add(sum, 2).then((sum2) => {
        console.log(sum, sum2)
    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})

//2. Nested Promise multiple Then

add(1, 2).then((sum) => {
        console.log(sum)
        return add(sum,2)
    
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
