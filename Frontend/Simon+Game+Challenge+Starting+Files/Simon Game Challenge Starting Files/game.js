
var buttonColour=["red", "blue", "green", "yellow"]
var gamePattern=[];
var userClickedPattern=[];
$("btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);


})

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*3+1);
    var randomChosenColour =buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
 
}

 