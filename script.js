var input = document.getElementById('userInput');
var enter = document.getElementById('enter');
var item = document.querySelector('ul');
var list = document.getElementsByTagName('li');


function addListItem() {
	if (input.value.length !== 0) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));

		document.getElementById('list').appendChild(li);

		var deleteButton = document.createElement('button');
		deleteButton.classList.add('delete', 'fa', 'fa-trash');
		li.insertBefore(deleteButton, li.firstChild);
		input.value = "";

		deleteButton.addEventListener("click", function(e){
		e.target.parentNode.remove();
	});
	}
};

enter.addEventListener("click", function() {
	addListItem();
});

input.addEventListener("keypress", function(event) {
	if (event.keyCode === 13) {
		addListItem();
	}
});

item.addEventListener("click", function(e){
	var target = e.target;
	target.classList.toggle('done');
});

for (i=0; i < list.length; i++) {
	var deleteButton = document.createElement('button');
	deleteButton.classList.add('delete', 'fa', 'fa-trash');
	list[i].insertBefore(deleteButton, list[i].firstChild);

	deleteButton.addEventListener("click", function(e){
		e.target.parentNode.remove();
	});
};

