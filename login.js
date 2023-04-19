// let credentials = async () => {
//   const res = await fetch("https://fakestoreapi.com/users");
//   const validCredentials = await res.json();

//   const loginForm = document.querySelector(".loginform");

//   loginForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (!username || !password) {
//       alert("Please enter a Username and Password");
//       return;
//     }

//     const validUser = validCredentials.find(
//       (user) => user.username === username && user.password === password
//     );
//     if (validUser) {
//       alert((validCredentials.innerHTML = `Welcome ${username}!`));
//       window.location.href = "http://127.0.0.1:5501/Homepage.html"
    
//     } else {
//       alert("Invalid Username and Password");
//     }
//   });
// };
// credentials();

// const formEl = document.querySelector(".loginform");
// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(formEl);
//   const data = Object.fromEntries(formData);

//   fetch("https://reqres.in/api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// });



// function preventBack() { window.history.forward(); }  
// setTimeout("preventBack()", 0);  
// window.onunload = function () { null };  

 