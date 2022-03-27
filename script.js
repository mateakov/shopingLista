var button = document.getElementById ("enter");
var input = document.getElementById ("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll ("#nav>ul>li");


//toggle
var list_items = document.querySelectorAll('#nav>ul>li');

for (var i = 0; i < list_items.length; i++) {
list_items[i].addEventListener("click", toggle);
}

function toggle() {
  this.classList.toggle("done");
}

//

function inputLength() {
	return input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
}



button.addEventListener("click", function() {
	if (inputLength() > 0)	{
	createListElement ();
	}
})

 input.addEventListener("keypress", function(event) {
	if (inputLength() > 0 && event.keyCode === 13)	{
	createListElement();
	}
})

 for (var i = 0; i < list_items.length; i++) {
  list_items[i].addEventListener("click", toggle);
}




//*BUTTON I KLIKANJE**\\
//var button = document.getElementsByTagName("button") [0];

//button.addEventListener("mouseleave", function() {
//	console.log("CLICK!!");
//})