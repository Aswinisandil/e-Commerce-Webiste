function signup(){
    window.location.href = "http://127.0.0.1:5501/login.html";
}

let signUp = document.getElementById('registerform');

signUp.addEventListener('submit',(e)=>{
    e.preventDefault();
    var reg_username = document.getElementById('reg_username').value
    var reg_password = document.getElementById('reg_password').value
    var reg_email = document.getElementById('reg_email').value;


// local storage 

//    localStorage.setItem('reg_username',reg_username);
//    localStorage.setItem('reg_password',reg_password);
//    localStorage.setItem('reg_email', reg_email);
   
// alert("your details are saved in local storage");

var users = []

var user ={
    reg_username: reg_username,
    reg_password: reg_password,
    reg_email: reg_email
}

localStorage.setItem('user', JSON.stringify(user))

// console.log(JSON.stringify(user))

if(localStorage.getItem('user')){
    var userArray = JSON.parse(localStorage.getItem('user'))
    console.log(userArray);
}

users.push(user)

// console.log(users)

})

console.log(user.reg_username);