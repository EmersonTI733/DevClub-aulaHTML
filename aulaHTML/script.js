
const form= document.querySelector('.formulario-fale-conosco');
const mascaraform= document.querySelector('.mascara-formulario');

function mostrarform(){
    form.style.left= "50%";
    form.style.transform= "translateX(-50%)";
    mascaraform.style.visibility= "visible";
}

function guardeform(){
    form.style.left= "-300px";
    form.style.transform= "none";
    mascaraform.style.visibility= "hidden";
}