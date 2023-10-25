

let album = JSON.parse(localStorage.getItem("products")) || albums

const cancelBtn = document.getElementById('cancel')



let idEditar;
const btn = document.querySelector('button.btn[type="submit"]')
const tableBodyHTML = document.querySelector("#table-body")



pintarProductos(album)


const inputFiltrarHTML = document.getElementById("filtrar")

const formularioProductoHTML = document.getElementById("formularioProducto")



formularioProductoHTML.addEventListener('submit', (evt) => {

    evt.preventDefault()

    const el = formularioProductoHTML.elements;

    let id;
    
    if(idEditar) {
        id = idEditar
    } else {
        id = crypto.randomUUID()
    }


    const nuevoProducto = {
        id: id,
        titulo: el.tituloName.value,
        descripcion: el.descripcion.value,
        precio: el.precio.valueAsNumber,
        imagen: el.imagen.value,
        categoria: el.categoria.value,
        fechaDeCreacion: obtenerFecha(),
    }


    if(idEditar) {
        
        const index = album.findIndex(alb => {
            return alb.id === idEditar
        })
        
        album[index] = nuevoProducto;
        
        idEditar = undefined;
        
        btn.innerText = "Agregar producto"
        btn.classList.remove("btn-success")
    } else {
        album.push(nuevoProducto)
    }


    Swal.fire({
        icon: 'success',
        title: 'Producto agregado/modificado correctamente',
        text: 'El producto se actualizo o modifico correctamente!',
      })


    pintarProductos(album)

    localStorage.setItem("products", JSON.stringify(album))
    
    formularioProductoHTML.reset()
    el.tituloName.focus()
})



function pintarProductos(array) {

    tableBodyHTML.innerHTML = "";

    array.forEach(function(albu) {
        tableBodyHTML.innerHTML += 
            `<tr>
                <td class="table-image">
                        <img src="${albu.imagen}" alt="${albu.titulo}">
                </td>
                <td class="table-title">${albu.titulo}</td>
                <td class="table-description">${albu.descripcion}</td>
                <td class="table-price">${albu.precio}</td>
                <td class="table-category">${albu.categoria}</td>
                <td >
                    <div class="d-flex gap-1">
                        <button class="btn-delete btn btn-danger btn-sm" onclick="borrarProducto('${albu.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-success btn-sm" onclick="editarProducto('${albu.id}')" data-bs-toggle="modal" data-bs-target="#formModal">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                    
                </td>
            </tr>`
    })
}




inputFiltrarHTML.addEventListener('keyup', (evt) => {

    const busqueda = evt.target.value.toLowerCase();
    
    const resultado = album.filter((product) =>  {
        
        const titulo = product.titulo.toLowerCase()
        
        if( titulo.includes(busqueda)  ) {
            return true
        } 
        return false
    } )
    pintarProductos(resultado)

})



const borrarProducto = (idABuscar) => {
    Swal.fire({
        title: 'Desea borrar producto',
        icon: 'error',
        text: 'Realmente desea elminar el producto?',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar' ,
        confirmButtonText: 'Borrar',
      }).then((result) => {

        if(result.isConfirmed) {
            const indiceEncontrado = album.findIndex((productoFindIndex) => {
                if(productoFindIndex.id === idABuscar) {
                    return true
                }
                return false
            })
            album.splice(indiceEncontrado, 1);

            pintarProductos(album)

            localStorage.setItem("products", JSON.stringify(album)   )


            Swal.fire('Borrado!', 'Producto borrado correctamente', 'success')
        }
    })
}



const editarProducto = function(idRecibido) {

    console.log(`Editar elemento ${idRecibido}`)

    const productoEditar = album.find((prod) => {
        if(prod.id === idRecibido) {
            return true
        }
    })

    if(!productoEditar) return;

    idEditar = productoEditar.id
    
    const elements = formularioProductoHTML.elements;

    elements.tituloName.value = productoEditar.titulo;
    elements.precio.value = productoEditar.precio;
    elements.descripcion.value = productoEditar.descripcion;
    elements.imagen.value = productoEditar.imagen;
    elements.categoria.value = productoEditar.categoria;
    

    
    btn.innerText = "Editar Producto"
    btn.classList.add("btn-success")
}


cancelBtn.addEventListener('click', () => {
    formularioProductoHTML.reset()
    idEditar = undefined

    btn.innerText = "Agregar producto"
    btn.classList.remove("btn-success")
    
})



function obtenerFecha() {
    const fecha = new Date()
    let mes = fecha.getMonth() + 1;
    if(mes < 10) {
        mes = '0'+ mes
    }
    let dia = fecha.getDate()
    if(dia < 10) {
        dia = '0' + dia
    }
    const year = fecha.getFullYear()

    const fechaFormateada = `${year}-${mes}-${dia}`
    return fechaFormateada
}