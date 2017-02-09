function setup() {

 createCanvas(700,550);

}

function draw() {
  background(255);
  
   translate(width/2,height/2);
  for(var i =0 ;i<TWO_PI;i+=0.001){
    var r = 50*cos(12*i);
    var x = r*cos(i);
    var y = r *sin(i);
    var r1 = 53;
    var x1 = r1*cos(i);
    var y1 = r1 *sin(i); 
    stroke(9, 3, 130);
    strokeWeight(2);
    point(x,y);
    strokeWeight(3);
    point(x1,y1);
  }
  
  
fill(255, 153, 51);
noStroke();
rect(-width/2,-height/2,width,(height/2)-90);
fill(19,136,8);
rect(-width/2,60+22.5,width,(height/2)-90);

}