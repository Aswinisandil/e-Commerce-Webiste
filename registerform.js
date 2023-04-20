function signIn(){
    if(!localStorage.getItem('loggedIn')){
      window.location.href = "http://127.0.0.1:5501/login.html";
    // } else{
    //     window.location.href = "http://127.0.0.1:5501/Homepage.html"
  }
  }
  

let signUp = document.getElementById('registerform');
var registerLog = document.getElementById('reg_submit');


registerLog.addEventListener('click',(e)=>{
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
users.push(userArray);

console.log(users)

localStorage.setItem('users',users);
alert("Your details are saved in the local storage");

})


registerLog.addEventListener('click',(e)=>{
  e.preventDefault();
  window.location.href = "http://127.0.0.1:5501/login.html";
  alert("Please login to continue shopping");

})


window.onload = function(e){
    e.preventDefault();
    if(localStorage.getItem('loggedIn')){

      window.location.href = "http://127.0.0.1:5501/Homepage.html";
      
    } else if(localStorage.getItem('loggedIn') = 'false'){

      window.location.href = "http://127.0.0.1:5501/login.html";
    } else{
        window.location.href = "http://127.0.0.1:5501/registorForm.html";
    }

  }
  
  
