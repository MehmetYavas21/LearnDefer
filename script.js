
let clickEvent= document.getElementById('mybutton');
clickEvent.addEventListener('click' , function(){
    alert('button clicked');
});

/*
const newBodyClass=document.getElementsByTagName('body');
newBodyClass.classList.add('blue-background');
*/

/* 

let changeBG = document.getElementById('mybutton2');
changeBG.addEventListener('click' , function(){

    const secondBodyClass= document.getElementsById('myBody');
    secondBodyClass.classList.replace('blue-background' , 'red-background');


} );

*/
let changeBG = document.getElementById('mybutton2');
changeBG.addEventListener('click' , function(){
    const secondBodyClass= document.getElementsById('myBody');
    secondBodyClass.classList.replace('blue-background' , 'red-background');
});