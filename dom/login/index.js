const onSubmit = () => {
    const registerForm = document.getElementById("registerForm");

    if (format.checkValidity()){
        form.classList.add('was-validated');
        
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const bio = document.getElementById("bio").value;

        console.log(firstName, lastName, password, email, bio);
    } else {
        console.log("Form not valid");
    }
    
    registerForm.classList.add("was-validated");
}

