const productCards = JSON.parse(localStorage.getItem('products')) || []
const albumContainer = document.querySelector('.album-container')
const epContainer = document.querySelector('.ep-container')

productCards.forEach((prod) => {
    if(prod.categoria === 'Album'){
        albumContainer.innerHTML+= `
        <article class="card">
            <div class="card-header">
                <figure>
                    <img src="${prod.imagen}"
                    alt="${prod.titulo}">
                </figure>
                <div class="card-img-info">
                <h2>${prod.titulo}</h2>
                <p>${prod.categoria}</p>
                </div>
            </div>


            <div class="card-main">
                <h2>${prod.titulo}</h2>
                <div class="card-description">
                    <p>${prod.descripcion}</p>
                </div>
                <div class="card-prices">
                    <div class="card-date">${prod.fechaDeCreacion}</div>
                    <div class="card-price">${prod.precio}</div>
                </div>
            </div>


            <div class="card-footer">
                <button class="card-details"><a href="/pages/details/details.html?identificador=${prod.id}">Ver detalles</a></button>
                <button class="card-buy">Comprar</button>
            </div>
        </article>`
    }

    if(prod.categoria === 'EP'){
        epContainer.innerHTML+= `
        <article class="card">
            <div class="card-header">
                <figure>
                    <img src="${prod.imagen}"
                    alt="${prod.titulo}">
                </figure>
                <div class="card-img-info">
                <h2>${prod.titulo}</h2>
                <p>${prod.categoria}</p>
                </div>
            </div>


            <div class="card-main">
                <h2>${prod.titulo}</h2>
                <div class="card-description">
                    <p>${prod.descripcion}</p>
                </div>
                <div class="card-prices">
                    <div class="card-date">${prod.fechaDeCreacion}</div>
                    <div class="card-price">${prod.precio}</div>
                </div>
            </div>


            <div class="card-footer">
                <button class="card-details"><a href="/pages/details/details.html?identificador=${prod.id}">Ver detalles</a></button>
                <button class="card-buy">Comprar</button>
            </div>
        </article>`
    }
    
});
