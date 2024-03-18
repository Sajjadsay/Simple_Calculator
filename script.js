let input = document.querySelector('.input');
let buttons = document.querySelectorAll('button');
 let String = "";

let arr = Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML === "="){
            input.value = eval(input.value);
        }
        else if(e.target.innerHTML === "C/ON"){
            input.value = "";
        }
        else{
        input.value += e.target.innerHTML;
        }
        
    })
})
