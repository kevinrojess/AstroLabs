function register() {
  // 1. Get all the text fields using document.getElementsByClassName();
  var fields = document.getElementsByClassName("form-control");

  // 2. Assign to these variables the corresponding fields
  //    firstNameField, lastNameField, emailField, passwordField
  var firstNameField = fields[0];
  var lastNameField = fields[1];
  var emailField = fields[2];
  var passwordField = fields[3];

  var errors = [];

  // 3. Use the appropriate control statements to validate the fields
  //    Note: for now, only check if the field is empty

  // 4. If any field is empty, push the error into the errors array
  // e.g, "Please enter your first name"

  if (firstNameField.value.length === 0) {
    errors.push("Please enter your first name");
  }

  if (lastNameField.value.length === 0) {
    errors.push("Please enter your last name");
  }

  if (emailField.value.length === 0) {
    errors.push("Please enter your email");
  }

  if (passwordField.value.length === 0) {
    errors.push("Please enter your password");
  }

  // 8. Reset the state of the alert boxes
  var errorsAlertBox = document.getElementsByClassName("alert-danger")[0];
  errorsAlertBox.className = "alert alert-danger mt-3 d-none";
  errorsAlertBox.innerHTML = "";

  // 5. Reveal results to user
  if (errors.length > 0) {
    var errorsAlertBox = document.getElementsByClassName("alert-danger")[0];
    errorsAlertBox.classList.remove("d-none");

    // 6. Replace the text inside the errors alert box with the errors
    // in the 'errors' array. In other words,
    // "Please enter your first name"
    // "Please enter your last name"
    // etc.

    errorsAlertBox.innerHTML = errors.join("<br/>");
  } else {
    // 7. Make the success alert box appear
    var successAlertBox = document.getElementsByClassName("alert-success")[0];
    successAlertBox.classList.remove("d-none");
  }
}
