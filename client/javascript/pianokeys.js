var keys = {};
var keys2 = {};
var octave = 3;
var piano = [];
var pianoA2 = new Audio('javascript/Audio/piano/Piano.ff.A2.mp3');
var pianoA3 = new Audio('javascript/Audio/piano/Piano.ff.A3.mp3');
var pianoA4 = new Audio('javascript/Audio/piano/Piano.ff.A4.mp3');
var pianoA5 = new Audio('javascript/Audio/piano/Piano.ff.A5.mp3');
var pianoA6 = new Audio('javascript/Audio/piano/Piano.ff.A6.mp3');
var pianoA7 = new Audio('javascript/Audio/piano/Piano.ff.A7.mp3');
var pianoAb2 = new Audio('javascript/Audio/piano/Piano.ff.Ab2.mp3');
var pianoAb3 = new Audio('javascript/Audio/piano/Piano.ff.Ab3.mp3');
var pianoAb4 = new Audio('javascript/Audio/piano/Piano.ff.Ab4.mp3');
var pianoAb5 = new Audio('javascript/Audio/piano/Piano.ff.Ab5.mp3');
var pianoAb6 = new Audio('javascript/Audio/piano/Piano.ff.Ab6.mp3');
var pianoAb7 = new Audio('javascript/Audio/piano/Piano.ff.Ab7.mp3');
var pianoB2 = new Audio('javascript/Audio/piano/Piano.ff.B2.mp3');
var pianoB3 = new Audio('javascript/Audio/piano/Piano.ff.B3.mp3');
var pianoB4 = new Audio('javascript/Audio/piano/Piano.ff.B4.mp3');
var pianoB5 = new Audio('javascript/Audio/piano/Piano.ff.B5.mp3');
var pianoB6 = new Audio('javascript/Audio/piano/Piano.ff.B6.mp3');
var pianoB7 = new Audio('javascript/Audio/piano/Piano.ff.B7.mp3');
var pianoBb2 = new Audio('javascript/Audio/piano/Piano.ff.Bb2.mp3');
var pianoBb3 = new Audio('javascript/Audio/piano/Piano.ff.Bb3.mp3');
var pianoBb4 = new Audio('javascript/Audio/piano/Piano.ff.Bb4.mp3');
var pianoBb5 = new Audio('javascript/Audio/piano/Piano.ff.Bb5.mp3');
var pianoBb6 = new Audio('javascript/Audio/piano/Piano.ff.Bb6.mp3');
var pianoBb7 = new Audio('javascript/Audio/piano/Piano.ff.Bb7.mp3');
var pianoC2 = new Audio('javascript/Audio/piano/Piano.ff.C2.mp3');
var pianoC3 = new Audio('javascript/Audio/piano/Piano.ff.C3.mp3');
var pianoC4 = new Audio('javascript/Audio/piano/Piano.ff.C4.mp3');
var pianoC5 = new Audio('javascript/Audio/piano/Piano.ff.C5.mp3');
var pianoC6 = new Audio('javascript/Audio/piano/Piano.ff.C6.mp3');
var pianoC7 = new Audio('javascript/Audio/piano/Piano.ff.C7.mp3');
var pianoC8 = new Audio('javascript/Audio/piano/Piano.ff.C8.mp3');
var pianoD2 = new Audio('javascript/Audio/piano/Piano.ff.D2.mp3');
var pianoD3 = new Audio('javascript/Audio/piano/Piano.ff.D3.mp3');
var pianoD4 = new Audio('javascript/Audio/piano/Piano.ff.D4.mp3');
var pianoD5 = new Audio('javascript/Audio/piano/Piano.ff.D5.mp3');
var pianoD6 = new Audio('javascript/Audio/piano/Piano.ff.D6.mp3');
var pianoD7 = new Audio('javascript/Audio/piano/Piano.ff.D7.mp3');
var pianoDb2 = new Audio('javascript/Audio/piano/Piano.ff.Db2.mp3');
var pianoDb3 = new Audio('javascript/Audio/piano/Piano.ff.Db3.mp3');
var pianoDb4 = new Audio('javascript/Audio/piano/Piano.ff.Db4.mp3');
var pianoDb5 = new Audio('javascript/Audio/piano/Piano.ff.Db5.mp3');
var pianoDb6 = new Audio('javascript/Audio/piano/Piano.ff.Db6.mp3');
var pianoDb7 = new Audio('javascript/Audio/piano/Piano.ff.Db7.mp3');
var pianoE2 = new Audio('javascript/Audio/piano/Piano.ff.E2.mp3');
var pianoE3 = new Audio('javascript/Audio/piano/Piano.ff.E3.mp3');
var pianoE4 = new Audio('javascript/Audio/piano/Piano.ff.E4.mp3');
var pianoE5 = new Audio('javascript/Audio/piano/Piano.ff.E5.mp3');
var pianoE6 = new Audio('javascript/Audio/piano/Piano.ff.E6.mp3');
var pianoE7 = new Audio('javascript/Audio/piano/Piano.ff.E7.mp3');
var pianoEb2 = new Audio('javascript/Audio/piano/Piano.ff.Eb2.mp3');
var pianoEb3 = new Audio('javascript/Audio/piano/Piano.ff.Eb3.mp3');
var pianoEb4 = new Audio('javascript/Audio/piano/Piano.ff.Eb4.mp3');
var pianoEb5 = new Audio('javascript/Audio/piano/Piano.ff.Eb5.mp3');
var pianoEb6 = new Audio('javascript/Audio/piano/Piano.ff.Eb6.mp3');
var pianoEb7 = new Audio('javascript/Audio/piano/Piano.ff.Eb7.mp3');
var pianoF2 = new Audio('javascript/Audio/piano/Piano.ff.F2.mp3');
var pianoF3 = new Audio('javascript/Audio/piano/Piano.ff.F3.mp3');
var pianoF4 = new Audio('javascript/Audio/piano/Piano.ff.F4.mp3');
var pianoF5 = new Audio('javascript/Audio/piano/Piano.ff.F5.mp3');
var pianoF6 = new Audio('javascript/Audio/piano/Piano.ff.F6.mp3');
var pianoF7 = new Audio('javascript/Audio/piano/Piano.ff.F7.mp3');
var pianoG2 = new Audio('javascript/Audio/piano/Piano.ff.G2.mp3');
var pianoG3 = new Audio('javascript/Audio/piano/Piano.ff.G3.mp3');
var pianoG4 = new Audio('javascript/Audio/piano/Piano.ff.G4.mp3');
var pianoG5 = new Audio('javascript/Audio/piano/Piano.ff.G5.mp3');
var pianoG6 = new Audio('javascript/Audio/piano/Piano.ff.G6.mp3');
var pianoG7 = new Audio('javascript/Audio/piano/Piano.ff.G7.mp3');
var pianoGb2 = new Audio('javascript/Audio/piano/Piano.ff.Gb2.mp3');
var pianoGb3 = new Audio('javascript/Audio/piano/Piano.ff.Gb3.mp3');
var pianoGb4 = new Audio('javascript/Audio/piano/Piano.ff.Gb4.mp3');
var pianoGb5 = new Audio('javascript/Audio/piano/Piano.ff.Gb5.mp3');
var pianoGb6 = new Audio('javascript/Audio/piano/Piano.ff.Gb6.mp3');
var pianoGb7 = new Audio('javascript/Audio/piano/Piano.ff.Gb7.mp3');

