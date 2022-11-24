function validateform() {
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validState = false;
  var validCountry = false;
  var validZipcode = false;

  var errorMessage = "";
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0=9]+$/;



  //1) Create variable
  //var validFirstname=false;
  //2) read value from HTML
  var firstname = document.getElementById("firstname").value;
  //3) Do validation
  if (myForm.firstname.value === null ||
    myForm.firstname.value === "" ||
    //value.match(letters)||
    myForm.firstname.value.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
  else
    validFirstname = true;
  //4) Send error message to HTML
  document.getElementById("errorMessages").innerHTML = "errorMessages";

  //5) return status of each field
  //return (validFirstname);

  //1) Create variable
  //var validLastname=false;
  //2) read value from HTML
  var validLastname = document.getElementById("lastname").value;

  //3) Do validation
  if (myForm.lastname.value === null ||
    myForm.lastname.value === "" ||
    myForm.lastname.value.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
  else
    validFirstname = true;
  //4) Send error message to HMTL
  document.getElementById("errorMessages").innerHTML = "errorMessages";
  // Email//
  var userEmail = document.getElementById("email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length)
    // send error message.//  
    errorMessages = "<p>Invalid email</p>";
  else
    //return true; //Or assign the value to a variable. For example//
    validEmail = true
  document.getElementById("errorMessages").innerHTML = "errorMessages";
  //5) return status of each field
  // Phone //
  var phone = document.getElementById("phone").value;
  if (isNaN(phone) || phone.lenght > 15 || phone === null || phone === "");
  //send error message. For example errorMessages = "<p>Invalid phone number </p>";
  else
    // return true; Or assign the value to a variable. For example//
    validPhone = true;
  //5) return status of each field

  //You can also do pattern matching by using the match() method from the string object
  //var numbers=/^[0-9]+$/;
  //if (phone===null||phone ==="" ||phone.length>15|| //!phone.match(numbers))//
  //...
  //else//
  //...

  //-----Username-----//
  if (myForm.username.value === null ||
    myForm.username.value === "" ||
    myForm.username.value.length > 12)
    errorMessages += "<p> The Username must be less than 12 characters and is required</p>"
  else
    validUsername = true;
  //5) return status of each field

  //-----Password----//
  if (myForm.password.value === null ||
    myForm.password.value === "" ||
    myForm.password.value.length > 7)
    //|| value.match(numbers))
    errorMessages += "<p> The Password must be less than 7 characters and is required</p>"
  else
    validPassword = true;

  //-----City------//
  if (myForm.city.value === null ||
    myForm.city.value === "")
    errorMessages += "<p> This field is required is required</p>"
  else
    validCity = true;
  //5) return status of each field

  //-----State----//
  if (myForm.state.value === null ||
    myForm.state.value === "")
    errorMessages += "<p> This field is required</p>"
  else
    validState = true;
  //5) return status of each field


  //---------Country---------//
  var country = document.getElementById("country").value;
  if (myForm.country.value === null ||
    myForm.country.value === "")
    errorMessages += "<p> This field is required</p>";
  else
    validCountry = true;
  //5) return status of each field


  //----  Zipcode---//
  var zipcode = document.getElementById("zipcode").value;

  if (myForm.country.value === "USA" ||
    myForm.zipcode.value.lenght > 5)
    // validate Zipcode according to the rules
    errorMessages += "<p> Zipcode can't be more than 5 digits</p>";
  else
    //Zipcode is OK.  
    validZipcode = true;
  return (validFirstname && validLastname);
}
