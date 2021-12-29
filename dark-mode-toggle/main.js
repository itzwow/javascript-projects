const toggle = document.getElementById('toggle')

toggle.addEventListener('change', (e)=>{
    document.body.classList.toggle("dark", e.target.checked)
})

const text = `Learning JS is fun man!`;
const autoText = document.getElementById('auto-text')
let index = 0;

function writeText(){
    autoText.innerText = text.slice(0, index);

    index++;

    if(index > text.length){
        index = 0;
    }
}

setInterval(writeText, 100)