var drums = {};
var drums2 = {};
var drum = [];
var hihatclosed = new Audio('javascript/Audio/drums/hihatclosed.mp3');
var hihatopen = new Audio('javascript/Audio/drums/hihatopen.mp3');
var ridecymbal = new Audio('javascript/Audio/drums/ridecymbal.mp3');
var crashcymbal = new Audio('javascript/Audio/drums/crashcymbal.mp3');
var snarelong = new Audio('javascript/Audio/drums/snarelong.mp3');
var snareshort = new Audio('javascript/Audio/drums/snareshort.mp3');
var tomtomhigh = new Audio('javascript/Audio/drums/tomtomhigh.mp3');
var tomtomlow = new Audio('javascript/Audio/drums/tomtomlow.mp3');
var bass = new Audio('javascript/Audio/drums/bass.mp3');

drum.push(hihatclosed);
drum.push(hihatopen);
drum.push(ridecymbal);
drum.push(crashcymbal);
drum.push(snarelong);
drum.push(snareshort);
drum.push(tomtomhigh); 
drum.push(tomtomlow);
drum.push(bass);

function startDrums(){
	drumming.start();
}

var drumming = {
    start : function() {
    	this.interval = setInterval(updateDrums,1);
        window.addEventListener('keydown', function (e) {
            drums[e.keyCode] = true;
            console.log(e.keyCode);
        })
        window.addEventListener('keyup', function (e) {
            drums[e.keyCode] = false;
            drums2[e.keyCode] = false;
        })
    }
}

function updateDrums() {  
	if (drums[32]&&!drums2[32]){
        bass.pause();
        bass.currentTime = 0;
        bass.play();
        drums2[32] = true;
        socket.emit('playDrums', 8);
    }
    if (drums[82]&&!drums2[82]){
        crashcymbal.pause();
        crashcymbal.currentTime = 0;
        crashcymbal.play();
        drums2[82] = true;
        socket.emit('playDrums', 3);
    }
    if (drums[85]&&!drums2[85]){
        ridecymbal.pause();
        ridecymbal.currentTime = 0;
        ridecymbal.play();
        drums2[85] = true;
        socket.emit('playDrums', 2);
    }
    if (drums[84]&&!drums2[84]){
        tomtomlow.pause();
        tomtomlow.currentTime = 0;
        tomtomlow.play();
        drums2[84] = true;
        socket.emit('playDrums', 7);
    }
    if (drums[89]&&!drums2[89]){
        tomtomhigh.pause();
        tomtomhigh.currentTime = 0;
        tomtomhigh.play();
        drums2[89] = true;
        socket.emit('playDrums', 6);
    }
    if (drums[71]&&!drums2[71]){
        snareshort.pause();
        snareshort.play();
        snareshort.currentTime = 0;
        drums2[71] = true;
        socket.emit('playDrums', 5);
    }
    if (drums[72]&&!drums2[72]){
        snarelong.pause();
        snarelong.currentTime = 0;
        snarelong.play();
        drums2[72] = true;
        socket.emit('playDrums', 4);
    }
    if (drums[87]&&!drums2[87]){
        if (drums[16]){
            hihatclosed.pause();
            hihatclosed.currentTime = 0;
            hihatclosed.play();
            socket.emit('playDrums', 0);
        }else{
            hihatopen.pause();
            hihatopen.currentTime = 0;
            hihatopen.play();
            socket.emit('playDrums', 1);
        }
        drums2[87] = true;
    }
}