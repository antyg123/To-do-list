//function create and add item
//click add button
//gather text from input
//create a list item
//create a checkbox input
//insert the list item in the ul
//insert the checkbox into the li

//function check item
//checkbox is clicked
//item takes a line through it and turns grey


//function remove item

var addButton = document.getElementById('submitButton');
var list = document.querySelector('.list')
addButton.addEventListener('click', function(){
    var newItem = document.createElement("li");
    var newContent = document.getElementById("submitText").value;
    newItem.insertAdjacentElement('afterend', newContent); //this is the problem**
    document.getElementById("list").appendChild(newItem);
});
