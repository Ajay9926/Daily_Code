

function handelClick(){
    let moveBox = document.getElementById('innerBox');
    let moveBox1 = document.getElementById('inner2');

let moveTo = 0;

let interval = setInterval(animations, 5);

function animations(){

    if(moveTo == 350){
moveBox.style.display= 'none';
moveBox1.style.display= 'flex';
moveBox1.style.marginLeft= moveTo +'px';

clearInterval(interval)
    }
    else if(moveTo == 200){
        moveTo ++;
        moveBox.style.border= '2px solid red';
        moveBox.style.borderRadius= '20px';
        moveBox.style.backgroundColor='grey';
    }
    else{
        moveTo ++;
        moveBox.style.marginTop= moveTo +'px'
        moveBox.style.marginLeft= moveTo +'px'
        moveBox1.style.display= 'none';
        // moveBox1.style.marginLeft= moveTo +'px'
        
    }

}

}
