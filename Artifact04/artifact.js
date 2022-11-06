function validateform(){
var validFirstname=false;
var validLastname=false;
var errorMessage="";	
}

//1) Create variable
var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("firstname").value;
//3) Do validation
if (firstname==="null" || 
firstname==="" || 
firstname.length > 20)
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
if (lastname==="null" || lasttname==="" || lastname.length > 20)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
else
   validFirstname = true;
//4) Send error message to HMTL
document.getElementById("errorMessages").innerHTML = errorMessages;
//5) return status of each field
return (validFirstname && validLastname);
// Email//
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    // send error message.//  
    errorMessages = "<p>Invalid email</p>";
else
    //return true; //Or assign the value to a variable. For example//
    validEmail = true
    document.getElementById("errorMessages").innerHTML = errorMessages;
    // Phone //
 var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
//send error message. For example errorMessages = "<p>Invalid phone number </p>";
else
 // return true; Or assign the value to a variable. For example//
 validPhone = true;

//You can also do pattern matching by using the match() method from the string object
//var numbers=/^[0-9]+$/;
//if (phone===null||phone ==="" ||phone.length>15|| //!phone.match(numbers))//
//...
//else//
//...

//-----Username-----//
if (theContact, username, value, lenght >12 ||
    theContact, username, value===null ||
    theContact, username, value==="")
    errorMessages += "<p> The Username must be less than 12 characters and is required</p>"
    else
    validUsername = true;

//-----Password----//
if (theContact, Password, value, lenght >7 ||
    theContact, Password, value===null ||
    theContact, Password, value==="")
    errorMessages += "<p> The Password must be less than 12 characters and is required</p>"
    else
    validPassword = true;

//-----City------//
if (theContact, , value, lenght >12 ||
    theContact, , value===null ||
    theContact, , value==="")
    errorMessages += "<p> The must be less than 12 characters and is required</p>"
    else
    validCity = true;

//-----State----//
if (theContact, , value, lenght >12 ||
    theContact, , value===null ||
    theContact, , value==="")
    errorMessages += "<p> This field is required</p>"
    else
    validCity = true;


//---------Country---------//
  var country = document.getElementById("country").value;
if (country === "USA)
// validate Zipcode according to the rules
else
//Zipcode is OK. For example: validZipcode = true;
    
    if(theContact, password, value===null ||
        theContact, password, value=="" ||
        theContact, password, value, length > 7)
	erorMessage +=" <p>The Password must be less than and it is required</p>"
	else
		validUserPassword = true
	
document.getElementById("errorMessages").innerHTML = errorMessages;
return (valid Username and validuserPassword)
//----  Zipcode---//
var country = document.getElementById("country").value;
if (country === "USA)
// validate Zipcode according to the rules
else
//Zipcode is OK. For example: validZipcode = true;
//------comments----//
