
   document.getElementById("btnAddElement").addEventListener("click",addItem );


function addItem(){
   document.getElementById("btnAddElement").innerHTML = (newItem);
var newItem=
document.getElementById("items").value;

// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode(newItem);


// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);
}
let btn_element = document.getElementById("btnAddElement");
  
        btn_element.addEventListener("click", () => {
            document.getElementById("items")
                .innerHTML = "newItem
";
        })
