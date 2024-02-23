const input = document.querySelector("#emailField");
const errorMsg = document.querySelector("#errorText");

input.addEventListener("blur", () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const email = input.value.trim();

    if (!emailRegex.test(email)) {
        input.classList.add("error");
        errorMsg.classList.add("error-text");
        errorMsg.textContent = "Please provide a valid email address";
    }
    else {
        input.classList.remove("error");
        errorMsg.classList.remove("error-text");
        errorMsg.textContent = "";
    }
});