async function metodoGet(){
    let url = 'http://localhost:3000/productos';
    let resp = await fetch(url, {
        method:'GET',
        headers:{
            'content-type':'application/json'
        }
    });
    let jsonConv = await resp.json();
    return jsonConv;
}

async function metodoPost(nombre, precio, imagen){
    
    let url = 'http://localhost:3000/productos';
    let resp = await fetch(url, {
        method:'POST',
        header:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    });
    let jsonConv = await resp.json();
    return jsonConv;
}

async function metodoDelete(id){
    
    let url = `http://localhost:3000/productos/${id}`;
    let resp = await fetch(url, {
        method:'DELETE',
        headers:{
            'content-type':'application/json'
        }
    });
    let jsonConv = await resp.json()
    return jsonConv;
}

export const conexionAPI = {
    metodoGet, metodoPost, metodoDelete
}