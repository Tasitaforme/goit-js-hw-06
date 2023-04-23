const textInput = document.querySelector("#validation-input");
const rightlength = Number(textInput.getAttribute("data-length"));
//або const rightlength = +textInput.dataset.length;

textInput.addEventListener("blur", () => {
    if (textInput.value.length === rightlength) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
}
});
