// MENÚ RESPONSIVE

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuButton){

menuButton.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}


// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});



// VALIDACIÓN DEL FORMULARIO

const form = document.querySelector("form");


if(form){

form.addEventListener("submit",(event)=>{

event.preventDefault();


const nombre =
document.getElementById("nombre").value.trim();


const correo =
document.getElementById("correo").value.trim();


const mensaje =
document.getElementById("mensaje").value.trim();



if(nombre === "" || correo === "" || mensaje === ""){

alert("Por favor complete todos los campos.");

return;

}



const emailValid =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(!emailValid.test(correo)){

alert("Ingrese un correo electrónico válido.");

return;

}



alert("Mensaje enviado correctamente.");

form.reset();


});

}




// BOTÓN VOLVER ARRIBA

const topButton = document.createElement("button");


topButton.innerHTML="⬆";


topButton.className="top-button";


document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}


});



topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});




// ANIMACIONES AL HACER SCROLL

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}

});


},{
threshold:0.15
});



sections.forEach(section=>{

observer.observe(section);

});