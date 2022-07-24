
// document.querySelector("#home").addEventListener("click", home);

// function home() {
//     window.location.href = "food.html"
// }

// document.querySelector("#login").addEventListener("click", login);

// function login() {
//     window.location.href = "login.html"
// }


// document.querySelector("#signup").addEventListener("click", signup);

// function signup() {
//     window.location.href = "signup.html"
// }

//form js

import footer from "../Homepage/footer.js"

    document.getElementById("footer-top").innerHTML=footer()

let form = document.querySelector("form")
let userData = JSON.parse(localStorage.getItem("userData")) || []
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let data = {
        email: form.email.value,
        password: form.password.value
    }
    if (checkSignin(data.email, data.password) == true) {
        localStorage.setItem("signin", JSON.stringify(data))
        alert("Sign in successfull")
        window.location.href = "../sandy_gymwolf/sandy.html"
        // window.location.href="index.html"
    } else {
        alert("wrong Username or Password")
    }
})
function checkSignin(email, password) {
    let filter = userData.filter(function (element) {
        return element.email == email && element.password == password
    })
    if (filter.length > 0) {
        return true
    } else {
        return false
    }
}

// it's me 