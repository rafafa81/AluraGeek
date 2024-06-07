var nombreLabel = document.getElementById('label_nombre');
var precioLabel = document.getElementById('label_precio');
var imagenLabel = document.getElementById('label_imagen');
var nombreInput = document.getElementById('nombre_input');
var precioInput = document.getElementById('precio_input');
var imagenInput = document.getElementById('imagen_input'); 
var botonLimpiar = document.querySelector('input[type="reset"]');

nombreInput.onfocus = ()=>{
    nombreLabel.style.display = 'none';
    if(precioInput.value == '' ){
        precioLabel.style.display = 'initial';
    }
    if(imagenInput.value == '' ){
        imagenLabel.style.display = 'initial';
    }
    
};

precioInput.onfocus = ()=>{
    if(nombreInput.value == '' ){
        nombreLabel.style.display = 'initial';
    }
    precioLabel.style.display = 'none';
    if(imagenInput.value == '' ){
        imagenLabel.style.display = 'initial';
    }
};

imagenInput.onfocus = ()=>{
    if(nombreInput.value == '' ){
        nombreLabel.style.display = 'initial';
    }
    if(precioInput.value == '' ){
        precioLabel.style.display = 'initial';
    }
    imagenLabel.style.display = 'none';
};

botonLimpiar.addEventListener('click', ()=>{
    nombreLabel.style.display = 'initial';
    precioLabel.style.display = 'initial';
    imagenLabel.style.display = 'initial';
});
