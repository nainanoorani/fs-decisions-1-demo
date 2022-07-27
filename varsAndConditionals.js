// In this file, we'll be using variables, conditionals,
// and loops to model a soccer match.

//In this file, we'll be using variables, conditionals, and loops to model a soccer match between the Emerald Eagles and Draconian Dragons


//Create variables to represent the two team's offensive and defensive ability based on stats from previous games. Higher is better.

let eaglesOff = 9;
let dragonsOff = 5;
let eaglesDef = 6;
let dragonsDef = 3;

//Before the game, fans decide to check their stats. Using an if-else statement, console log whose offense is better

if (eaglesOff>dragonsOff){
    console.log("Emerald Eagles offense is better than Draconian Dragons.")
}
else if (eaglesOff===dragonsOff){
    console.log("Emerald Eagles and Draconian Dragons have equally good offenses.")

} else {
    console.log("Draconian Dragons offense is better than Emerald Eagles.")
}
//The fame begins! Create two variables to represent the starting scores of the game.
let eaglesScore=0;
let dragonsScore=0;

//The Dragons start with the ball - use an if/else to determine if the Eagles defense is enough to prevent them from scoring. If it is not enough print "The dragons have scored" and update the score, otherwise print "The game continues"

if (dragonsOff > eaglesDef){
    console.log("Dragons have scored!")
    dragonsScore++;
} else{
    console.log("The game continues.")
}
 //Now the eagles have the ball. Let's see if the eagles' offense can score against the dragons' defense.

 if (eaglesOff > dragonsDef){
    console.log("Eagles have scored.")
    eaglesScore++;
 } else{
    console.log("The game continues")
 }

 //After playing a long time eagles offense is tired. Swap out a player, raising eagles offense ability by 5. Offense ability can never exceed 10.

 if(eaglesOff<=5){
    eaglesOff+=5;
 } else {
    eaglesOff=10;
 }
 console.log(`Eagles Offense: ${eaglesOff}`);

 //The coach for the Dragons team is thinking about taking a timeout. She flips a coin. If heads, she will take a time out. Otherwise she won't. Create variable called coinLandsHeads and set it equal to false. Then  use if-else.

 let coinLandsHeads=true;

//  if(coinLandsHeads === true){
//     console.log("The Dragons coach calls timeout.")
//  } else{
//     console.log("Let's keep playing")
//  }
 // Demo same thing with not equals

 if(!coinLandsHeads){
    console.log("Let's keep playing")
 } else{
    console.log("The Dragons coach calls timeout.")
 }
 //Create a loop to model eagles scoring 5 times. print scores of the teams after each goal.

 for(let i=1; i<=5; i++){
    if(eaglesOff>dragonsDef){
        console.log("The Eagles have scored.");
        eaglesScore++;
        console.log(`And the scores are Eagles: ${eaglesScore} Dragons : ${dragonsScore}`);   
    } else{
        console.log("The game continues.")
    }
 }

 //Demo a while loop that will have the Dragons score until they have 5 goals. //Add if statement that'll only let Dragons score if their offense ability than Eagles defense ability

 if(dragonsOff>eaglesDef){
    while(dragonsScore<5){
        dragonsScore++;
    } 
 } else{
}
 console.log(`Dragons Score: ${dragonsScore}`);

 