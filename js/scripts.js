/*Validacion de formulario*/
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);
function leerTexto(e){ datos[e.target.id] = e.target.value }

const mensajeDeAlerta = (mensaje,error = null) =>{
    const alerta = document.createElement("P");
    
    if(error){
        alerta.textContent = mensaje;
        alerta.classList.add("mensaje-error"); 
    }else{
        alerta.textContent = mensaje;
        alerta.classList.add("mensaje-enviado");
    }

    formulario.appendChild(alerta);
    setTimeout(() =>{
        alerta.remove();
    },3000);

}

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const {nombre,email,mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mensajeDeAlerta("Todos los campos deben estar completados", true);    
        return;
    }
    mensajeDeAlerta("El mensaje fue enviado correctamente");
}) 

/*mas codigo*/
