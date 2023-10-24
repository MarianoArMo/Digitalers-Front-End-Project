

let users = JSON.parse(localStorage.getItem("users")) || mainUsers



if(  JSON.parse(localStorage.getItem("users")) === null  ) {

    localStorage.setItem("users", JSON.stringify(users))
    
}


let idEditar;
const btn = document.querySelector('button.btn[type="submit"]')
const tableBodyHTML = document.querySelector("#table-body")



pintarUsuarios(users)


const inputFiltrarHTML = document.getElementById("filtrar")





function pintarUsuarios(array) {

    tableBodyHTML.innerHTML = "";

    array.forEach(function(usr) {
        tableBodyHTML.innerHTML += 
            `<tr>
                <td class="table-fullname">${usr.fullname}</td>
                <td class="table-email">${usr.email}</td>
                <td class="table-rol">${usr.role}</td>
                <td class="table-rol">${obtenerFecha()}</td>
                <td class="table-actions">
                    <div class="text-center">
                        <button class="btn-delete btn btn-danger btn-sm" onclick="borrarProducto('${usr.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    
                </td>
            </tr>`
    })
}




inputFiltrarHTML.addEventListener('keyup', (evt) => {

    const busqueda = evt.target.value.toLowerCase();
    
    const resultado = user.filter((usuario) =>  {
        
        const titulo = usuario.fullname.toLowerCase()
        
        if( titulo.includes(busqueda)  ) {
            return true
        } 
        return false
    } )
    pintarUsuarios(resultado)

})



const borrarProducto = (idABuscar) => {
    Swal.fire({
        title: 'Desea borrar el usuario',
        icon: 'error',
        text: 'Realmente desea elminar el usuario?',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar' ,
        confirmButtonText: 'Borrar',
      }).then((result) => {

        if(result.isConfirmed) {
            const indiceEncontrado = users.findIndex((usuarioFindIndex) => {
                if(usuarioFindIndex.id === idABuscar) {
                    return true
                }
                return false
            })
            users.splice(indiceEncontrado, 1);

            pintarUsuarios(users)

            localStorage.setItem("users", JSON.stringify(users)   )


            Swal.fire('Borrado!', 'Producto borrado correctamente', 'success')
        }
    })
}






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

    const fechaFormateada = `${dia}-${mes}-${year}`
    return fechaFormateada
}