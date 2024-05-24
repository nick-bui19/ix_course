const onSubmit = () => {
    const registerForm = document.getElementById("registerForm");

    if (registerForm.checkValidity()){
        registerForm.classList.add('was-validated');
        
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const bio = document.getElementById("bio").value;

        console.log(firstName, lastName, password, email, bio);
    } else {
        console.log("Form not valid");
    }

    validateFormFields(registerForm);
}

const validateFormFields = (form) => {
    const fields = form.querySelectorAll('input, textarea');

    fields.forEach(field => {
        if (!field.checkValidity()) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
        } else {
            field.classList.add('is-valid');
            field.classList.remove('is-invalid');
        }
    });
}