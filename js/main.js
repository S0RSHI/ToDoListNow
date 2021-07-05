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

// List management
function addTask(){
	let newTask = document.createElement('div');
	let textTask = document.createElement('textarea');
	textTask.setAttribute("maxlength","128");
	document.getElementById('tasks').appendChild(newTask);
	newTask.appendChild(textTask);
	newTask.classList.add('task');
	textTask.classList.add('taskText');
}

function listSave(){
	let title = document.querySelector('#listTitle');
	let task = document.querySelectorAll('.taskText');

	//Check if the lists exist in local storage
	lists = JSON.parse(localStorage.getItem('listsStr')) || [];

	//Creating an object to add
	let all = {
		name: title.value,
		tasks: [...task].map( (el, index) => ({
            text: el.value,
            done: false
        }))
	};
	
	//Sending JSON to local storage
	lists.push(all);
	let listsStr = JSON.stringify(lists);
	localStorage.setItem('listsStr', listsStr);
}

//Clear
function clearAll(){
	//Task
	let lists = document.querySelectorAll('.task');
	lists.forEach((element, index) => {
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

function deleteList(listNumber){
	allLists = JSON.parse(localStorage.getItem('listsStr'));
	//Delte empty object in JSON
	lists = [];
	allLists.forEach((x, y) => {
		if(y != listNumber){
			lists.push(x);
		}
	});

	//Send or delete item in local storage
	if(lists != ''){
		let listsStr = JSON.stringify(lists);
		localStorage.setItem('listsStr', listsStr);
	}else{
		localStorage.removeItem('listsStr');
	}

	removeAllList();
	createList();
}

//Create all list on page
function createList(){
	let lists = JSON.parse(localStorage.getItem('listsStr')) || false;

	//Check if item exist in local storage
	if(lists != false){
		let main = document.getElementsByTagName('main')[0];

		//Create all div
		lists.forEach((obj, index) => {
			let toDoContainer = document.createElement('div');
			toDoContainer.className = 'toDoContainer';

			let toDoTitle = document.createElement('div');
			toDoTitle.className = 'toDoTitle';
			toDoTitle.innerHTML = obj.name;

			let toDoTaskContainer = document.createElement('div');
			toDoTaskContainer.className = 'toDoTaskContainer';

			//Insert one div into another
			main.appendChild(toDoContainer);
			toDoContainer.appendChild(toDoTitle);
			toDoContainer.appendChild(toDoTaskContainer);

			//Create task div
			obj.tasks.forEach((task, taskIndex) => {
				let toDoTask = document.createElement('div');
				toDoTask.className = 'toDoTask';
				toDoTask.setAttribute("onclick","change("+index+","+taskIndex+");");

				if(task.done == true)
					toDoTask.className += ' done';

				toDoTask.innerHTML = task.text;
				toDoTaskContainer.appendChild(toDoTask);
			});

			//Create delete div
			let deleteList = document.createElement('div');
			deleteList.className = 'delete';
			deleteList.setAttribute("onclick","deleteList("+index+");");
			deleteList.innerHTML = 'Delete';
			toDoContainer.appendChild(deleteList);
		});
	}
}

//Clear all lists on page
function removeAllList(){
	let allList = document.querySelectorAll('.toDoContainer');
	allList.forEach((el, index) => {
		document.getElementsByClassName('toDoContainer')[0].remove();
	});
}

//Change task
function change(listIndex, taskIndex){
	let lists = JSON.parse(localStorage.getItem('listsStr'));
	let task = lists[listIndex].tasks[taskIndex].done;

	if(task){
		lists[listIndex].tasks[taskIndex].done = false;
	}else{
		lists[listIndex].tasks[taskIndex].done = true;
	}

	let listsStr = JSON.stringify(lists);
	localStorage.setItem('listsStr', listsStr);

	removeAllList();
	createList();
}
window.onload = createList();