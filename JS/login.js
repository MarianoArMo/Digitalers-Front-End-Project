const mainUsers = [
    {
        fullname: 'Mariano Arias Morer',
        email: 'admin@admin.com',
        password: 'admin',
        id: '9076fba7-8f1b-4985-bd9e-8fd224334512',
        role: 'ROLE_ADMIN',
        province: 'Tucumán',
        birth:'23/08/2000',
        observations:'asdasdasd',
    },
    {
        fullname: 'Nicha Yontararak',
        email: 'nichayontararak@user.com',
        password: '1234567890',
        id: '312381f8-0d20-4c0c-aa5f-2ccd21c7f24d',
        role: 'ROLE_CLIENT',
        province: 'San Luis',
        birth: '23/10/1997',
        observations:'asdasdasd',
    },
    {
        fullname: 'Cho Miyeon',
        email: 'chomiyeon@user.com',
        password: '1234567890',
        id: 'd11db2b3-0b3c-4133-9663-edace2f7d953',
        role: 'ROLE_CLIENT',
        province: 'Mendoza',
        birth:'31/01/1997',
        observations:'asdasdasd',
    },
    {
        fullname: 'Lionel Messi',
        email: 'lionelmessi@user.com',
        password: '1234567890',
        id: 'ffe5c07e-3c6a-4750-bf64-b1b9b1d19124',
        role: 'ROLE_CLIENT',
        province: 'Santa Fe',
        birth:'24/06/1987',
        observations:'asdasdasd',
    }
]


if ( !localStorage.getItem("users") ) {
    localStorage.setItem("users", JSON.stringify(mainUsers))
}

const users = JSON.parse(localStorage.getItem("users"))

const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", (event) => {
    
    event.preventDefault()

    const inputEmail = event.target.elements.email.value;
    const inputPassword = event.target.elements.password.value;
    
    const userExist = users.find(usr => {

        if(usr.email === inputEmail) {
            
            return true
        }

        return false
    })

    if(!userExist || userExist.password !== inputPassword ){
        Swal.fire('Los datos ingresados son incorrectos', 'Login incorrecto', 'error')
        
        return
    }

    Swal.fire('Login Correcto', 'Será redireccionado en breves', 'success')
    
    delete userExist.password

    localStorage.setItem( 'currentUser', JSON.stringify(userExist) )

    setTimeout(function(){
        window.location.href = '/index.html'
    }, 500)
})
    