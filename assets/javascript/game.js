"use strict";

$(document).ready(function() {

            
alert("Let's Play!");
alert("Pick a letter");

        /* -------------------------------------
            I commented out the (letter).on('click'),
            it looks like you are trying to change the 
            text on the page when a letter is clicked, 
            but you are already doing that in 
            (letter.button).on('click')

            Checkout the comment on line 94 and then try to
            implement the steps below.

            Here's our next step:

            1. inside of the (letter-button).on("click")
                function, try to console.log out different
                things until you get the letter that was
                clicked to log.
                HINT: you have already accessed the letter 
                once inside that function to add the letter to 
                the div that you are appending to the display

                2. Once you get that logging, save that value to 
                in a variable

                3. Down on line 110 you already created an array of
                all the letters in the random word and called it res
                so now we need to loop through the res array and see
                if the letter pressed is equal to any of those letters
                (This part is tricky so slack me if you get stuck)

        -----------------------------------------*/

            

            $(".letter-button").on("click", function() {
                var wordBank = $("<div>");
                console.log(this);
                wordBank.addClass("letter");
                wordBank.text($(this).attr("data-letter"));
                $("#display").append(wordBank);
            });

    /* -------------------------------------
        Awesome job! This is perfect now!
    -----------------------------------------*/

            $("#clear").on("click", function() {
                $("#display").empty();
            });



            /* -------------------------------------
                You almost had rw split into an array of 
                characters, but you had str.split("") which 
                was giving yo an error because str was not 
                defined (i.e. you don't have a variable named
                str). .split("") is a function that splits a string
                into separate pieces. Since the string you are trying
                to split is named rw, we need to write rw.spit("").
                I already made this minor change for you, I just 
                wanted you to understand why. 
            -----------------------------------------*/

            
                var flowers = ["daisy", "lilac", "lotus", "pansy", "peony", "tulip", "viola", "bloom"]
                var rw = flowers[Math.floor(Math.random() * flowers.length)];
                var res = rw.split("");
                console.log("the random word is", rw);
                
                console.log("the random word contains the letters", res);

                    
               // var numOfWords = 8;
               // var letterSelected = ("");
               // var displayWord = ("_");
                             
               //   var answerArray =[i]
               //   for (vari=0 i < rw.length; i++) {
               //   answerArray[i]="_";
               //  // }

               
                //function displayWord(){
                //     var
                //     $(#"rightGuesses")
                //      $(."letter")
                // }

            //     function displayGuesses(){
            //     for (i=0; i < rw.length; i++) {
            //     if (guessed.indexOf(rw.charAt(i)) !== -1) 
            //      pattern += "_"
            // // }
            
            // }
            
            
            // function wrongAnsw() {
            //     if(rw.indexOf()==-1) return false
                    
            // }

            // function YouWin() {
            //     for(i=0; i<toGuess.length; ++i) {
            //         if(rw.indexOf(toGuess.charAt(i))== -1) return
            //     }
            // return true
            // }
            
            // function predict(){
            //     if(rw.indexOf(j)== -1) guessed =  + guessed
            //     if(wrongAnsw(j)) ++guesses
            //     displayGuesses()
            //     displayGuessed()
            //     if(guesses >= max){
            //         alert("You Lose!")
            //         Restart()
            //     }


            });


                



                // function randomWord() {
                //     for (var i = 0; i < rw; i++) {

                //     }
                // }


                //need counter
                //var counter = 0;

                //need function to get list of words




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
            ;
       