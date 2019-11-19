console.log('Client side js is working')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherform = document.querySelector('form')
const searchform = document.querySelector('input')
const errormsgs = document.querySelector('#errormsg')
const successmsgs = document.querySelector('#successmsg')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()

    errormsgs.textContent = 'Loading..'
    successmsgs.textContent = ''
    console.log('Testing',searchform.value)
    fetch('http://localhost:3000/weather2?address=' + searchform.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                errormsgs.textContent = data.error
                console.log(data.error)
            }
            else {
                console.log(data.forecast)
                console.log(data.location)
                errormsgs.textContent = data.location
                successmsgs.textContent = data.forecast
            }
        })
    })
})