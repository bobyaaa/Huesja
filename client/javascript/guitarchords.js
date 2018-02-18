var chords = {};
var chords2 = {};
var guitar = [];
var aMajor = new Audio('javascript/Audio/guitar/A-major.mp3');
var bMajor = new Audio('javascript/Audio/guitar/B-major.mp3');
var cMajor = new Audio('javascript/Audio/guitar/C-major.mp3');
var dMajor = new Audio('javascript/Audio/guitar/D-major.mp3');
var eMajor = new Audio('javascript/Audio/guitar/E-major.mp3');
var fMajor = new Audio('javascript/Audio/guitar/F-major.mp3');
var gMajor = new Audio('javascript/Audio/guitar/G-major.mp3');

guitar.push(aMajor); 

function startGuitar(){
	guitarChords.start();
}

var guitarChords = {
    start : function() {
    	this.interval = setInterval(updateChords,1);
        window.addEventListener('keydown', function (e) {
            chords[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            chords[e.keyCode] = false;
            chords2[e.keyCode] = false;
        })
    }
}

function updateChords() {  
	if (chords[65]&&!chords2[65]){
		aMajor.pause();
		aMajor.currentTime = 0;
		aMajor.play();
		chords2[65] = true;
	}
	if (chords[66]&&!chords2[66]){
		bMajor.pause();
		bMajor.currentTime = 0;
		bMajor.play();
		chords2[66] = true;
	}
	if (chords[67]&&!chords2[67]){
		cMajor.pause();
		cMajor.currentTime = 0;
		cMajor.play();
		chords2[67] = true;
	}
	if (chords[68]&&!chords2[68]){
		dMajor.pause();
		dMajor.currentTime = 0;
		dMajor.play();
		chords2[68] = true;
	}
	if (chords[69]&&!chords2[69]){
		eMajor.pause();
		eMajor.currentTime = 0;
		eMajor.play();
		chords2[69] = true;
	}
	if (chords[70]&&!chords2[70]){
		fMajor.pause();
		fMajor.currentTime = 0;
		fMajor.play();
		chords2[70] = true;
	}
	if (chords[71]&&!chords2[71]){
		gMajor.pause();
		gMajor.currentTime = 0;
		gMajor.play();
		chords2[71] = true;
	}
}