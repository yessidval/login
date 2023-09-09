const form = document.querySelector('#signupForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const captchaResponse =  grecaptcha.getResponse();

    if(!captchaResponse.length > 0){
        return alert("Captcha no completado")
    }
    else{
    const signupForm = document.querySelector('#signupForm')
    signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }
  

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'login.html'

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
