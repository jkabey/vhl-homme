var myImages =["https://www.c3houston.org/wp-content/uploads/AdobeStock_198777250-min.jpeg", "https://friendsofhwange.com/wp-content/uploads/2013/07/Elephant-036.jpg", "https://i.pinimg.com/originals/ca/84/68/ca8468eccc3a5ae88e7e72a5926a5c23.jpg", "https://kidssearch.com/picsearch/images/okapi-pic-1600x1067-8c4a6c2.png", "https://i.pinimg.com/originals/5a/54/57/5a54573670a735eb378637a108f65e4f.jpg"];
               
var captionImages =["Father&son", "Elephants", "BlackMother","Okapi", "Rarest"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
