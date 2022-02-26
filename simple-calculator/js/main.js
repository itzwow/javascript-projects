let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button')
let value ="";
for(item of buttons){
  item.addEventListener('click', (e)=>{
    buttonText = e.target.innerText;
    console.log(buttonText)
    
    if (buttonText =="*") {
        value +=buttonText;
        screen.innerText = value;
    }else if (buttonText == "C") {
      // value = 0;
      value ="";
      screen.innerText = value;
    }else if(buttonText == "="){
      screen.innerText = eval(value);
    }else if(buttonText == "DEL"){
      value = value.slice(0,value.length-1);
      screen.innerText = value;
    }
    else{
      
      value +=buttonText;
      screen.innerText = value;
    }
    console.log(value, typeof(value));
  })
}