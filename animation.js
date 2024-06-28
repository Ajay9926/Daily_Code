

let moveBox = document.getElementById('move');

let moveLeft = 0;

let animate = setInterval(moveToLeft, 1000);

function moveToLeft(){

    if (moveLeft == 100) {
        clearInterval(animate)
        
    }else{
        moveLeft = moveLeft + 10;
        // moveLeft++
    
        moveBox.style.marginLeft = moveLeft + 'px'
    }

     


}