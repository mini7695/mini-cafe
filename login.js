// js login page

// email condition:

var click1 = document.querySelector("#click");

click1.addEventListener("click", () => {
  var enteredEmail = document.getElementById("Email").value;
  const email = localStorage.getItem("Useremail");

  const enteredPassword = document.getElementById("password").value;
  const password = localStorage.getItem("Password");

  if (enteredEmail == email && enteredPassword == password) {
    window.location.pathname = "home1.html";
  } else {
    document.getElementById("error1").style.display = "block";
    document.getElementById("error").style.display = "block";
    return;
  }
  console.log(enteredEmail, enteredPassword, email, password);
});
