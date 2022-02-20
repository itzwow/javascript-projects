const btn = document.getElementById('btn')
const body = document.body
const colorValue = document.getElementById("colorValue");
btn.addEventListener("click", generateColor);

function generateColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    console.log(r,g,b);
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
    colorValue.innerText = `rgb(${r},${g},${b})`;
}