piano.push(pianoC2);
piano.push(pianoD2);
piano.push(pianoE2);
piano.push(pianoF2);
piano.push(pianoG2);
piano.push(pianoA2);
piano.push(pianoB2);
piano.push(pianoDb2);
piano.push(pianoEb2);
piano.push(pianoGb2);
piano.push(pianoAb2);
piano.push(pianoBb2);
piano.push(pianoC3);
piano.push(pianoD3);
piano.push(pianoE3);
piano.push(pianoF3);
piano.push(pianoG3);
piano.push(pianoA3);
piano.push(pianoB3);
piano.push(pianoC4); //19
piano.push(pianoDb3);
piano.push(pianoEb3);
piano.push(pianoGb3);
piano.push(pianoAb3);
piano.push(pianoBb3);
piano.push(pianoD4);
piano.push(pianoE4);
piano.push(pianoF4);
piano.push(pianoG4);
piano.push(pianoA4);
piano.push(pianoB4);
piano.push(pianoDb4);
piano.push(pianoEb4);
piano.push(pianoGb4);
piano.push(pianoAb4);
piano.push(pianoBb4);
piano.push(pianoC5); //36
piano.push(pianoD5);
piano.push(pianoE5);
piano.push(pianoF5);
piano.push(pianoG5);
piano.push(pianoA5);
piano.push(pianoB5);
piano.push(pianoDb5);
piano.push(pianoEb5);
piano.push(pianoGb5);
piano.push(pianoAb5);
piano.push(pianoBb5);
piano.push(pianoC6); //48
piano.push(pianoD6);
piano.push(pianoE6);
piano.push(pianoF6);
piano.push(pianoG6);
piano.push(pianoA6);
piano.push(pianoB6);
piano.push(pianoDb6);
piano.push(pianoEb6);
piano.push(pianoGb6);
piano.push(pianoAb6);
piano.push(pianoBb6);
piano.push(pianoC7);


