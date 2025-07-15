
var randomNumber1=Math.floor(Math.random() *6 + 1);
var randomNumber2=Math.floor(Math.random() *6 + 1);
var image1="images/dice"+randomNumber1+".png";
var image2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  


// var randomDiceImage="dice"+randomNumber1+".png";

// var randomImageSource1="images/"+randomDiceImage;

// var image1=document.querySelectorAll("img")[0];

// image1.setAttribute("src",randomImageSource1);
// var randomNumber2=Math.floor(randomNumber2*6+1);
// var randomDiceImage="dice"+randomNumber2+".png";
// var randomImageSource2="images/"+randomDiceImage;
// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomImageSource2);
// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML="player 1 wins!";}
//     else{
//         document.querySelector("h1").innerHTML="player 2 wins!";
//     }




