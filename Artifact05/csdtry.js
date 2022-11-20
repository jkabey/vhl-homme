var myImages =["https://pixabay.com/get/g6eaf39c83db7b707a6bff93757f25428f2a1141bb1255490e88cc57de8f226fe3e182c6acf974abfb125a0aa31296530f342562dbc9d9ec6c22fd4fdc01f89d7367908ce82c41d98e626035961748dcc_1920.jpg", "https://pixabay.com/get/g158ac70d0cd0508e1755173fbca739b4e194776fe9d5c5b20eb30f48679475fa08d71cae6d03ecd22cd7e8b2a4cdd77468d43f96672e4f3379f6bf3730fb82eb6c933bd3a101f2eaf03a57df0fcb2af3_1920.jpg", "https://pixabay.com/get/g5e86d9ee2ed8ec04d65a704b607db8c8d61775ddf6c4cb2c4b77fac3ce050a421a13ae3e9fd3dd15a0617edbf2c2e1c5f859ca3df72c7e07dae9eb7a8cdd99ac57838a787f3828c280d3c956e26cd4df_1920.jpg", "https://pixabay.com/get/ga51daeca78f0b23d76755b1a1623987d2df851ae3ec72e40577981e59da518c83b520a9c0e2e0591b97e524e61f2cd3ee8bc9af62354581b8047da9249b871938768370616392def665d3ffb1e46e64b_1920.jpg", "https://pixabay.com/get/g8af5d7459a0313fa716bfe5400bf3da3d49c4c8a8d5ccfa80c6a1ad17ae09fc72ca727d7f615c68b2fcc14de7b02e50d935021a32277bce90b42062c7ab83dbf620850e3d57a057273831a6e4885dae6_1920.jpg"];


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
