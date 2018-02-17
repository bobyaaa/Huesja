var keys = {};
var keys2 = {};
var octave = 3;
var pianoA0 = new Audio('Audio/piano/Piano.ff.A0.mp3');
var pianoA1 = new Audio('Audio/piano/Piano.ff.A1.mp3');
var pianoA2 = new Audio('Audio/piano/Piano.ff.A2.mp3');
var pianoA3 = new Audio('Audio/piano/Piano.ff.A3.mp3');
var pianoA4 = new Audio('Audio/piano/Piano.ff.A4.mp3');
var pianoA5 = new Audio('Audio/piano/Piano.ff.A5.mp3');
var pianoA6 = new Audio('Audio/piano/Piano.ff.A6.mp3');
var pianoA7 = new Audio('Audio/piano/Piano.ff.A7.mp3');
var pianoAb1 = new Audio('Audio/piano/Piano.ff.Ab1.mp3');
var pianoAb2 = new Audio('Audio/piano/Piano.ff.Ab2.mp3');
var pianoAb3 = new Audio('Audio/piano/Piano.ff.Ab3.mp3');
var pianoAb4 = new Audio('Audio/piano/Piano.ff.Ab4.mp3');
var pianoAb5 = new Audio('Audio/piano/Piano.ff.Ab5.mp3');
var pianoAb6 = new Audio('Audio/piano/Piano.ff.Ab6.mp3');
var pianoAb7 = new Audio('Audio/piano/Piano.ff.Ab7.mp3');
var pianoB0 = new Audio('Audio/piano/Piano.ff.B0.mp3');
var pianoB1 = new Audio('Audio/piano/Piano.ff.B1.mp3');
var pianoB2 = new Audio('Audio/piano/Piano.ff.B2.mp3');
var pianoB3 = new Audio('Audio/piano/Piano.ff.B3.mp3');
var pianoB4 = new Audio('Audio/piano/Piano.ff.B4.mp3');
var pianoB5 = new Audio('Audio/piano/Piano.ff.B5.mp3');
var pianoB6 = new Audio('Audio/piano/Piano.ff.B6.mp3');
var pianoB7 = new Audio('Audio/piano/Piano.ff.B7.mp3');
var pianoBb0 = new Audio('Audio/piano/Piano.ff.Bb0.mp3');
var pianoBb1 = new Audio('Audio/piano/Piano.ff.Bb1.mp3');
var pianoBb2 = new Audio('Audio/piano/Piano.ff.Bb2.mp3');
var pianoBb3 = new Audio('Audio/piano/Piano.ff.Bb3.mp3');
var pianoBb4 = new Audio('Audio/piano/Piano.ff.Bb4.mp3');
var pianoBb5 = new Audio('Audio/piano/Piano.ff.Bb5.mp3');
var pianoBb6 = new Audio('Audio/piano/Piano.ff.Bb6.mp3');
var pianoBb7 = new Audio('Audio/piano/Piano.ff.Bb7.mp3');
var pianoC1 = new Audio('Audio/piano/Piano.ff.C1.mp3');
var pianoC2 = new Audio('Audio/piano/Piano.ff.C2.mp3');
var pianoC3 = new Audio('Audio/piano/Piano.ff.C3.mp3');
var pianoC4 = new Audio('Audio/piano/Piano.ff.C4.mp3');
var pianoC5 = new Audio('Audio/piano/Piano.ff.C5.mp3');
var pianoC6 = new Audio('Audio/piano/Piano.ff.C6.mp3');
var pianoC7 = new Audio('Audio/piano/Piano.ff.C7.mp3');
var pianoC8 = new Audio('Audio/piano/Piano.ff.C8.mp3');
var pianoD1 = new Audio('Audio/piano/Piano.ff.D1.mp3');
var pianoD2 = new Audio('Audio/piano/Piano.ff.D2.mp3');
var pianoD3 = new Audio('Audio/piano/Piano.ff.D3.mp3');
var pianoD4 = new Audio('Audio/piano/Piano.ff.D4.mp3');
var pianoD5 = new Audio('Audio/piano/Piano.ff.D5.mp3');
var pianoD6 = new Audio('Audio/piano/Piano.ff.D6.mp3');
var pianoD7 = new Audio('Audio/piano/Piano.ff.D7.mp3');
var pianoDb1 = new Audio('Audio/piano/Piano.ff.Db1.mp3');
var pianoDb2 = new Audio('Audio/piano/Piano.ff.Db2.mp3');
var pianoDb3 = new Audio('Audio/piano/Piano.ff.Db3.mp3');
var pianoDb4 = new Audio('Audio/piano/Piano.ff.Db4.mp3');
var pianoDb5 = new Audio('Audio/piano/Piano.ff.Db5.mp3');
var pianoDb6 = new Audio('Audio/piano/Piano.ff.Db6.mp3');
var pianoDb7 = new Audio('Audio/piano/Piano.ff.Db7.mp3');
var pianoE1 = new Audio('Audio/piano/Piano.ff.E1.mp3');
var pianoE2 = new Audio('Audio/piano/Piano.ff.E2.mp3');
var pianoE3 = new Audio('Audio/piano/Piano.ff.E3.mp3');
var pianoE4 = new Audio('Audio/piano/Piano.ff.E4.mp3');
var pianoE5 = new Audio('Audio/piano/Piano.ff.E5.mp3');
var pianoE6 = new Audio('Audio/piano/Piano.ff.E6.mp3');
var pianoE7 = new Audio('Audio/piano/Piano.ff.E7.mp3');
var pianoEb1 = new Audio('Audio/piano/Piano.ff.Eb1.mp3');
var pianoEb2 = new Audio('Audio/piano/Piano.ff.Eb2.mp3');
var pianoEb3 = new Audio('Audio/piano/Piano.ff.Eb3.mp3');
var pianoEb4 = new Audio('Audio/piano/Piano.ff.Eb4.mp3');
var pianoEb5 = new Audio('Audio/piano/Piano.ff.Eb5.mp3');
var pianoEb6 = new Audio('Audio/piano/Piano.ff.Eb6.mp3');
var pianoEb7 = new Audio('Audio/piano/Piano.ff.Eb7.mp3');
var pianoF1 = new Audio('Audio/piano/Piano.ff.F1.mp3');
var pianoF2 = new Audio('Audio/piano/Piano.ff.F2.mp3');
var pianoF3 = new Audio('Audio/piano/Piano.ff.F3.mp3');
var pianoF4 = new Audio('Audio/piano/Piano.ff.F4.mp3');
var pianoF5 = new Audio('Audio/piano/Piano.ff.F5.mp3');
var pianoF6 = new Audio('Audio/piano/Piano.ff.F6.mp3');
var pianoF7 = new Audio('Audio/piano/Piano.ff.F7.mp3');
var pianoG1 = new Audio('Audio/piano/Piano.ff.G1.mp3');
var pianoG2 = new Audio('Audio/piano/Piano.ff.G2.mp3');
var pianoG3 = new Audio('Audio/piano/Piano.ff.G3.mp3');
var pianoG4 = new Audio('Audio/piano/Piano.ff.G4.mp3');
var pianoG5 = new Audio('Audio/piano/Piano.ff.G5.mp3');
var pianoG6 = new Audio('Audio/piano/Piano.ff.G6.mp3');
var pianoG7 = new Audio('Audio/piano/Piano.ff.G7.mp3');
var pianoGb1 = new Audio('Audio/piano/Piano.ff.Gb1.mp3');
var pianoGb2 = new Audio('Audio/piano/Piano.ff.Gb2.mp3');
var pianoGb3 = new Audio('Audio/piano/Piano.ff.Gb3.mp3');
var pianoGb4 = new Audio('Audio/piano/Piano.ff.Gb4.mp3');
var pianoGb5 = new Audio('Audio/piano/Piano.ff.Gb5.mp3');
var pianoGb6 = new Audio('Audio/piano/Piano.ff.Gb6.mp3');
var pianoGb7 = new Audio('Audio/piano/Piano.ff.Gb7.mp3');



