// registration form
// email
var register1 = document.querySelector("#Registration");

function register() {
  const regexPattern = new RegExp(/^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i);
  var regemail = document.getElementById("regemail").value;
  debugger;
  if (regexPattern.test(regemail)) {
    document.getElementById("regerror").style.display = "none";
  } else {
    document.getElementById("regerror").style.display = "block";
    return;
  }

  var Regpassword = document.getElementById("pass").value;
  var length1 = Regpassword.length;
  // email local

  // password
  localStorage.setItem("Useremail", regemail);
  console.log(localStorage.getItem("Useremail"));

  // if condition
  if (length1 >= 8 && length1 <= 10) {
    document.getElementById("regerror1").style.display = "none";
    localStorage.setItem("Password", Regpassword);
    console.log(localStorage.getItem("Password"));
  } else {
    document.getElementById("regerror1").style.display = "block";
    // password local
    return;
  }
  var fname = document.getElementById("FirstName");
  var lname = document.getElementById("LastName");
  var phone = document.getElementById("phone");
  localStorage.setItem("fname", fname.value);
  localStorage.setItem("lname", lname.value);
  localStorage.setItem("phoneno", phone.value);
  console.log(localStorage.getItem("fname"));
  console.log(localStorage.getItem("lname"));
  console.log(localStorage.getItem("phoneno"));

  window.location.pathname = "index.html";
}

// function login() {
//   var userUserName = document.getElementById("Email").value;
//   var userPassword = document.getElementById("password").value;
//   var username = localStorage.getItem("Useremail");
//   var password = localStorage.getItem("Password");

//   if (userUserName == username && userPassword == password)
//    console.log("ok");
// }
var buttonc = document.getElementById("button1");
buttonc.addEventListener("click", () => {
  window.open("cofee.html");
});
var buttoni = document.getElementById("button2");
buttoni.addEventListener("click", () => {
  window.open("icecream.html");
});
var buttons = document.getElementById("button3");
buttons.addEventListener("click", () => {
  window.open("snacks.html");
});
console.log("inside");
