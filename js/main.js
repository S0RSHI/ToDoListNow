//Popup
function Popup(BlurId){
	let settingPopup = document.getElementById(BlurId);

	// Show/Hide popup
	if(settingPopup.style.display=='flex')
		settingPopup.style.display='none';
	else
		settingPopup.style.display='flex';
}
// Background img
window.onload = loadBackground();

function settingSave(){
	let url = document.getElementById('backgroundLink');

	// Set item to loacl storage
	localStorage.setItem('urlImage', url.value);
	loadBackground();
	Popup('settingContainer');
}

function loadBackground(){
	
	// Get item to loacl storage
	let img = 'url('+localStorage.getItem('urlImage')+')';
	let body = document.getElementsByTagName('body')[0];

	// Set background img
	if(localStorage.getItem('urlImage')!=''){
		body.style.backgroundImage = img;
	}else{
		body.style.backgroundImage = null;
	}
}

//console.log(localStorage.getItem(localStorage.key(i)));
// List management

function addTask(){
	let newTask = document.createElement('div');
	let textTask = document.createElement('textarea');
	document.getElementById('tasks').appendChild(newTask);
	newTask.appendChild(textTask);
	newTask.classList.add('task');
	textTask.classList.add('taskText');
}

function clearAll(){
	//Task
	let listy = document.querySelectorAll('.task');
	listy.forEach((element, index) => {
		if(index == 0) return;
		element.remove(); 
	});


	//Input
	let input = document.querySelectorAll('input');
	input.forEach(element => {
		element.value = null;
	});

	//Textarea
	let textarea = document.querySelectorAll('textarea');
	textarea.forEach(element => {
		element.value = null;
	});
}