function startPiano(){
	pianoKeys.start();
}

function unpress(key){
	if (octave==1){
            if (key==81){ //white keys (Q-U)
					document.getElementById("key1").style.backgroundColor="transparent";
            }
            else if (key==87) {
					document.getElementById("key2").style.backgroundColor="transparent";
            }
            else if (key==69) {
					document.getElementById("key3").style.backgroundColor="transparent";
            }
            else if (key==82) {
					document.getElementById("key4").style.backgroundColor="transparent";
            }
            else if (key==84) {
					document.getElementById("key5").style.backgroundColor="transparent";
            }
            else if (key==89) {
					document.getElementById("key6").style.backgroundColor="transparent";
            }
            else if (key==85) {
					document.getElementById("key7").style.backgroundColor="transparent";
                }
            else if (key==50) { //black keys (2-6)
					document.getElementById("key8").style.backgroundColor="transparent";
            }
            else if (key==51) {
					document.getElementById("key9").style.backgroundColor="transparent";
            }
            else if (key==53) {
					document.getElementById("key10").style.backgroundColor="transparent";
            }
            else if (key==54) {
					document.getElementById("key11").style.backgroundColor="transparent";
            }
            else if (key==55) {
					document.getElementById("key12").style.backgroundColor="transparent";
            }
            else if (key==90){ //white keys (Z-,)
					document.getElementById("key13").style.backgroundColor="transparent";
                }
            else if (key==88) {
					document.getElementById("key14").style.backgroundColor="transparent";
            }
            else if (key==67) {
					document.getElementById("key15").style.backgroundColor="transparent";
            }
            else if (key==86) {
					document.getElementById("key16").style.backgroundColor="transparent";
            }
            else if (key==66) {
					document.getElementById("key17").style.backgroundColor="transparent";
            }
            else if (key==78) {
					document.getElementById("key18").style.backgroundColor="transparent";
            }
            else if (key==77) {
					document.getElementById("key19").style.backgroundColor="transparent";
                }
                else if (key==188){
					document.getElementById("key20").style.backgroundColor="transparent";
                }
            else if (key==83) { //black keys (S-H)
					document.getElementById("key21").style.backgroundColor="transparent";
            }
            else if (key==68) {
					document.getElementById("key22").style.backgroundColor="transparent";
            }
            else if (key==71) {
					document.getElementById("key23").style.backgroundColor="transparent";
            }
            else if (key==72) {
					document.getElementById("key24").style.backgroundColor="transparent";
            }
            else if (key==74) {
					document.getElementById("key25").style.backgroundColor="transparent";
            }
        }else if (octave==2){
                if (key==81){ //white keys (Q-U)
					document.getElementById("key13").style.backgroundColor="transparent";
                }
            else if (key==87) {
					document.getElementById("key14").style.backgroundColor="transparent";
            }
            else if (key==69) {
					document.getElementById("key15").style.backgroundColor="transparent";
            }
            else if (key==82) {
					document.getElementById("key16").style.backgroundColor="transparent";
            }
            else if (key==84) {
					document.getElementById("key17").style.backgroundColor="transparent";
            }
            else if (key==89) {
					document.getElementById("key18").style.backgroundColor="transparent";
            }
            else if (key==85) {
					document.getElementById("key19").style.backgroundColor="transparent";
                }
            else if (key==50) { //black keys (2-6)
					document.getElementById("key21").style.backgroundColor="transparent";
            }
            else if (key==51) {
					document.getElementById("key22").style.backgroundColor="transparent";
            }
            else if (key==53) {
					document.getElementById("key23").style.backgroundColor="transparent";
            }
            else if (key==54) {
					document.getElementById("key24").style.backgroundColor="transparent";
            }
            else if (key==55) {
					document.getElementById("key25").style.backgroundColor="transparent";
            }
            else if (key==90){ //white keys (Z-,)
					document.getElementById("key20").style.backgroundColor="transparent";
                }
            else if (key==88) {
					document.getElementById("key26").style.backgroundColor="transparent";
            }
            else if (key==67) {
					document.getElementById("key27").style.backgroundColor="transparent";
            }
            else if (key==86) {
					document.getElementById("key28").style.backgroundColor="transparent";
            }
            else if (key==66) {
					document.getElementById("key29").style.backgroundColor="transparent";
            }
            else if (key==78) {
					document.getElementById("key30").style.backgroundColor="transparent";
            }
            else if (key==77) {
					document.getElementById("key31").style.backgroundColor="transparent";
                }
                else if (key==188){
					document.getElementById("key36").style.backgroundColor="transparent";
                }
            else if (key==83) { //black keys (S-H)
					document.getElementById("key32").style.backgroundColor="transparent";
            }
            else if (key==68) {
					document.getElementById("key33").style.backgroundColor="transparent";
            }
            else if (key==71) {
					document.getElementById("key34").style.backgroundColor="transparent";
            }
            else if (key==72) {
					document.getElementById("key35").style.backgroundColor="transparent";
            }
            else if (key==74) {
					document.getElementById("key36").style.backgroundColor="transparent";
            }
        }else if (octave==3){
                if (key==81){ //white keys (Q-U)
					document.getElementById("key20").style.backgroundColor="transparent";
                }
            else if (key==87) {
					document.getElementById("key26").style.backgroundColor="transparent";
            }
            else if (key==69) {
					document.getElementById("key27").style.backgroundColor="transparent";
            }
            else if (key==82) {
					document.getElementById("key28").style.backgroundColor="transparent";
            }
            else if (key==84) {
					document.getElementById("key29").style.backgroundColor="transparent";
            }
            else if (key==89) {
					document.getElementById("key30").style.backgroundColor="transparent";
            }
            else if (key==85) {
					document.getElementById("key31").style.backgroundColor="transparent";
                }
            else if (key==50) { //black keys (2-6)
					document.getElementById("key32").style.backgroundColor="transparent";
            }
            else if (key==51) {
					document.getElementById("key33").style.backgroundColor="transparent";
            }
            else if (key==53) {
					document.getElementById("key34").style.backgroundColor="transparent";
            }
            else if (key==54) {
					document.getElementById("key35").style.backgroundColor="transparent";
            }
            else if (key==55) {
					document.getElementById("key36").style.backgroundColor="transparent";
            }
            else if (key==90){ //white keys (Z-,)
					document.getElementById("key37").style.backgroundColor="transparent";
                }
            else if (key==88) {
					document.getElementById("key38").style.backgroundColor="transparent";
            }
            else if (key==67) {
					document.getElementById("key39").style.backgroundColor="transparent";
            }
            else if (key==86) {
					document.getElementById("key40").style.backgroundColor="transparent";
            }
            else if (key==66) {
					document.getElementById("key41").style.backgroundColor="transparent";
            }
            else if (key==78) {
					document.getElementById("key42").style.backgroundColor="transparent";
            }
            else if (key==77) {
					document.getElementById("key43").style.backgroundColor="transparent";
                }
                else if (key==188){
					document.getElementById("key49").style.backgroundColor="transparent";
                }
            else if (key==83) { //black keys (S-H)
					document.getElementById("key44").style.backgroundColor="transparent";
            }
            else if (key==68) {
					document.getElementById("key45").style.backgroundColor="transparent";
            }
            else if (key==71) {
					document.getElementById("key46").style.backgroundColor="transparent";
            }
            else if (key==72) {
					document.getElementById("key47").style.backgroundColor="transparent";
            }
            else if (key==74) {
					document.getElementById("key48").style.backgroundColor="transparent";
            }
        }else if (octave==4){
                if (key==81){ //white keys (Q-U)
					document.getElementById("key37").style.backgroundColor="transparent";
                }
            else if (key==87) {
					document.getElementById("key38").style.backgroundColor="transparent";
            }
            else if (key==69) {
					document.getElementById("key39").style.backgroundColor="transparent";
            }
            else if (key==82) {
					document.getElementById("key40").style.backgroundColor="transparent";
            }
            else if (key==84) {
					document.getElementById("key41").style.backgroundColor="transparent";
            }
            else if (key==89) {
					document.getElementById("key42").style.backgroundColor="transparent";
            }
            else if (key==85) {
					document.getElementById("key43").style.backgroundColor="transparent";
                }
            else if (key==50) { //black keys (2-6)
					document.getElementById("key44").style.backgroundColor="transparent";
            }
            else if (key==51) {
					document.getElementById("key45").style.backgroundColor="transparent";
            }
            else if (key==53) {
					document.getElementById("key46").style.backgroundColor="transparent";
            }
            else if (key==54) {
					document.getElementById("key47").style.backgroundColor="transparent";
            }
            else if (key==55) {
					document.getElementById("key48").style.backgroundColor="transparent";
            }
            else if (key==90){ //white keys (Z-,)
					document.getElementById("key49").style.backgroundColor="transparent";
                }
            else if (key==88) {
					document.getElementById("key50").style.backgroundColor="transparent";
            }
            else if (key==67) {
					document.getElementById("key51").style.backgroundColor="transparent";
            }
            else if (key==86) {
					document.getElementById("key52").style.backgroundColor="transparent";
            }
            else if (key==66) {
					document.getElementById("key53").style.backgroundColor="transparent";
            }
            else if (key==78) {
					document.getElementById("key54").style.backgroundColor="transparent";
            }
            else if (key==77) {
					document.getElementById("key55").style.backgroundColor="transparent";
                }
                else if (key==188){
					document.getElementById("key61").style.backgroundColor="transparent";
                }
            else if (key==83) { //black keys (S-H)
					document.getElementById("key56").style.backgroundColor="transparent";
            }
            else if (key==68) {
					document.getElementById("key57").style.backgroundColor="transparent";
            }
            else if (key==71) {
					document.getElementById("key58").style.backgroundColor="transparent";
            }
            else if (key==72) {
					document.getElementById("key59").style.backgroundColor="transparent";
            }
            else if (key==74) {
					document.getElementById("key60").style.backgroundColor="transparent";
            }
        }

}

