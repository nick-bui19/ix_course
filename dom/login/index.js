const onSubmit = () => {
    //fetching the form by id "registerForm" so you can work with the fields in the form
    const registerForm = document.getElementById("registerForm");

    //checkValid() method
    if (format.checkValidity()){
        //adds "was-validated" to form element. In Bootstrap, this triggers the display of 
        //validation feedback. Bootstrap will apply styles to the form based on whether they are 
        //valid or invalid.
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
}

