function validateform(){
var validFirstname= false;
var validLastname= false;
var validEmail= false;	
var validPhone= false;	
var validUsername= false;	
var validPassword= false;	
var validAddress= false;	
var validCity= false;	
var validState= false;	
var validCountry= false;	
var validZipcode= false;	

var errorMessage="";
var letters = /^[A-Za-z]+$/;
vae numbers = /^[0=9]+$/;	
	
}

//1) Create variable
var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("firstname").value;
//3) Do validation
if (firstname==="null" || 
firstname==="" || value.match(letters)||
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
if (lastname==="null" || lastname==="" || lastname.length > 50)
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
if (username==="null" || username==="" || username.length > 12))
    errorMessages += "<p> The Username must be less than 12 characters and is required</p>"
    else
    validUsername = true;

//-----Password----//
if (password==="null" || password==="" || password.length > 7 || value.match(numbers))
    errorMessages += "<p> The Password must be less than 7 characters and is required</p>"
    else
    validPassword = true;

//-----City------//
if (city==="null" || city==="")
    errorMessages += "<p> This field is required is required</p>"
    else
    validCity = true;

//-----State----//
if (state==="null" || state==="")
    errorMessages += "<p> This field is required</p>"
    else
    validCity = true;


//---------Country---------//
  var country = document.getElementById("country").value;
if (country==="null" || country==="")
    errorMessages += "<p> This field is required</p>"
    else
    validCountry = true;
	

//----  Zipcode---//
var country = document.getElementById("country").value;
if (country === "USA"|| zipcode.lenght>5)
// validate Zipcode according to the rules
	 errorMessages += "<p> Zipcode can't be more than 5 digits</p>
else
//Zipcode is OK.  
	validZipcode = true;

