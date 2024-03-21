function submitForm() {
  try {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const conPass = document.getElementById("conPass").value;

    if (!(username || email)) throw "Reqire username/email";
    if (!pass) throw "password field is blank";
    if (!conPass) throw "Confirm Password field is blank";
    if (pass.length < 6) throw "Require 6 degistess password";
    if (pass !== conPass) throw "Password and confirm password not match";

    if ((username, email, pass, conPass)) throw "User register successfully";
  } catch (x) {
    document.getElementById("errorText").innerHTML = x;
  } finally {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("conPass").value = "";
  }
}

const icon = document.querySelector(".icon");
const pass = document.getElementById("pass");
icon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
let init = false;

function showPass() {
  if (init === false) {
    icon.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    init = true;
    pass.setAttribute("type", "text");
  } else {
    icon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    init = false;
    pass.setAttribute("type", "password");
  }
}
