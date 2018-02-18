var vchords = {};
var vchords2 = {};
var aSharp = new Audio('javascript/Audio/violin/Asharp.mp3');
var a = new Audio('javascript/Audio/violin/A.mp3');
var b = new Audio('javascript/Audio/violin/B.mp3');
var cSharp = new Audio('javascript/Audio/violin/Csharp.mp3');
var c = new Audio('javascript/Audio/violin/C.mp3');
var dSharp = new Audio('javascript/Audio/violin/Dsharp.mp3');
var d = new Audio('javascript/Audio/violin/D.mp3');
var e = new Audio('javascript/Audio/violin/E.mp3');
var fSharp = new Audio('javascript/Audio/violin/Fsharp.mp3');
var f = new Audio('javascript/Audio/violin/F.mp3');
var gSharp = new Audio('javascript/Audio/violin/Gsharp.mp3');
var g = new Audio('javascript/Audio/violin/G.mp3');

function startViolin(){
	violinChords.start();
}

var violinChords = {
    start : function() {
    	this.interval = setInterval(updateVchords,1);
        window.addEventListener('keydown', function (e) {
            vchords[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            vchords[e.keyCode] = false;
            vchords2[e.keyCode] = false;
        })
    }
}

function updateVchords() {  
	if (vchords[16]){
		if (vchords[65]&&!vchords2[65]){
			aSharp.pause();
			aSharp.currentTime = 0;
			aSharp.play();
			vchords2[65] = true;
		}
		if (vchords[67]&&!vchords2[67]){
			cSharp.pause();
			cSharp.currentTime = 0;
			cSharp.play();
			vchords2[67] = true;
		}
		if (vchords[68]&&!vchords2[68]){
			dSharp.pause();
			dSharp.currentTime = 0;
			dSharp.play();
			vchords2[68] = true;
		}
		if (vchords[70]&&!vchords2[70]){
			fSharp.pause();
			fSharp.currentTime = 0;
			fSharp.play();
			vchords2[70] = true;
		}
		if (vchords[71]&&!vchords2[71]){
			gSharp.pause();
			gSharp.currentTime = 0;
			gSharp.play();
			vchords2[71] = true;
		}
	}else{
		if (vchords[65]&&!vchords2[65]){
			a.pause();
			a.currentTime = 0;
			a.play();
			vchords2[65] = true;
		}
		if (vchords[66]&&!vchords2[66]){
			b.pause();
			b.currentTime = 0;
			b.play();
			vchords2[66] = true;
		}
		if (vchords[67]&&!vchords2[67]){
			c.pause();
			c.currentTime = 0;
			c.play();
			vchords2[67] = true;
		}
		if (vchords[68]&&!vchords2[68]){
			d.pause();
			d.currentTime = 0;
			d.play();
			vchords2[68] = true;
		}
		if (vchords[69]&&!vchords2[69]){
			e.pause();
			e.currentTime = 0;
			e.play();
			vchords2[69] = true;
		}
		if (vchords[70]&&!vchords2[70]){
			f.pause();
			f.currentTime = 0;
			f.play();
			vchords2[70] = true;
		}
		if (vchords[71]&&!vchords2[71]){
			g.pause();
			g.currentTime = 0;
			g.play();
			vchords2[71] = true;
		}
	}
}