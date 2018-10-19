
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
//1
var cont=1;
//2
var bitacoras=[];
//3
var formulario=document.getElementById("bitacora");
/**
Tiene un form que contiene un fieldset.
El fieldset contiene tres div, cada div contiene un label y un input
 */

//4
//4.1
formulario.addEventListener("submit", (evt) => {
}); 
//4.2
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
 }); 
 /**
  cancela el evento, sin detener el funcionamiento de este.
  Para este caso se evita que los valores de los inputs se pasen
  a la barra de direcciom.
  */
 //4.3
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
 });

 /*
 Formulario con tiene los valores que fueron seteados desde los inputs
 eje. formulario[2] contiene una cadena de texto con la descripcion ingresada.
 */
//4.4
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
  if(formulario[1].value=="" || formulario[2].value=="" ||formulario[3].value==""){
      alert("falta llenar campos");
  }
  else{
      bitacoras.push(bitacora);
    cont++;
    mostrar();}
 }); 
//5
const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => { 
     let td = document.createElement("td"); 
     let content = document.createTextNode(item); 
     td.appendChild(content); 
     tr.setAttribute("class", "click"); 
     tr.appendChild(td); 
    }); 
   tbody.appendChild(tr); 
  }
  /**
   -tr contiene los valores de los td.
   -td contiene el valor de content
   -content contiene el valor que se tiene en los input.
   -tbody contiene una serie de tr.
   -Esta funcion hace que se cree una tabla con los valores ingresados
   desde la caja de input.
   */
//6
   const eliminar = (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/**
 -contiene el primer nodo de tbody.
 -vacio.
 */

//7
const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
     }); 
    }) 
   }
/*
El valor que tiene cada uno de los propiedades del json bitacora.
*/
//8
const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
   } 
/**
 -Todos los valores que estan contenidos en la etiqueta tbody
 -Cantidad de hijo que tiene el elemento padre en este caso el padre es el tbody.
 -No se mostrara ningun cambio en la pantalla del navegador.
 -Se muestra los valores contenidos en el tbody.
 */

var fecha=document.getElementById("fecha");
var des=document.getElementById("descp");
var cant=document.getElementById("cant");
fecha.oninput = () => { 
       var valor = fecha.value; 
       if(valor == "" || valor == null){ 
         fecha.style.borderColor = "red";
        
       }else{
         fecha.style.borderColor = "green";
       } 
};

des.oninput = () => { 
       var valor = des.value; 
       if(valor == "" || valor == null){ 
         des.style.borderColor = "red";
       }else{
         des.style.borderColor = "green";
       } 
};
cant.oninput = () => { 
       var valor = cant.value; 
       if(valor == "" || valor == null){ 
         cant.style.borderColor = "red";
       }else{
         cant.style.borderColor = "green";
       } 
    };