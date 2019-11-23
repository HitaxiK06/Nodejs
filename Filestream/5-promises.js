// import { promises } from "dns";

const doworkpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        try { 
            resolve([1, 4, 7]) 
        } catch (e) { 
            reject('Error')
         }
    }, 2000)
})

doworkpromise.then((result) => {
    console.log('Success', result)
}).catch((e) => {
    console.log(e)
})