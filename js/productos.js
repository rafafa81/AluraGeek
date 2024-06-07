import { conexionAPI } from "./conexionApi.js";

const productos = document.querySelector('.productos_box');

listarProductos();

function crearCard(id ,nombre, precio, imagen){
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${imagen}" />
        <div class="card-container--info">
            <p>${nombre}</p>
            <div class="card-container--value">
            <p>$ ${precio}.00</p>
            <img class="boton_eliminar" src="./assets/trashIcon.png" attrId="${id}"/>
            </div>
        </div>`;
    return card;
}

async function listarProductos(){
    try{
        const lista = await conexionAPI.metodoGet();
        lista.forEach(element => {
            productos.appendChild(crearCard(element.id, element.nombre, element.precio, element.imagen))
        });
    } catch (error) {
        productos.innerHTML = '<h2 calss="mensaje__titulo">Ha ocurrido un probelma con la conexion</h2>'
    }
}

async function crearProducto(){
    let nombre = document.getElementById('nombre_input');
    let precio = document.getElementById('precio_input');
    let imagen = document.getElementById('imagen_input');
    
    let resp = await conexionAPI.metodoPost(nombre.value, precio.value, imagen.value);
    return resp;

}

let submit = document.querySelector('input[type="submit"]');

submit.addEventListener('click', async (evento)=>{
    evento.preventDefault()
    try{
        let resp = crearProducto()
        console.log(resp)
    } catch (error) {
        console.error(error)
    }
    
});

const esperar = ()=>{
    setTimeout(()=>{
        let botonesEliminar =  document.querySelectorAll('.boton_eliminar')
        botonesEliminar.forEach(elemento=>{
            elemento.addEventListener('click', async ()=>{
                const eliminar = await conexionAPI.metodoDelete(elemento.getAttribute('attrId'))
            })
        });
    },3000)
};
esperar();



