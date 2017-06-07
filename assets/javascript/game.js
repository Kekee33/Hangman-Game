"use strict"

//alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
 "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


for (var i = 0; i < alphabet.length; i++) {
	
	var letterBtn = $("<button>");

	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", alphabet[i]);
	letterBtn.text(alphabet[i]);
	$("#buttons").append(letterBtn);
}

 $(".letter-button").on("click", function() {

 	var wordBank = $("<div>");

 wordBank.addClass("letter");
 wordBank.text($(this).attr("data-letter"));
 $("#display").append(wordBank);
});

  $("clear").on("click", function() {
  $("#display").empty();
});
 
//function letters() {
	//document.write(alphabet);
//}

//letters();
//document.write(alphabet);

//array of list of words
//var randomWord
//var flowers = ["daisy", "lilac", "lotus", "pansy", "peony", "tulip", "viola", "bloom"]
//var rw = flowers[Math.floor(Math.random() * flowers.length)];

//need counter
//var counter = 0;

//need function to get list of words

//function randomWord() {
	//for (var i = 0; i < rw; i++)


//empty array to store the answers
//var answerArray = [];
//function start() {
	//for (var i = 0; 1 < rw.length; i++)
		//answerArray[i] = "_";



//create event when key is pressed and display on screen
//retrieve user guesses

//function keyRelease(event){
	//var alphabet = document.write(event.key);


//wrong letters result in man on the gallow 

//var input = ("guessed letter");

//for (var i = 0; i != flowers.length; i++){
		//if (flowers.indexOf(flowers[i])

	//if(input==flowers)
		//document.write();
	//else(document.write("try again"));
	


//display wins and loss

//document.addEventListener("keyUp", keyRelease);