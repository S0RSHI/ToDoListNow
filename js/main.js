window.onload = loadBackground();

function settingPopup(){
	var settingPopup = document.getElementById('settingContainer');
	if(settingPopup.style.display=='flex')
		settingPopup.style.display='none';
	else
		settingPopup.style.display='flex';
}

function settingSave(){
	var url = document.getElementById('backgroundLink');

	// Set item to loacl storage
	localStorage.setItem('urlImage', url.value);
	loadBackground();
	settingPopup();
}

function loadBackground(){
	
	// Get item to loacl storage
	var img = 'url('+localStorage.getItem('urlImage')+')';
	var body = document.getElementsByTagName('body')[0];
	if(localStorage.getItem('urlImage')!=''){
		body.style.backgroundImage = img;
	}else{
		body.style.backgroundImage = null;
	}
}