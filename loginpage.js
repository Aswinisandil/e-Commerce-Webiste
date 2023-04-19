var signupEl = document.querySelector('.registerform');
 var loginformEl = document.querySelector('.loginform');
 var username = loginformEl.username.value;
 var password = loginformEl.password.value


loginformEl.addEventListener('submit', (event) => {
  event.preventDefault();

 
  if(!username || !password){
    document.getElementById('usercontrol').innerHTML = "** please enter the username";
    document.getElementById('passwordcontrol').innerHTML = "** please enter the password";

  }

  localStorage.setItem('username',username);
  localStorage.setItem('password',password);


})

// function loggedIn(){
//   if((username === "Shopit123") && (password === "123456")){
    
//     window.location.href = "http://127.0.0.1:5501/Homepage.html";
    
//     console.log("Hello ${username}");

//   }  
// }

function signup(){
    window.location.href = "http://127.0.0.1:5501/registorForm.html";
  
  } 
  
  