# FormHandling Tast

```html
  <input type="text" id="username">
  <input type="password" id="pass">
  <input type="text" id="conPass">

  <button onclick="submitHandler()">Submit</button>

  <p id="output"></p>
```

```js
function submitHandler() {
  try {
    const username = document.getElementById("username").value
    const pass = document.getElementById("pass").value
    const conPass = document.getElementById("conPass").value
    const output = document.getElementById("output")

    output.innerHTML = ""

    if (!username) throw "Username is required"
    if (!pass) throw "Password is required"
    if (!conPass) throw "Confirm Password is required"
    if (pass !== conPass) throw "Password and confirm password not mach"

    output.innerHTML = "User is created successfully"


  } catch (err) {
    output.innerHTML = err
  }
}
```