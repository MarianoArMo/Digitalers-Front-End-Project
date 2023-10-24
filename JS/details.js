const productos = JSON.parse(localStorage.getItem('products'))

        const search = window.location.search

        const params = new URLSearchParams(search)

        const idParams = params.get('identificador')

        const productDetails = document.querySelector('.product-details-container')

        obtenerProducto(idParams)

        function obtenerProducto(idABuscar) {
            const producto = productos.find(producto => {
                if(producto.id === idABuscar) {
                    return true
                }
            })

            if(!producto) {
                document.write(`<h1 class="text-danger">No se encontro producto</h1>`)
                document.write(`<a href="/index.html">Volver a productos</a>`);
                return
            } 

            productDetails.innerHTML += `
            <div class="product-details-image">
                <img src="${producto.imagen}" alt="${producto.titulo}">
            </div>

            <div class="product-details-info">
                <h2>${producto.titulo}</h2>
                <span></span>
                <div class="product-description">
                    <h5>Descripción</h5>
                    <p>${producto.descripcion}</p>
                </div>
                <div class="product-money">${producto.precio}</div>
                <span></span>
                <div class="product-details-buttons">
                    <button type="button" class="btn ">Comprar</button>
                    <button type="button" class="btn ">Agregar al carrito</button>
                </div>
            </div>`
        } 