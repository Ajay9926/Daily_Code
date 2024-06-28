let clickMe = document.getElementById('click_me')

clickMe.addEventListener('click',()=>{
console.log('Hello')
})
clickMe.addEventListener('click',()=>{
    console.log('hiiiiii')
    })

let doubleClick= document.getElementById('dbl_click')
doubleClick.addEventListener('dblclick',()=>{
    console.log('Hello i am double click Finction')
})

let mouseOver= document.getElementById('mouse_click')
mouseOver.addEventListener('mouseover',()=>{
    console.log('hello i am mouse over')
})