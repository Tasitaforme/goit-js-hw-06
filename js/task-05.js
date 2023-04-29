const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

//*1-й варіант (мінус в тому, коли користувач заповнює пробілами input - не з'являється "Anonymous")
// textInput.addEventListener("input", (event) => {
//     if (event.target.value.length) {
//         textOutput.textContent = event.currentTarget.value;
//     } else
//         textOutput.textContent = "Anonymous";
// });

//*2-й варіант
textInput.addEventListener("input", (event) => {
    if (textInput.value.trim() !== '') {
      textOutput.textContent = textInput.value;
    } else textOutput.textContent = 'Anonymous';
});