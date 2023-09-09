const form = document.querySelector('#loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const captchaResponse =  grecaptcha.getResponse();

    if(!captchaResponse.length > 0){
        return alert("Captcha no completado")
    }
    else{
        const loginForm = document.querySelector('#loginForm')
        loginForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        const Users = JSON.parse(localStorage.getItem('users')) || []
        const validUser = Users.find(user => user.email === email && user.password === password)
        if(!validUser){
            return alert('Usuario y/o contraseña incorrectos!')
        }
   alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'index.html'   

})
    }

    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);


    fetch('http://httpbin.org/post',{
        method: "POST",
        body: params,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
})
