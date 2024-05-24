const onSubmit = () => {
    //fetching the form by id "registerForm" so you can work with the fields in the form
    const loginForm = document.getElementById("loginForm");

    //checkValid() method
    if (loginForm.checkValidity()){
        //adds "was-validated" to form element. In Bootstrap, this triggers the display of 
        //validation feedback. Bootstrap will apply styles to the form based on whether they are 
        //valid or invalid.
        loginForm.classList.add('was-validated');
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log(email, password);
    } else {
        console.log("Form not valid");
    }

    validateFormFields(loginForm);
}

//display green for valid and red for invalid based on bootstrap
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
