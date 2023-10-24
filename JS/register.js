users = JSON.parse(localStorage.getItem('users'))
const registerForm = document.querySelector('.register-form-container')

registerForm.addEventListener('submit', (evt) => {

    evt.preventDefault()

    const el = registerForm.elements;

    const inputEmail = evt.target.elements.email.value
    const inputPass = evt.target.elements.password.value
    const inputPass2 = evt.target.elements.passwordConfirm.value

    const userExist = users.find(usr => {
        if(usr.email === inputEmail){
            return true
        }
            return false
    })

    if(userExist){
        Swal.fire('Registro fallido', 'El correo con el que se quiere registrar ya existe','error')
        return
    }

    if(inputPass !== inputPass2){
        Swal.fire('Las contraseñas no coinciden', '', 'error')
        return
    }
    

    const newUser = {
        fullname: el.fullname.value,
        email: el.email.value,
        password: el.password.value,
        id: crypto.randomUUID(),
        role: 'ROLE_CLIENT',
        province: el.province.value,
        birth:el.birth.value,
        observations:el.observations.value
    }

    users.push(newUser)

    Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'En breve será redireccionado al login',
      })
      
      localStorage.setItem('users', JSON.stringify(users))

      registerForm.reset()

      setTimeout(function(){
        window.location.href = '/pages/login/login.html'
    }, 500)



})