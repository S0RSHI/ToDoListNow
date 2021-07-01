//Popup
function Popup(BlurId){
	var settingPopup = document.getElementById(BlurId);

	// Show/Hide popup
	if(settingPopup.style.display=='flex')
		settingPopup.style.display='none';
	else
		settingPopup.style.display='flex';
}
// Background img
window.onload = loadBackground();

function settingSave(){
	var url = document.getElementById('backgroundLink');

	// Set item to loacl storage
	localStorage.setItem('urlImage', url.value);
	loadBackground();
	Popup('settingContainer');
}

function loadBackground(){
	
	// Get item to loacl storage
	var img = 'url('+localStorage.getItem('urlImage')+')';
	var body = document.getElementsByTagName('body')[0];

	// Set background img
	if(localStorage.getItem('urlImage')!=''){
		body.style.backgroundImage = img;
	}else{
		body.style.backgroundImage = null;
	}
}

//console.log(localStorage.getItem(localStorage.key(i)));
// List management

howManyTask = 0;

function addTask(){
	var newTask = document.createElement('div');
	document.getElementById('tasks').appendChild(newTask);
	var textTask = document.createElement('textarea');
	newTask.appendChild(textTask);
	newTask.classList.add('task');
	textTask.classList.add('taskText');
	howManyTask++;
}

function clearTask(){
	if(howManyTask>0)
		for( i = 0; i < howManyTask; i++){
			document.getElementsByClassName('task')[1].remove();
		}
	howManyTask = 0;
}