function start(){
	pianoKeys.start();
}

var pianoKeys = {
    start : function() {
    	this.interval = setInterval(updateKeys,1);
        window.addEventListener('keydown', function (e) {
            keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            keys[e.keyCode] = false;
            keys2[e.keyCode] = false;
        })
    }
}

function updateKeys() {  
	if (keys[16]&&octave<4&&!keys2[16]){
		octave += 1;
		keys2[16] = true;
	}
	if (keys[17]&&octave>1&&!keys2[17]){
		octave -= 1;
		keys2[17] = true;
	}
	if (octave==1){
		if (keys[81]&&!keys2[81]){ //white keys (Q-U)
			pianoC2.pause();
			pianoC2.currentTime = 0;
			pianoC2.play();
			keys2[81] = true;
		}
	    if (keys[87]&&!keys2[87]) {
			pianoD2.pause();
			pianoD2.currentTime = 0;
	    	pianoD2.play();
			keys2[87] = true;
	    }
	    if (keys[69]&&!keys2[69]) {
			pianoE2.pause();
			pianoE2.currentTime = 0;
			pianoE2.play();
			keys2[69] = true;
	    }
	    if (keys[82]&&!keys2[82]) {
			pianoF2.pause();
			pianoF2.currentTime = 0;
			pianoF2.play();
			keys2[82] = true;
	    }
	    if (keys[84]&&!keys2[84]) {
			pianoG2.pause();
			pianoG2.currentTime = 0;
			pianoG2.play();
			keys2[84] = true;
	    }
	    if (keys[89]&&!keys2[89]) {
			pianoA2.pause();
			pianoA2.currentTime = 0;
			pianoA2.play();
			keys2[89] = true;
	    }
	    if (keys[85]&&!keys2[85]) {
			pianoB2.pause();
			pianoB2.currentTime = 0;
			pianoB2.play();
			keys2[85] = true;
		}
	    if (keys[50]&&!keys2[50]) { //black keys (2-6)
			pianoDb2.pause();
			pianoDb2.currentTime = 0;
			pianoDb2.play();
			keys2[50] = true;
	    }
	    if (keys[51]&&!keys2[51]) {
			pianoEb2.pause();
			pianoEb2.currentTime = 0;
			pianoEb2.play();
			keys2[51] = true;
	    }
	    if (keys[52]&&!keys2[52]) {
			pianoGb2.pause();
			pianoGb2.currentTime = 0;
			pianoGb2.play();
			keys2[52] = true;
	    }
	    if (keys[53]&&!keys2[53]) {
			pianoAb2.pause();
			pianoAb2.currentTime = 0;
			pianoAb2.play();
			keys2[53] = true;
	    }
	    if (keys[54]&&!keys2[54]) {
			pianoBb2.pause();
			pianoBb2.currentTime = 0;
			pianoBb2.play();
			keys2[54] = true;
	    }
	    if (keys[90]&&!keys2[90]){ //white keys (Z-,)
			pianoC3.pause();
			pianoC3.currentTime = 0;
			pianoC3.play();
			keys2[90] = true;
		}
	    if (keys[88]&&!keys2[88]) {
			pianoD3.pause();
			pianoD3.currentTime = 0;
	    	pianoD3.play();
			keys2[88] = true;
	    }
	    if (keys[67]&&!keys2[67]) {
			pianoE3.pause();
			pianoE3.currentTime = 0;
			pianoE3.play();
			keys2[67] = true;
	    }
	    if (keys[86]&&!keys2[86]) {
			pianoF3.pause();
			pianoF3.currentTime = 0;
			pianoF3.play();
			keys2[86] = true;
	    }
	    if (keys[66]&&!keys2[66]) {
			pianoG3.pause();
			pianoG3.currentTime = 0;
			pianoG3.play();
			keys2[66] = true;
	    }
	    if (keys[78]&&!keys2[78]) {
			pianoA3.pause();
			pianoA3.currentTime = 0;
			pianoA3.play();
			keys2[78] = true;
	    }
	    if (keys[77]&&!keys2[77]) {
			pianoB3.pause();
			pianoB3.currentTime = 0;
			pianoB3.play();
			keys2[77] = true;
		}
		if (keys[188]&&!keys2[188]){
			pianoC4.pause();
			pianoC4.currentTime = 0;
			pianoC4.play();
			keys2[188] = true;
		}
	    if (keys[83]&&!keys2[83]) { //black keys (S-H)
			pianoDb3.pause();
			pianoDb3.currentTime = 0;
			pianoDb3.play();
			keys2[83] = true;
	    }
	    if (keys[68]&&!keys2[68]) {
			pianoEb3.pause();
			pianoEb3.currentTime = 0;
			pianoEb3.play();
			keys2[68] = true;
	    }
	    if (keys[70]&&!keys2[70]) {
			pianoGb3.pause();
			pianoGb3.currentTime = 0;
			pianoGb3.play();
			keys2[70] = true;
	    }
	    if (keys[71]&&!keys2[71]) {
			pianoAb3.pause();
			pianoAb3.currentTime = 0;
			pianoAb3.play();
			keys2[71] = true;
	    }
	    if (keys[72]&&!keys2[72]) {
			pianoBb3.pause();
			pianoBb3.currentTime = 0;
			pianoBb3.play();
			keys2[72] = true;
	    }
	}else if (octave==2){
		if (keys[81]&&!keys2[81]){ //white keys (Q-U)
			pianoC3.pause();
			pianoC3.currentTime = 0;
			pianoC3.play();
			keys2[81] = true;
		}
	    if (keys[87]&&!keys2[87]) {
			pianoD3.pause();
			pianoD3.currentTime = 0;
	    	pianoD3.play();
			keys2[87] = true;
	    }
	    if (keys[69]&&!keys2[69]) {
			pianoE3.pause();
			pianoE3.currentTime = 0;
			pianoE3.play();
			keys2[69] = true;
	    }
	    if (keys[82]&&!keys2[82]) {
			pianoF3.pause();
			pianoF3.currentTime = 0;
			pianoF3.play();
			keys2[82] = true;
	    }
	    if (keys[84]&&!keys2[84]) {
			pianoG3.pause();
			pianoG3.currentTime = 0;
			pianoG3.play();
			keys2[84] = true;
	    }
	    if (keys[89]&&!keys2[89]) {
			pianoA3.pause();
			pianoA3.currentTime = 0;
			pianoA3.play();
			keys2[89] = true;
	    }
	    if (keys[85]&&!keys2[85]) {
			pianoB3.pause();
			pianoB3.currentTime = 0;
			pianoB3.play();
			keys2[85] = true;
		}
	    if (keys[50]&&!keys2[50]) { //black keys (2-6)
			pianoDb3.pause();
			pianoDb3.currentTime = 0;
			pianoDb3.play();
			keys2[50] = true;
	    }
	    if (keys[51]&&!keys2[51]) {
			pianoEb3.pause();
			pianoEb3.currentTime = 0;
			pianoEb3.play();
			keys2[51] = true;
	    }
	    if (keys[52]&&!keys2[52]) {
			pianoGb3.pause();
			pianoGb3.currentTime = 0;
			pianoGb3.play();
			keys2[52] = true;
	    }
	    if (keys[53]&&!keys2[53]) {
			pianoAb3.pause();
			pianoAb3.currentTime = 0;
			pianoAb3.play();
			keys2[53] = true;
	    }
	    if (keys[54]&&!keys2[54]) {
			pianoBb3.pause();
			pianoBb3.currentTime = 0;
			pianoBb3.play();
			keys2[54] = true;
	    }
	    if (keys[90]&&!keys2[90]){ //white keys (Z-,)
			pianoC4.pause();
			pianoC4.currentTime = 0;
			pianoC4.play();
			keys2[90] = true;
		}
	    if (keys[88]&&!keys2[88]) {
			pianoD4.pause();
			pianoD4.currentTime = 0;
	    	pianoD4.play();
			keys2[88] = true;
	    }
	    if (keys[67]&&!keys2[67]) {
			pianoE4.pause();
			pianoE4.currentTime = 0;
			pianoE4.play();
			keys2[67] = true;
	    }
	    if (keys[86]&&!keys2[86]) {
			pianoF4.pause();
			pianoF4.currentTime = 0;
			pianoF4.play();
			keys2[86] = true;
	    }
	    if (keys[66]&&!keys2[66]) {
			pianoG4.pause();
			pianoG4.currentTime = 0;
			pianoG4.play();
			keys2[66] = true;
	    }
	    if (keys[78]&&!keys2[78]) {
			pianoA4.pause();
			pianoA4.currentTime = 0;
			pianoA4.play();
			keys2[78] = true;
	    }
	    if (keys[77]&&!keys2[77]) {
			pianoB4.pause();
			pianoB4.currentTime = 0;
			pianoB4.play();
			keys2[77] = true;
		}
		if (keys[188]&&!keys2[188]){
			pianoC5.pause();
			pianoC5.currentTime = 0;
			pianoC5.play();
			keys2[188] = true;
		}
	    if (keys[83]&&!keys2[83]) { //black keys (S-H)
			pianoDb4.pause();
			pianoDb4.currentTime = 0;
			pianoDb4.play();
			keys2[83] = true;
	    }
	    if (keys[68]&&!keys2[68]) {
			pianoEb4.pause();
			pianoEb4.currentTime = 0;
			pianoEb4.play();
			keys2[68] = true;
	    }
	    if (keys[70]&&!keys2[70]) {
			pianoGb4.pause();
			pianoGb4.currentTime = 0;
			pianoGb4.play();
			keys2[70] = true;
	    }
	    if (keys[71]&&!keys2[71]) {
			pianoAb4.pause();
			pianoAb4.currentTime = 0;
			pianoAb4.play();
			keys2[71] = true;
	    }
	    if (keys[72]&&!keys2[72]) {
			pianoBb4.pause();
			pianoBb4.currentTime = 0;
			pianoBb4.play();
			keys2[72] = true;
	    }
	}else if (octave==3){
		if (keys[81]&&!keys2[81]){ //white keys (Q-U)
			pianoC4.pause();
			pianoC4.currentTime = 0;
			pianoC4.play();
			keys2[81] = true;
		}
	    if (keys[87]&&!keys2[87]) {
			pianoD4.pause();
			pianoD4.currentTime = 0;
	    	pianoD4.play();
			keys2[87] = true;
	    }
	    if (keys[69]&&!keys2[69]) {
			pianoE4.pause();
			pianoE4.currentTime = 0;
			pianoE4.play();
			keys2[69] = true;
	    }
	    if (keys[82]&&!keys2[82]) {
			pianoF4.pause();
			pianoF4.currentTime = 0;
			pianoF4.play();
			keys2[82] = true;
	    }
	    if (keys[84]&&!keys2[84]) {
			pianoG4.pause();
			pianoG4.currentTime = 0;
			pianoG4.play();
			keys2[84] = true;
	    }
	    if (keys[89]&&!keys2[89]) {
			pianoA4.pause();
			pianoA4.currentTime = 0;
			pianoA4.play();
			keys2[89] = true;
	    }
	    if (keys[85]&&!keys2[85]) {
			pianoB4.pause();
			pianoB4.currentTime = 0;
			pianoB4.play();
			keys2[85] = true;
		}
	    if (keys[50]&&!keys2[50]) { //black keys (2-6)
			pianoDb4.pause();
			pianoDb4.currentTime = 0;
			pianoDb4.play();
			keys2[50] = true;
	    }
	    if (keys[51]&&!keys2[51]) {
			pianoEb4.pause();
			pianoEb4.currentTime = 0;
			pianoEb4.play();
			keys2[51] = true;
	    }
	    if (keys[52]&&!keys2[52]) {
			pianoGb4.pause();
			pianoGb4.currentTime = 0;
			pianoGb4.play();
			keys2[52] = true;
	    }
	    if (keys[53]&&!keys2[53]) {
			pianoAb4.pause();
			pianoAb4.currentTime = 0;
			pianoAb4.play();
			keys2[53] = true;
	    }
	    if (keys[54]&&!keys2[54]) {
			pianoBb4.pause();
			pianoBb4.currentTime = 0;
			pianoBb4.play();
			keys2[54] = true;
	    }
	    if (keys[90]&&!keys2[90]){ //white keys (Z-,)
			pianoC5.pause();
			pianoC5.currentTime = 0;
			pianoC5.play();
			keys2[90] = true;
		}
	    if (keys[88]&&!keys2[88]) {
			pianoD5.pause();
			pianoD5.currentTime = 0;
	    	pianoD5.play();
			keys2[88] = true;
	    }
	    if (keys[67]&&!keys2[67]) {
			pianoE5.pause();
			pianoE5.currentTime = 0;
			pianoE5.play();
			keys2[67] = true;
	    }
	    if (keys[86]&&!keys2[86]) {
			pianoF5.pause();
			pianoF5.currentTime = 0;
			pianoF5.play();
			keys2[86] = true;
	    }
	    if (keys[66]&&!keys2[66]) {
			pianoG5.pause();
			pianoG5.currentTime = 0;
			pianoG5.play();
			keys2[66] = true;
	    }
	    if (keys[78]&&!keys2[78]) {
			pianoA5.pause();
			pianoA5.currentTime = 0;
			pianoA5.play();
			keys2[78] = true;
	    }
	    if (keys[77]&&!keys2[77]) {
			pianoB5.pause();
			pianoB5.currentTime = 0;
			pianoB5.play();
			keys2[77] = true;
		}
		if (keys[188]&&!keys2[188]){
			pianoC6.pause();
			pianoC6.currentTime = 0;
			pianoC6.play();
			keys2[188] = true;
		}
	    if (keys[83]&&!keys2[83]) { //black keys (S-H)
			pianoDb5.pause();
			pianoDb5.currentTime = 0;
			pianoDb5.play();
			keys2[83] = true;
	    }
	    if (keys[68]&&!keys2[68]) {
			pianoEb5.pause();
			pianoEb5.currentTime = 0;
			pianoEb5.play();
			keys2[68] = true;
	    }
	    if (keys[70]&&!keys2[70]) {
			pianoGb5.pause();
			pianoGb5.currentTime = 0;
			pianoGb5.play();
			keys2[70] = true;
	    }
	    if (keys[71]&&!keys2[71]) {
			pianoAb5.pause();
			pianoAb5.currentTime = 0;
			pianoAb5.play();
			keys2[71] = true;
	    }
	    if (keys[72]&&!keys2[72]) {
			pianoBb5.pause();
			pianoBb5.currentTime = 0;
			pianoBb5.play();
			keys2[72] = true;
	    }
	}else if (octave==4){
		if (keys[81]&&!keys2[81]){ //white keys (Q-U)
			pianoC5.pause();
			pianoC5.currentTime = 0;
			pianoC5.play();
			keys2[81] = true;
		}
	    if (keys[87]&&!keys2[87]) {
			pianoD5.pause();
			pianoD5.currentTime = 0;
	    	pianoD5.play();
			keys2[87] = true;
	    }
	    if (keys[69]&&!keys2[69]) {
			pianoE5.pause();
			pianoE5.currentTime = 0;
			pianoE5.play();
			keys2[69] = true;
	    }
	    if (keys[82]&&!keys2[82]) {
			pianoF5.pause();
			pianoF5.currentTime = 0;
			pianoF5.play();
			keys2[82] = true;
	    }
	    if (keys[84]&&!keys2[84]) {
			pianoG5.pause();
			pianoG5.currentTime = 0;
			pianoG5.play();
			keys2[84] = true;
	    }
	    if (keys[89]&&!keys2[89]) {
			pianoA5.pause();
			pianoA5.currentTime = 0;
			pianoA5.play();
			keys2[89] = true;
	    }
	    if (keys[85]&&!keys2[85]) {
			pianoB5.pause();
			pianoB5.currentTime = 0;
			pianoB5.play();
			keys2[85] = true;
		}
	    if (keys[50]&&!keys2[50]) { //black keys (2-6)
			pianoDb5.pause();
			pianoDb5.currentTime = 0;
			pianoDb5.play();
			keys2[50] = true;
	    }
	    if (keys[51]&&!keys2[51]) {
			pianoEb5.pause();
			pianoEb5.currentTime = 0;
			pianoEb5.play();
			keys2[51] = true;
	    }
	    if (keys[52]&&!keys2[52]) {
			pianoGb5.pause();
			pianoGb5.currentTime = 0;
			pianoGb5.play();
			keys2[52] = true;
	    }
	    if (keys[53]&&!keys2[53]) {
			pianoAb5.pause();
			pianoAb5.currentTime = 0;
			pianoAb5.play();
			keys2[53] = true;
	    }
	    if (keys[54]&&!keys2[54]) {
			pianoBb5.pause();
			pianoBb5.currentTime = 0;
			pianoBb5.play();
			keys2[54] = true;
	    }
	    if (keys[90]&&!keys2[90]){ //white keys (Z-,)
			pianoC6.pause();
			pianoC6.currentTime = 0;
			pianoC6.play();
			keys2[90] = true;
		}
	    if (keys[88]&&!keys2[88]) {
			pianoD6.pause();
			pianoD6.currentTime = 0;
	    	pianoD6.play();
			keys2[88] = true;
	    }
	    if (keys[67]&&!keys2[67]) {
			pianoE6.pause();
			pianoE6.currentTime = 0;
			pianoE6.play();
			keys2[67] = true;
	    }
	    if (keys[86]&&!keys2[86]) {
			pianoF6.pause();
			pianoF6.currentTime = 0;
			pianoF6.play();
			keys2[86] = true;
	    }
	    if (keys[66]&&!keys2[66]) {
			pianoG6.pause();
			pianoG6.currentTime = 0;
			pianoG6.play();
			keys2[66] = true;
	    }
	    if (keys[78]&&!keys2[78]) {
			pianoA6.pause();
			pianoA6.currentTime = 0;
			pianoA6.play();
			keys2[78] = true;
	    }
	    if (keys[77]&&!keys2[77]) {
			pianoB6.pause();
			pianoB6.currentTime = 0;
			pianoB6.play();
			keys2[77] = true;
		}
		if (keys[188]&&!keys2[188]){
			pianoC7.pause();
			pianoC7.currentTime = 0;
			pianoC7.play();
			keys2[188] = true;
		}
	    if (keys[83]&&!keys2[83]) { //black keys (S-H)
			pianoDb6.pause();
			pianoDb6.currentTime = 0;
			pianoDb6.play();
			keys2[83] = true;
	    }
	    if (keys[68]&&!keys2[68]) {
			pianoEb6.pause();
			pianoEb6.currentTime = 0;
			pianoEb6.play();
			keys2[68] = true;
	    }
	    if (keys[70]&&!keys2[70]) {
			pianoGb6.pause();
			pianoGb6.currentTime = 0;
			pianoGb6.play();
			keys2[70] = true;
	    }
	    if (keys[71]&&!keys2[71]) {
			pianoAb6.pause();
			pianoAb6.currentTime = 0;
			pianoAb6.play();
			keys2[71] = true;
	    }
	    if (keys[72]&&!keys2[72]) {
			pianoBb6.pause();
			pianoBb6.currentTime = 0;
			pianoBb6.play();
			keys2[72] = true;
	    }
	}
}