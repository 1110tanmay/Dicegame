//Player one:
var randomNumber1=Math.floor(Math.random()*6)+1; //  to give us random number between 1 to 6
var randomDiceImage= "dice" +randomNumber1+ ".png"; //randomDice image selector based on randomNumber1 ( Read String concatenation in JS)
var randomImage= "images/" +randomDiceImage; //Random source selector (string dice1.png for eg)
var image1=document.querySelectorAll("img")[0]; //selecting img class and first image out of it(inside square brackets).
image1.setAttribute("src", randomImage); //selecting the source of the file and what it is to be set to
//Player two:
var randomNumber2=Math.floor(Math.random() *6) +1;
var randomDiceImage2= "dice" +randomNumber2 + ".png";
var randomImage2= "images/" +randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player one worn";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player two has won";
}
else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Congratulations you both won";
}
