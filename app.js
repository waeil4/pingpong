const ball = document.getElementById("ball");
const tt = document.getElementById("tt");
const nn = document.getElementById("nn");
let x = 50;
let y = 50;
let x_tt = 50;
let x_rr = 1800;
let y_tt = 500;
let yc_tt = 400; 
let xSpeed = 10;
let ySpeed = 10;
let vy_up = 30;
let vy_down = 30;
let xy_up = 40;
let xy_down = 40;
let y_rr = 500;
let score_p1 = 0;
let score_p2 = 0;

console.log("hello")
function animate() {
   if (x  > 1890 ) {
      score_p1 = score_p1 + 1;
      document.getElementById('score_of_p1').innerHTML = score_p1;
      x = 250
      y = Math.floor(Math.random() * 901);
      xSpeed = xSpeed
   }
   if ( x < 0){
      score_p2 = score_p2 + 1;
      document.getElementById('score_of_p2').innerHTML = score_p2;
      x = 1250
      y = Math.floor(Math.random() * 901);
      xSpeed = xSpeed
   }
   if (y  > window.innerHeight || y < 0  ) {
      ySpeed = -ySpeed;
   }

   
   x += xSpeed;
   y += ySpeed;
   
   ball.style.left = x ;
   ball.style.top = y ; 
   if ((x==x_tt && y<=(y_tt + 100 ) && y>(y_tt - 100))||(x==(x_rr ) && y<=(y_rr + 225) && y>=(y_rr - 19))){
        xSpeed = -xSpeed;
   }
   if(score_p1 == 20 ){
      alert("player1 win"); 
      score_p1 = 0;
      score_p2 = 0;
      document.getElementById('score_of_p1').innerHTML = score_p1;
   }
   if(score_p2 == 20 ){
      alert("player2 win");
      score_p2 = 0;
      score_p1 = 0;
      document.getElementById('score_of_p2').innerHTML = score_p2;
   }
   requestAnimationFrame(animate);
}
animate(); 


function up_tt(){
   y_tt = y_tt - vy_up;
   tt.style.top = y_tt;
   if(y_tt  > window.innerHeight || y_tt < 10 || y_tt > 860 ){
     vy_up = 0;
     vy_down = 40;
   }else{
      vy_up = 40
   }
   
   
   

}
function down_tt(){
   y_tt = y_tt + vy_down;
   tt.style.top = y_tt;
   if(y_tt  > window.innerHeight || y_tt < 10 || y_tt > 860 ){
     vy_down = 0;
     vy_up = 40;
   }else{
      vy_down = 40;
   }

}
function up_rr(){
   y_rr = y_rr - xy_up;
   nn.style.top = y_rr;
   if(y_rr  > window.innerHeight || y_rr < -80 || y_rr > 760){
     xy_up = 0;
     xy_down = 40;
   }else{
      xy_up = 40;
   }

}
function down_rr(){
   y_rr = y_rr + xy_down;
   nn.style.top = y_rr;
   if(y_rr  > window.innerHeight || y_rr < -80 || y_rr > 760){
     xy_down = 0;
     xy_up = 40;
   }else{
      xy_down = 40;
   }

}



document.addEventListener("keydown", function(event) {
   if (event.key === 'z') {
     document.getElementById("arrowup").click();
   }
});
document.addEventListener("keydown", function(event) {
   if (event.key === 's') {
     document.getElementById("arrowdown").click();
   }
});
document.addEventListener("keydown", function(event) {
   if (event.key === 'ArrowUp') {
     document.getElementById("up").click();
   }
});
document.addEventListener("keydown", function(event) {
   if (event.key === 'ArrowDown') {
     document.getElementById("down").click();
   }
});