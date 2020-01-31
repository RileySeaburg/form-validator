// Start Project
// Code Courtesey of @TraversyMedia
// Part of Riley Seaburg's Portfolio

// Declare HTML Elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// General Functions
// Show Input Error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}
// Check Required Fields
function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        console.log(input.value);
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
        
    });

}

// Check input Length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Verify Passwords Match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Define Get Field Name Function
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Basic Validation Statement
    // console.log(username.value);
    // if (username.value === '') {
    //     showError(username, 'Error a username is required')
    // } else {
    //     showSuccess(username);
    // }
    // if (email.value === '') {
    //     showError(email, 'Error a email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'The email you entered is not valid');

    // } else {
    //     showSuccess(email);
    // }
    // if (password.value === '') {
    //     showError(password, 'Error a password is required')
    // } else {
    //     showSuccess(password);
    // }
    // if (password2.value === '') {
    //     showError(password2, 'Error a password confirmation is required')
    // } else {
    //     showSuccess(password2);
    // }

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 5, 25);
    checkPasswordsMatch(password, password2);
})

