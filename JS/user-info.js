const currentUser = JSON.parse(localStorage.getItem('currentUser'))

const headerUserInfo = document.getElementById("header-user-name")
const headerUserAction = document.getElementById("header-user-action")
const navbarLink = document.querySelector('.navbar-nav')

headerUserInfo.innerText = currentUser ? currentUser.fullname:''

if(currentUser){
    headerUserAction.innerHTML = '<button class="logout-btn" onclick="logout()">Logout</button>'
    
    if(currentUser.role === 'ROLE_ADMIN'){
        const adminUsersLink = document.createElement('li')
        adminUsersLink.classList.add('nav-item')

        const adminProdLink = document.createElement('li')
        adminProdLink.classList.add('nav-item')

        const url = window.location.pathname

        const link = document.createElement('a')
        link.classList.add('nav-link')
        link.href = '/pages/admin/admin-users/admin-user.html'
        link.innerText = 'Usuarios'
        if(url.includes('admin-user.html')) link.classList.add('active-item')

        const link2 = document.createElement('a')
        link2.classList.add('nav-link')
        link2.href = '/pages/admin/admin-product/admin-product.html'
        link2.innerText = 'Productos'
        if(url.includes('admin-product.html')) link2.classList.add('active-item')

        adminUsersLink.appendChild(link)
        navbarLink.appendChild(adminUsersLink)

        adminProdLink.appendChild(link2)
        navbarLink.appendChild(adminProdLink)
    }
}
else{
    headerUserAction.innerHTML = '<a class="login-btn" href="/pages/login/login.html">Login</a>'
}

function logout(){
    localStorage.removeItem('currentUser')

    setTimeout(function(){
        window.location.href = '/index.html'
    }, 500)
}