var pianoKeys = {
    start : function() {
    	this.interval = setInterval(updateKeys,0);
        window.addEventListener('keydown', function (e) {
            keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            keys[e.keyCode] = false;
            keys2[e.keyCode] = false;
            unpress(e.keyCode);
        })
    }
}

function keypress(key,ind){
	piano[ind].pause();
	piano[ind].currentTime = 0;
	piano[ind].play();
	keys2[key] = true;
	var tempkey = "key" + String(ind+1);
	document.getElementById(tempkey).style.backgroundColor="black";
	
	socket.emit('highlightPlayer'); 
	socket.emit('globalSound', ind);
}

function keypress2(ind){
	piano[ind].pause();
	piano[ind].currentTime = 0;
	piano[ind].play();
	var tempkey = "key" + String(ind+1);
	document.getElementById(tempkey).style.backgroundColor="black";
	setInterval(function(){
		document.getElementById(tempkey).style.backgroundColor="transparent";
	},250);
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
			keypress(81,0);
		}
	    if (keys[87]&&!keys2[87]) {
			keypress(87,1);
	    }
	    if (keys[69]&&!keys2[69]) {
			keypress(69,2);
	    }
	    if (keys[82]&&!keys2[82]) {
			keypress(82,3);
	    }
	    if (keys[84]&&!keys2[84]) {
			keypress(84,4);
	    }
	    if (keys[89]&&!keys2[89]) {
			keypress(89,5);
	    }
	    if (keys[85]&&!keys2[85]) {
			keypress(85,6);
		}
	    if (keys[50]&&!keys2[50]) { //black keys (2-6)
			keypress(50,7);
	    }
	    if (keys[51]&&!keys2[51]) {
			keypress(51,8);
	    }
	    if (keys[53]&&!keys2[53]) {
			keypress(53,9);
	    }
	    if (keys[54]&&!keys2[54]) {
			keypress(54,10);
	    }
	    if (keys[55]&&!keys2[55]) {
			keypress(55,11);
	    }
	    if (keys[90]&&!keys2[90]){ //white keys (Z-,)
			keypress(90,12);
		}
	    if (keys[88]&&!keys2[88]) {
			keypress(88,13);
	    }
	    if (keys[67]&&!keys2[67]) {
			keypress(67,14);
	    }
	    if (keys[86]&&!keys2[86]) {
			keypress(86,15);
	    }
	    if (keys[66]&&!keys2[66]) {
			keypress(66,16);
	    }
	    if (keys[78]&&!keys2[78]) {
			keypress(78,17);
	    }
	    if (keys[77]&&!keys2[77]) {
			keypress(77,18);
		}
		if (keys[188]&&!keys2[188]){
			keypress(188,19);
		}
	    if (keys[83]&&!keys2[83]) { //black keys (S-H)
			keypress(83,20);
	    }
	    if (keys[68]&&!keys2[68]) {
			keypress(68,21);
	    }
	    if (keys[71]&&!keys2[71]) {
			keypress(71,22);
	    }
	    if (keys[72]&&!keys2[72]) {
			keypress(72,23);
	    }
	    if (keys[74]&&!keys2[74]) {
			keypress(74,24);
	    }
	}else if (octave==2){
		if (keys[81]&&!keys2[81]){ //white keys (Q-U)
			keypress(81,12);
		}
	    if (keys[87]&&!keys2[87]) {
			keypress(87,13);
	    }
	    if (keys[69]&&!keys2[69]) {
			keypress(69,14);
	    }
	    if (keys[82]&&!keys2[82]) {
			keypress(82,15);
	    }
	    if (keys[84]&&!keys2[84]) {
			keypress(84,16);
	    }
	    if (keys[89]&&!keys2[89]) {
			keypress(89,17);
	    }
	    if (keys[85]&&!keys2[85]) {
			keypress(85,18);
		}
	    if (keys[50]&&!keys2[50]) { //black keys (2-6)
			keypress(50,20);
	    }
	    if (keys[51]&&!keys2[51]) {
			keypress(51,21);
	    }
	    if (keys[53]&&!keys2[53]) {
			keypress(53,22);
	    }
	    if (keys[54]&&!keys2[54]) {
			keypress(54,23);
	    }
	    if (keys[55]&&!keys2[55]) {
			keypress(55,24);
	    }
	    if (keys[90]&&!keys2[90]){ //white keys (Z-,)
			keypress(90,19);
		}
	    if (keys[88]&&!keys2[88]) {
			keypress(88,25);
	    }
	    if (keys[67]&&!keys2[67]) {
			keypress(67,26);
	    }
	    if (keys[86]&&!keys2[86]) {
			keypress(86,27);
	    }
	    if (keys[66]&&!keys2[66]) {
			keypress(66,28);
	    }
	    if (keys[78]&&!keys2[78]) {
			keypress(78,29);
	    }
	    if (keys[77]&&!keys2[77]) {
			keypress(77,30);
		}
		if (keys[188]&&!keys2[188]){
			keypress(188,36);
		}
	    if (keys[83]&&!keys2[83]) { //black keys (S-H)
			keypress(83,31);
	    }
	    if (keys[68]&&!keys2[68]) {
			keypress(68,32);
	    }
	    if (keys[71]&&!keys2[71]) {
			keypress(71,33);
	    }
	    if (keys[72]&&!keys2[72]) {
			keypress(72,34);
	    }
	    if (keys[74]&&!keys2[74]) {
			keypress(74,35);
	    }
	}else if (octave==3){
		if (keys[81]&&!keys2[81]){ //white keys (Q-U)
			keypress(81,19);
		}
	    if (keys[87]&&!keys2[87]) {
			keypress(87,25);
	    }
	    if (keys[69]&&!keys2[69]) {
			keypress(69,26);
	    }
	    if (keys[82]&&!keys2[82]) {
			keypress(82,27);
	    }
	    if (keys[84]&&!keys2[84]) {
			keypress(84,28);
	    }
	    if (keys[89]&&!keys2[89]) {
			keypress(89,29);
	    }
	    if (keys[85]&&!keys2[85]) {
			keypress(85,30);
		}
	    if (keys[50]&&!keys2[50]) { //black keys (2-6)
			keypress(50,31);
	    }
	    if (keys[51]&&!keys2[51]) {
			keypress(51,32);
	    }
	    if (keys[53]&&!keys2[53]) {
			keypress(53,33);
	    }
	    if (keys[54]&&!keys2[54]) {
			keypress(54,34);
	    }
	    if (keys[55]&&!keys2[55]) {
			keypress(55,35);
	    }
	    if (keys[90]&&!keys2[90]){ //white keys (Z-,)
			keypress(90,36);
		}
	    if (keys[88]&&!keys2[88]) {
			keypress(88,37);
	    }
	    if (keys[67]&&!keys2[67]) {
			keypress(67,38);
	    }
	    if (keys[86]&&!keys2[86]) {
			keypress(86,39);
	    }
	    if (keys[66]&&!keys2[66]) {
			keypress(66,40);
	    }
	    if (keys[78]&&!keys2[78]) {
			keypress(78,41);
	    }
	    if (keys[77]&&!keys2[77]) {
			keypress(77,42);
		}
		if (keys[188]&&!keys2[188]){
			keypress(188,48);
		}
	    if (keys[83]&&!keys2[83]) { //black keys (S-H)
			keypress(83,43);
	    }
	    if (keys[68]&&!keys2[68]) {
			keypress(68,44);
	    }
	    if (keys[71]&&!keys2[71]) {
			keypress(71,45);
	    }
	    if (keys[72]&&!keys2[72]) {
			keypress(72,46);
	    }
	    if (keys[74]&&!keys2[74]) {
			keypress(74,47);
	    }
	}else if (octave==4){
		if (keys[81]&&!keys2[81]){ //white keys (Q-U)
			keypress(81,36);
		}
	    if (keys[87]&&!keys2[87]) {
			keypress(87,37);
	    }
	    if (keys[69]&&!keys2[69]) {
			keypress(69,38);
	    }
	    if (keys[82]&&!keys2[82]) {
			keypress(82,39);
	    }
	    if (keys[84]&&!keys2[84]) {
			keypress(84,40);
	    }
	    if (keys[89]&&!keys2[89]) {
			keypress(89,41);
	    }
	    if (keys[85]&&!keys2[85]) {
			keypress(85,42);
		}
	    if (keys[50]&&!keys2[50]) { //black keys (2-6)
			keypress(50,43);
	    }
	    if (keys[51]&&!keys2[51]) {
			keypress(51,44);
	    }
	    if (keys[53]&&!keys2[53]) {
			keypress(53,45);
	    }
	    if (keys[54]&&!keys2[54]) {
			keypress(53,46);
	    }
	    if (keys[55]&&!keys2[55]) {
			keypress(54,47);
	    }
	    if (keys[90]&&!keys2[90]){ //white keys (Z-,)
			keypress(90,48);
		}
	    if (keys[88]&&!keys2[88]) {
			keypress(88,49);
	    }
	    if (keys[67]&&!keys2[67]) {
			keypress(67,50);
	    }
	    if (keys[86]&&!keys2[86]) {
			keypress(86,51);
	    }
	    if (keys[66]&&!keys2[66]) {
			keypress(66,52);
	    }
	    if (keys[78]&&!keys2[78]) {
			keypress(78,53);
	    }
	    if (keys[77]&&!keys2[77]) {
			keypress(77,54);
		}
		if (keys[188]&&!keys2[188]){
			keypress(188,60);
		}
	    if (keys[83]&&!keys2[83]) { //black keys (S-H)
			keypress(83,55);
	    }
	    if (keys[68]&&!keys2[68]) {
			keypress(68,56);
	    }
	    if (keys[71]&&!keys2[71]) {
			keypress(71,57);
	    }
	    if (keys[72]&&!keys2[72]) {
			keypress(72,58);
	    }
	    if (keys[74]&&!keys2[74]) {
			keypress(74,59);
	    }
	}
}