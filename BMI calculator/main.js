document.getElementById("kgsInput").addEventListener("input", e =>{
    let kgs = e.target.value;
    let lb = (kgs*2.2046).toFixed(2);
    document.getElementById("lbsOutput").innerHTML = `${lb} lb.`;
})



document.getElementById("cmInput").addEventListener("input", e =>{
    let cm = e.target.value;
    let ft = (cm*0.0328084).toFixed(2)
    document.getElementById("ftOutput").innerHTML = `${ft} ft.` ;
})

document.getElementById("btnInput").addEventListener("click", e =>{
    let kgs = document.getElementById("kgsInput").value;
    let cm = document.getElementById("cmInput").value;
    // console.log(kgs,cm);

    let bmi = ((10000*kgs)/(cm*cm));
    bmi = bmi.toFixed(2);
    console.log(bmi,cm,kgs);
   
    var type ;
    if (bmi<18.50) {
        type = 'Underwight';
    }else if(bmi>18.50 && bmi<25.00){
        type = 'Normal';
    }else if(bmi>=25.00 && bmi<30.00){
        type = 'Overweight';
    }else{
        type = 'Obese'
    }

    if (isNaN(bmi) || cm == '' || kgs == '') {
        document.getElementById("bmiOutput").innerHTML ="Please Enter All inputs";
        alert("please Enter All Inputs to calculate BMI");
        
    }
    else{
    document.getElementById("bmiOutput").innerHTML = `Your BMI is ${bmi}

    \nwhich is considered as ${type}
    `  ;}
})