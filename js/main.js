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

// List management
