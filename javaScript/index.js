
var score=0;
var base=0;
var AInumber= Math.floor(Math.random()*11+1);
for(var a=0;a<document.querySelectorAll(".number").length;a++){
  document.getElementsByClassName("number")[a].addEventListener("click",guessTheNumber);
}
function guessTheNumber(){
  var number=this.textContent;
  var correct= new Audio("sounds/success.mp3");
  var wrong= new Audio("sounds/wrong.wav");

if(score!==base){
  alert("REFRESH TO PLAY AGAIN !");
}

else{

  if(number==AInumber){
    score++;
    this.style.color="#ffff";
    this.style.backgroundColor="green";
    correct.play();
    document.getElementById("heading").innerHTML="<h1>REFRESH TO PLAY AGAIN</h1>";

    // score
if(score===1){
  document.querySelector(".userResult").innerHTML="Congratulations you got it in "+score+"st attempt!"
}
else{
  document.querySelector(".userResult").innerHTML="You got it in "+score+" attempts!"
}
  }

  else if(number!==AInumber){
    score++;
    base++;
    this.style.color="red";
    this.style.backgroundColor="red";
    wrong.play();
  }

}
}
