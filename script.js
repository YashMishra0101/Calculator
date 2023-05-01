const display_value=document.querySelector('[data-display-value]')
const buttons=document.querySelectorAll('button')

let string="";

const button_array=Array.from(buttons)

button_array.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML==="AC"){
      string="";
      display_value.value=string;
    }
    else if(e.target.innerText==="DEL"){
      string = string.substring(0, string.length-1);
      display_value.value=string;
    }

    else if(e.target.innerText==="="){
      string = eval(string);
      display_value.value=string;
    }
    else {
      string +=e.target.innerText;
      display_value.value=string;
    }
  })
})

