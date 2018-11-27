var diam1=18;
var r, g, b;
function setup() {
  // put setup code here\
    createCanvas(500, 500);//sets size of canvas in browser and displays it
}

function draw() {
  // put drawing code here
    background(r, g, b);
    //code for circle
    ellipse(250, 250, 100, 100);
    fill('#d81aed');
    stroke('#1ad4f4');
    strokeWeight(10);
    ellipse(250, 250, diam1, diam1);
    diam1= diam1+1;
    if(diam1 > 100){
        diam1=10;
    }
    //code for text
    strokeWeight(0);
    fill('#000000');
    textFont('Sans-serif')
    textStyle(ITALIC);
    textSize(24);
    text('GANG',213,260);
    
    
}
function keyPressed() {
    r = random(255);
    b = random(255);
    background(r, g, b);
    if(keyCode === LEFT_ARROW) {
        r = 0;
        g = 0;
        b = 0;
    }
    if(keyCode === RIGHT_ARROW) {
    }
    background(r, g, b);
}