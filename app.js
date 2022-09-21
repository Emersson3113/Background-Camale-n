let background = document.getElementById("background")
let btn = document.getElementById("coloresaleatorios")
let cambiarnombre = document.getElementById("cambiarnombre")

let colores = ['blue','yellow','green','gray','violet','purple','pink','Aliceblue','Antiquewhite','Aqua','Deepskyblue','Gold','Aquamarine','Orange','Salmon'];
let NombreColores=0;

btn.addEventListener("click", ()=> {
    NombreColores = Math.floor(Math.random()*colores.length);
    document.getElementById("background").style.background = colores[NombreColores];
    document.getElementById("cambiarnombre").textContent= colores[NombreColores];
});
