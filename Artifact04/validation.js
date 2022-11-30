function ValidateForm() {
  var validUsername= false;
  var validPassword= false;
  var validFirstname= false;
    var validLastname= false;
  var letters=/^[A-Za-z]+$/;
  var numbers = /^[0=9]+$/;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validState = false;
  var validCountry = false;
  var validZipcode = false;
  var errorMessages="";
  if (myForm.firstname.value === null ||
    myForm.firstname.value === "" ||
    //value.match(letters)||
    myForm.firstname.value.length > 20 ||
    !myForm.firstname.value.match(letters))
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
  else
    validFirstname = true;
   if (myForm.lastname.value === null ||
    myForm.lastname.value === "" ||
    myForm.lastname.value.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
  else
    validLastname = true;
  if(myForm.username.value.length >12 ||
     myForm.username.value === null ||
     myForm.username.value === "" )
    errorMessages += "<p> Please enter a valid username</p>";
  else
    //console.log(validUsername);
  validUsername= true;
  if (myForm.password.value === null ||
    myForm.password.value === "" ||
    //value.match(letters)||
    myForm.password.value.length > 7)
    errorMessages += "<p>The Pasword is required and cannot be greater than 7 characters</p>";
  else
    validPassword = true;
  if (myForm.city.value === null ||
    myForm.city.value === "")
    errorMessages += "<p> This field is required is required</p>"
  else
    validCity = true;
    if (myForm.state.value === null ||
    myForm.state.value === "")
    errorMessages += "<p> This field is required</p>"
  else
    validState = true;
  if (myForm.country.value === null ||
    myForm.country.value === "")
    errorMessages += "<p> This field is required</p>";
  else
    validCountry = true;
  if (myForm.country.value === "USA" ||
    myForm.zipcode.value.lenght > 5)
    // validate Zipcode according to the rules
    errorMessages += "<p> Zipcode can't be more than 5 digits</p>";
  else
    //Zipcode is OK.  
    validZipcode = true;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length)
    // send error message.//  
    errorMessages = "<p>Invalid email</p>";
  else
    //return true; //Or assign the value to a variable. For example//
    validEmail = true;
 if (myForm.phone.value === null ||
    myForm.phone.value === "" ||
    //value.match(letters)||
    myForm.phone.value.length > 15 ||
    !myForm.phone.value.match(numbers))
    errorMessages += "<p>The Phone number is required </p>";
  else
    validPhone = true;
  document.getElementById("errorMessages").innerHTML = "errorMessages";

   return (validUsername && validPassword && validFirstname && validEmail &&
  validPhone && validUsername  && validPassword  && validAddress && validCity && validState && validCountry && validZipcode );
}
