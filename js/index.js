const form = document.querySelector("#form")
const button = document.querySelector(".button");
const input = document.querySelector(".email-input");

button.addEventListener('click', (event) => {
    event.preventDefault();

    const email = input.value
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const isValid = emailRegex.test(email)

    if(!isValid) {
        form.classList.toggle("error")
    }
})