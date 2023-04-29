const textInput = document.querySelector("#validation-input");

//*1-й варіант (мінус в тому, що враховуються пробіли в input)
//const rightlength = Number(textInput.getAttribute("data-length"));
//або const rightlength = +textInput.dataset.length;

// textInput.addEventListener("blur", () => {
//     if (textInput.value.length === rightlength) {
//         textInput.classList.remove("invalid");
//         textInput.classList.add("valid");
//     } else {
//     textInput.classList.add("invalid");
//     textInput.classList.remove("valid");
// }
// });

//*2-й варіант
textInput.addEventListener("blur", () => {
    const { value, dataset, classList } = textInput;
    
    const isLengthValid = value.trim().length === Number(dataset.length);
  
    classList.remove('valid', 'invalid');
    classList.add(isLengthValid ? 'valid' : 'invalid');
});