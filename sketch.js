var canvas;
var music;
var box;
var wall1,wall2,wall3,wall4;
var boundary1,boundary2,boundary3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box = createSprite(110,105,35,35);
    box.shapeColor = "orange";
    box.velocityY = "8";
    

    wall1  = createSprite(110,580,140,30);
    wall1.shapeColor = "blue";

    wall2 = createSprite(300,580,140,30);
    wall2.shapeColor = "yellow";

    wall3 = createSprite(490,580,140,30);
    wall3.shapeColor = "pink";

    wall4 = createSprite(680,580,140,30);
    wall4.shapeColor = "red";

    boundary1 = createSprite(10,10,10,1800)
    boundary1.shapeColor = "green";

    boundary2 = createSprite(790,20,10,1800)
    boundary2.shapeColor = "green";

    boundary3 = createSprite(800,10,1800,10)
    boundary3.shapeColor = "green";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    
    box.bounceOff(boundary1);
    box.bounceOff(boundary2);
    box.bounceOff(boundary3);
    
    
    if(wall1.isTouching(box) && box.bounceOff(wall1)){
        wall1.shapeColor = "orange";
        box.shapeColor = "blue";
        
    }
    if(wall2.isTouching(box) && box.bounceOff(wall2)){
        wall2.shapeColor = "orange";
        box.shapeColor = "yellow";
        
    }
    if(wall3.isTouching(box) && box.bounceOff(wall3)){
        wall3.shapeColor = "orange";
        box.shapeColor = "pink"
        
    }
    if(wall4.isTouching(box) && box.bounceOff(wall4)){
        wall4.shapeColor = "orange";
        box.shapeColor = "red";
        
    }

    
    drawSprites();
}
