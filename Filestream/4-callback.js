setTimeout(() => {
    console.log('print after 2 sec')
}, 2000)


const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Ahmedabad', (data) => {
    console.log(data)
})

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b
        callback(sum)
    }, 2000)
}

add(1, 2, (sum) => {
    console.log(sum)
})




