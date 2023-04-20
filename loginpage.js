var signupEl = document.querySelector('.registerform');
var loginformEl = document.querySelector('.loginform');
 
var signIn = document.getElementById('submit');

 signIn.addEventListener('click',(e)=>{
  e.preventDefault();


 var log_username = document.getElementById('log_username').value;
 var log_password = document.getElementById('log_password').value;

  let userobj = localStorage.getItem('user')
  console.log(userobj)

  let userArray = JSON.parse(userobj)

  console.log(userArray)


 
  if(( log_username === userArray.reg_username) && (log_password === userArray.reg_password)){
    
    window.location.href = "http://127.0.0.1:5501/Homepage.html";
    
    localStorage.setItem('loggedIn',true);


  } else{
    alert(" Username or Password is incorrect");
  }

})


function signUp(){
    window.location.href = "http://127.0.0.1:5501/registorForm.html";
}

  window.onload = function(e){
    e.preventDefault();
    if(localStorage.getItem('loggedIn')){

      window.location.href = "http://127.0.0.1:5501/Homepage.html";
      
    } else if(localStorage.getItem('loggedIn') = 'false'){
          window.location.href = "http://127.0.0.1:5501/login.html"
    }else{
      window.location.href = "http://127.0.0.1:5501/registorForm.html";
    }
  }
  