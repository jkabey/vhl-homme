var dotColor = document.getElementById("dotColor");
var dotSize = document.getElementById("dotSize");
var mybutton = document.getElementById("mybutton");

// Stop dots on inputs
dotColor.addEventListener("click", function(event){
    event.stopImmediatePropagation();
});

dotSize.addEventListener("click", function(event){
    event.stopImmediatePropagation();
});

// Create Dots
addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";

    dot.style.height = dotSize.value + "px";
    dot.style.width = dotSize.value + "px";

    dot.style.background = dotColor.value;

    dot.style.left = (event.pageX) + "px";
    dot.style.top = (event.pageY) + "px";

    document.body.appendChild(dot);
});

// Clear dots
var  mybutton = document.querySelector("mybutton");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}
    
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    event.stopPropagation();
});

