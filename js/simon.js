function boutonEteint(bouton) {
	bouton.id = bouton.id.split("-")[0]+"-off";
}

function boutonAllume(bouton, index) {
	sounds[index].load();
	sounds[index].play();
	bouton.id = bouton.id.split("-")[0]+"-on";

	setTimeout(function(){
		boutonEteintn(bouton);
		}, tempsAllume);
}

function clickBouton(bouton, index) {
	boutonAllume(bouton, index);

	
}

function creerListener() {
	boutons.forEach(function(element, index) {
		element.addEventListener("click", function(){
			clickBouton(element, index);
		});
	});
}

function startGame() {
	var pseudo = prompt ("Entrez votre pseudo");
	pseudoSpan.innerHTML = pseudo;
	presenterSequence();
}



var boutons = document.querySelectorAll(".boutonJeux");
var pseudoSpan = document.querySelector("#pseudoText");

var sounds = new Array();
for(var i = 0 ; i < boutons.length ; i++) {
	sounds[i] = new Audio("sound/"+i+".wav");
}

creerListener();


startGame();
