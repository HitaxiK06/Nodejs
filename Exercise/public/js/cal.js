const calculator = document.querySelector('form')
const num1 = document.querySelector('#number1')
const num2 = document.querySelector('#number2')
const result = document.querySelector('#result')
const resultval =Number
calculator.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/calculate?number1='+num1.value+'&number2='+num2.value+'&action=Add').then((response) => {
        response.json().then(() => {
            if (req.query.action == 'Add') {
               resultval = Number(num1.value) + Number(num2.value)
               result.textContent=resultval
            }

        })
    })
    
})