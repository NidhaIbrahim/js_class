function validate() {
    let name = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let male = document.getElementById("male").value;
    let female = document.getElementById("female").value;
    let gender = document.querySelector('input[name = "gender"]:checked');
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm").value;

    let name_err = document.getElementById("name_err");
    let age_err = document.getElementById("age_err");
    let gender_err = document.getElementById("gender_err");
    let email_err = document.getElementById("email_err");
    let contact_err = document.getElementById("contact_err");
    let username_err = document.getElementById("username_err");
    let password_err = document.getElementById("password_err");
    let confirm_password_err = document.getElementById("confirm_err");

    // status = 1;
    status = true;

    if (name == "") {
        // status = 0;
        status = false;
        name_err.innerHTML = "please enter name";
        name_err.style.color = "red";
        // return false;
    }
    else {
        name_err.innerHTML = "";
        name_err.style.color = "";
        // status = 1;
    }

    if (age == "") {
        // status = 0;
        status = false;
        age_err.innerHTML = "please enter age";
        age_err.style.color = "red";
        // return false;
    }
    else {
        age_err.innerHTML = "";
        age_err.style.color = "";
        // status = 1
    }

    if(!gender){
        // status = 0;
        status = false;
        gender_err.innerHTML = "please select gender";
        gender_err.style.color = "red";
    }
    else{
        // status = 1;
        gender_err.innerHTML = "";
        gender_err.style.color = "";
    }

    if (email == "") {
        // status = 0;
        status = false;
        email_err.innerHTML = "please enter email";
        email_err.style.color = "red";
        // return false;
    }
    else {
        // status = 1;
        email_err.innerHTML = "";
        email_err.style.color = "";
    }

    if (contact == "") {
        // status = 0;
        status = false;
        contact_err.innerHTML = "please enter phone number";
        contact_err.style.color = "red";
        // return false;
    }
    else {
        // status = 1;
        contact_err.innerHTML = "";
        contact_err.style.color = "";
    }

    if (username == "") {
        // status = 0;
        status = false;
        username_err.innerHTML = "please enter username";
        username_err.style.color = "red";
        // return false;
    }
    else {
        // status = 1;
        username_err.innerHTML = "";
        username_err.style.color = "";
    }

    if (password == "") {
        // status = 0;
        status = false;
        password_err.innerHTML = "please enter password";
        password_err.style.color = "red";
        // return false;
    }
    else {
        // status = 1;
        if(password.length < 8 && (password[0] >= "A" && password[0] <= "Z")) {
            password_err.innerHTML = "minimum 8 characters, must contain atleast one capital";
            password_err.style.color = "red"; 
        }
        else {
            password_err.innerHTML = "";
            password_err.style.color = "";
        }

    }

    if (confirm_password == "") {
        // status = 0;
        status = false;
        confirm_password_err.innerHTML = "please enter password";
        confirm_password_err.style.color = "red";
        // return false;
    }
    else {
        // status = 1;
        confirm_password_err.innerHTML = "";
        confirm_password_err.style.color = "";
    }
    // if(status == 0){
    //     return false;
    // }
    return status;
}