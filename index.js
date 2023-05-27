
var bgbody = document.getElementById("main");
function hexcolorcodegenerator(){
    let symbols = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let bgcolor = "#";
    for(let i=0;i<6;i++){
        bgcolor = bgcolor+symbols[Math.floor(Math.random()*16)];
    }
    bgbody.style.backgroundColor = bgcolor;
    document.getElementById("code").textContent = bgcolor
}

function rgbcolorcodegenerator(){
let red= Math.round(Math.random()*255);
let green= Math.round(Math.random()*255);
let yellow= Math.round(Math.random()*255);
let bgcolor = `rgb(${red},${green},${yellow})`;
bgbody.style.backgroundColor = bgcolor;
document.getElementById("code").textContent = bgcolor
}

function rgbacolorcodegenerator(){
    let red= Math.round(Math.random()*255);
    let green= Math.round(Math.random()*255);
    let yellow= Math.round(Math.random()*255);
    let alpha = +Math.random().toFixed(1);
    let bgcolor = `rgba(${red},${green},${yellow},${alpha})`;
    bgbody.style.backgroundColor = bgcolor;
    document.getElementById("code").textContent = bgcolor
}