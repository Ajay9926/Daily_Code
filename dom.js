let access =document.getElementById('main')
console.log(access.innerText)
access.innerHTML= "<h5> Hello </h5> "
console.log(access)


let accessClass = document.getElementsByClassName('hell')
console.log(accessClass)

let accessTag=document.getElementsByTagName('p')
console.log(accessTag)

let accessImage=document.getElementById('cartoon')

accessImage.src='logo_image.jpg'


let accessText = document.getElementById('changeName');
accessText.innerText='<h1> Hello i am Anas </h1> '

accessText.classList.add('newClass','oneClass')
accessText.classList.remove('oneClass')

let lorm = document.getElementById('lome')
lorm.style.color='green'
lorm.style.backgroundColor='grey'
lorm.style.border='5px solid black'
lorm.style.borderRadius='50px'
lorm.remove();


console.log(lorm)

let addNew = document.createElement('h1')
addNew.innerText="hello i am narayan";
console.log(addNew)

let targett = document.getElementById('changeName');

targett.appendChild(addNew);

let images = document.getElementById('image');
images.setAttribute('src','download.jpg')


let select=document.querySelector('#newId')
console.log(select);





