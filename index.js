// Change player 1 dice
var randomNumber1 = Math.floor(Math.random()*6)+1;
var img1Source = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = img1Source;

// Change player 2 dice
var randomNumber2 = Math.floor(Math.random()*6)+1;
var img2Source = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").src = img2Source;

// Update header to show who won
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
