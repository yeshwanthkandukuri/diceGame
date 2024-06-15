var random1=Math.floor(6*Math.random())+1;
var random2=Math.floor(6*Math.random())+1;
var add1="./images/dice"+String(random1)+".png";
var add2="./images/dice"+String(random2)+".png";
document.querySelector(".img1").setAttribute("src",add1);
document.querySelector(".img2").setAttribute("src",add2);
if(random1>random2)
    document.querySelector(".whowins").innerHTML="Player 1 wins";
else if(random1==random2)
 document.querySelector(".whowins").innerHTML="It's a tie";
else
document.querySelector(".whowins").innerHTML="Player 2 wins";

