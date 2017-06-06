*Use Strict*

//array of list of words

var flowers = ["daisy", "lilac", "lotus", "pansy", "peony", "tulip", "viola", "bloom"]
var rw = Math.floor(Math.random() * flowers.length);

//need function to get list of words
function randomword() {
	var rw = flowers[Math.floor(Math.random() * flowers.length];

}

//alphabet
var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
 "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//create event when key is pressed and display on screen
//retrieve user guesses

function keyRelease(event){
	var alphabet = document.write(event.key);
}

//wrong letters result in man on the gallow 

var input = ("guessed letter");

for (var i = 0; i != flowers.length; i++){
		if (flowers.indexOf(flowers[i])

	if(input==flowers){
		document.write();
	else(document.write("try again"));
	}
}

//display wins and loss

document.addEventListener("keyUp", keyRelease);