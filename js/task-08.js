const form = document.querySelector(".login-form");

//* Додавання атрибуту в HTML патерну та щоб виводилось повідомення, якщо пароль містить пробіли в паролі
//form.password.setAttribute('pattern', '^\\S+$');
//form.password.setAttribute('title', 'Пароль, не повинен містити пробіли!!!');

//* Додавання атрибуту з JS в HTML для неможливості вводу пробілів в паролі 
//form.password.setAttribute('onkeyup', 'this.value=this.value.replace(/\\s+/gi,"")');

//* Унеможливлювання поставити пробіл в полях вводу форми
form.addEventListener('keyup', e => {
  e.target.value = e.target.value.replace(/\s+/gi, '');
});


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


