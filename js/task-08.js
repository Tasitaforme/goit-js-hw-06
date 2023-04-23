const form = document.querySelector(".login-form");

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    
    const {elements: { email, password },
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені");
    } else {
        const user = {
            email: email.value,
            password: password.value,
        };
        console.log(user);
    }
    event.currentTarget.reset();    
};
