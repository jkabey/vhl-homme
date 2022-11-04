frmvalidator.addValidation("FirstName","req","Please enter your First Name");
frmvalidator.addValidation("FirstName","maxlen=40",
                                          "Max length for FirstName is 40");
var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
		"Max length for FirstName is 20");

 frmvalidator.addValidation("LastName","req");
 frmvalidator.addValidation("LastName","maxlen=20");

 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");

 frmvalidator.addValidation("Phone","maxlen=50");
 frmvalidator.addValidation("Phone","numeric");

 frmvalidator.addValidation("Address","maxlen=50");
 frmvalidator.addValidation("Country","dontselect=000");


//1) Create variable
var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("firstname").value;
//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstname);
//1) Create variable
var validLastname=false;
//2) read value from HTML
var validLastname = document.getElementById("lastname").value;

//3) Do validation
//4) Send error message to HMTL
//5) return status of each field
return (validFirstname && validLastname);
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
else
    return true; //Or assign the value to a variable. For example validEmail = true
  var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
//send error message. For example errorMessages = "<p>Invalid phone number </p>";
else
  return true; //Or assign the value to a variable. For example validPhone = true;

//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
//...
else
//...
  var country = document.getElementById("country").value;
if (country === "USA)
// validate Zipcode according to the rules
else
//Zipcode is OK. For example: validZipcode = true;
