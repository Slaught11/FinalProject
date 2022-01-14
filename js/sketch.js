//declared global variables that can alter the change of direction and position 
var velocity, changeDirection, x, y
var s = 500;
var canvas
var snowflake


let snowflakes = []; // array to hold snowflake objects
let cloudx = 100;
let cloudy = 100;
//var cloudw =70;
//var cloudh =50;
let blue = (189);

function setup() {
    var canvas = createCanvas(600, 400);
    canvas.parent("p5container");
    noStroke();
    changeDirection = false; //boolean value
}

function draw() {
    background(137,207,240);
let t = frameCount / 60; // update time
  


  
  
 

  
 





  
  

 //change of color when mouse moved to right of screen
  if(mouseX < width/2){
    fill(87);
    background(width/2, height/2, 100, 100);
  } else {
    fill(87);
    background(width/2, height/2, 100)
    fill(130)
  }
  
  //change of colour to black when mouse is moved halfway down the screen
 if(mouseY < height/3){
    fill(0);
  } else if(mouseY < height/3*3){
    background(0);
  } else {
    fill(0);
  }
  
  
  
  
  
  
  
  
 

  
  
//making stars that come out when mouse is half way down screen

  {fill(255, 204, 0)

 if(mouseY > height/3){
    fill(255,255,0); 
   ellipse(70,20,5,5)
ellipse(85,120,5,5)
ellipse(25,10,5,5)
ellipse(150,70,5,5)
ellipse(300,120,5,5)
ellipse(10,200,5,5)
ellipse(200,10,5,5)
ellipse(250,90,5,5)
ellipse(400,20,5,5)
ellipse(550,200,5,5)
ellipse(430,100,5,5)
ellipse(100,200,5,5)
ellipse(150,170,5,5)
ellipse(250,300,5,5)
ellipse(570,20,5,5)
ellipse(50,250,5,5)
ellipse(200,240,5,5)
ellipse(370,210,5,5)
ellipse(430,240,5,5)
   } else if(mouseY < height/3*3){
     fill(255);
  } } 
  
//have ellipse (sun) follow the mouse
  fill(255, 204, 0)
  ellipse(mouseX,mouseY,200,200)
  
  //make ellipse change colour when half way down screen
   if(mouseY > height/3){
    fill(215); 
    ellipse(mouseX,mouseY,200,200);
    
   } else if(mouseY < height/3*3){
     fill(255);
  }
  
  
  
//make craters in moon come out when moving ellipse half way down the screen

  {fill(255, 204, 0)
ellipse(mouseX,mouseY,20,20)
ellipse(mouseX +70,mouseY,30,30)
ellipse(mouseX +20,mouseY +40,30,30)
ellipse(mouseX -20,mouseY -60,35,35)
ellipse(mouseX -60,mouseY +50,30,30)
 if(mouseY > height/3){
    fill(200); 
    ellipse(mouseX,mouseY,20,20);
    ellipse(mouseX +70,mouseY,30,30)
    ellipse(mouseX +20,mouseY +40,30,30)
    ellipse(mouseX -20,mouseY -60,35,35)
    ellipse(mouseX -60,mouseY +50,30,30)
   } else if(mouseY < height/3*3){
     fill(255);
  } }
  
  
 
  

//making a constant flow of clouds
makeCloud(cloudx, cloudy);
makeCloud(cloudx +380, +60)
makeCloud(cloudx +270, +170)
makeCloud(cloudx +70, cloudy + 60);
makeCloud(cloudx -110, cloudy -80)
makeCloud(cloudx -220, cloudy +60)
makeCloud(cloudx -330, cloudy +5)
makeCloud(cloudx -450, cloudy -100)
makeCloud(cloudx -600, cloudy -70)
makeCloud(cloudx -700, cloudy +50)
makeCloud(cloudx -800, cloudy -30)
makeCloud(cloudx -890, cloudy +90)
makeCloud(cloudx -1000, cloudy -100)
makeCloud(cloudx -1120, cloudy +5)
makeCloud(cloudx -1250, cloudy +50)
makeCloud(cloudx -1400, cloudy -70)
makeCloud(cloudx -1500, cloudy -30)
makeCloud(cloudx -1630, cloudy +5)
makeCloud(cloudx -1800, cloudy -100)
makeCloud(cloudx -1920, cloudy +50)
makeCloud(cloudx -2000, cloudy -70)
makeCloud(cloudx -2125, cloudy -5)
makeCloud(cloudx -2305, cloudy +70)
makeCloud(cloudx -2450, cloudy -35)
makeCloud(cloudx -2550, cloudy +85)
makeCloud(cloudx -2700, cloudy +5)
makeCloud(cloudx -2830, cloudy -75)
makeCloud(cloudx -3000, cloudy +80)
  
  


//iceberg 
if(mouseY > height/3){
    fill(250);
    triangle(100,400,500,400,175,100)
    
   } else if(mouseY < height/3*3){
     fill(128);
  }
  
  
  
  //mountain
  triangle(100,400,500,400,250,150)
  
  if(mouseY > height/3){
    fill(250);
    triangle(100,400,500,400,230,0)
    
   } else if(mouseY < height/3*3){
     fill(128);
  }
  triangle(100,400,500,400,250,50)
  triangle(100,300,500,400,200,50)
  //triangle(0,300,500,400,200,50)
  
  
  
  //making foliage to show an island
fill(0,100,0)
ellipse(100,270,130,90)
ellipse(170,270,130,90)
ellipse(240,270,130,90)
ellipse(310,270,130,90)
ellipse(380,270,130,90)
  
if(mouseY > height/3){
    fill(255)
    ellipse(100,270,130,90)
    ellipse(170,270,130,90)
    ellipse(240,270,130,90)
    ellipse(310,270,130,90)
    ellipse(380,270,130,90)
    
   } else if(mouseY < height/3*3){
     fill(128)
  }
  
  
  
 


fill(220)
noStroke();
cloudx+=0.15;
  
  
  
  
  
//making the foreground lake/sea

  
fill(0,255,255)
rect(0,270,600,400)
  
fill(85,213,200)
rect(0,300,600,400)

fill(100,235,255)
rect(0,330,600,400)
  
fill(48,213,200)
rect(0,360,600,400)

if(mouseY > height/3){
    fill(0,0,128)
    rect(0,225,600,400)
    
   } else if(mouseY < height/3*3){
     fill(0);

   

     
     
   //making snow/ rain that falls down 
// create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
    
    if(mouseY > height/3){
    fill(255);
    
    
   } else if(mouseY < height/3*3){
     fill(173,216,230);
  }
    
  };
  
  
  
  
  
  
  
    
    //making a boat that moves across the screen

  
fill(150,75,0)
rect(250,280,80,50)
fill(150,75,0)
triangle(210,280,250,280,250,330)
triangle(330,280,330,330,370,280)
rect(285,280,10,-80)
fill(255)
triangle(275,165,275,235,340,230)
fill(255,255,0)
rect(305,295,20,20)
rect(255,295,20,20)
  
  
  
}
  function makeCloud(cloudx, cloudy){
    fill(250);
    ellipse(cloudx, cloudy, 70, 50);
    ellipse(cloudx + 10, cloudy +10, 70, 50);
    ellipse(cloudx - 20, cloudy +10, 70, 50);
    
    
    
  
}
 }
   

