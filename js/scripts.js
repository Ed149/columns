'use strict'

window.addEventListener('load',()=>{
    var buttons = document.querySelectorAll('.btn');
    console.log(buttons);
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click',()=>{
            buttons[i].style.backgroundColor="transparent";
            buttons[i].style.color="white";
        });
    }
    
});