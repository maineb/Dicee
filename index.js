
function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}

function imgSelector(img, n){
  document.querySelector(img).setAttribute("src", "images/dice" + n + ".png");
}

function displayResults(result){
  document.querySelector("h1").innerText = result;
}

var dice1 = rollDice();
imgSelector(".img1",dice1);

var dice2 = rollDice();
imgSelector(".img2",dice2);

if(dice1 > dice2){
  displayResults("🚩Player 1 Wins!") ;
}
else if(dice1 < dice2){
  displayResults("Player 2 Wins!🚩") ;
}
else{
  displayResults("Draw!");
}
