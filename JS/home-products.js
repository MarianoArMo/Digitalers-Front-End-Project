const mainProducts = JSON.parse(localStorage.getItem('products')) || albums

if ( !localStorage.getItem("products") ) {
    localStorage.setItem("products", JSON.stringify(mainProducts))
}

