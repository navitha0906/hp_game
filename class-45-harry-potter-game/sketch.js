var gameState=1;
var play;
var hp,rw,hg,dm;
var hpB,rwB,hgB,dmB;

function preload(){
    background1=loadImage("welcome background.PNG")
    background2=loadImage("background1.PNG")
    play_button=loadImage("play button.PNG")
    harry_potter=loadImage("harry potter1.png")
    ron_weasley=loadImage("rw.webp")
    hermionie_granger=loadImage("hg.png")
    draco_malfoy=loadImage("dm.png")
}

function setup(){
   var canvas = createCanvas(1200,600)
   play = createSprite(600,430,20,10)
   play.addImage(play_button)
   play.scale = 0.25;
   hp=createSprite(550,200,20,10);
   hp.addImage(harry_potter)
   hp.scale=0.1;
   rw=createSprite(400,200,0.5,10);
   rw.addImage(ron_weasley);
   rw.scale=0.8;
   hg=createSprite(700,200,20,10);
   hg.addImage(hermionie_granger);
   hg.scale=0.3;
   dm=createSprite(845,200,20,10);
   dm.addImage(draco_malfoy);
   dm.scale=0.6;
   player=createSprite(100,450,40,80);


}

function draw(){
    background(background1)
     
    fill("white");
    text("x:"+mouseX,50,50);
    text("y:"+mouseY,50,70);

    if(gameState === 1){
    
    strokeWeight(3)
    fill("white")
    stroke("white")
    textSize(50)
    text("Welcome",500,200);

    hp.visible=false;
    rw.visible=false;
    hg.visible=false;
    dm.visible=false;
    player.visible=false;

    if(mousePressedOver(play)){
        gameState=2;
        
    }

    }
    else if(gameState === 2){

     fill("white");
     textSize(20);
     text("Select the Player Name",500,50);

    play.destroy();

    hp.visible=true;
    rw.visible=true;
    hg.visible=true;
    dm.visible=true;

    player.visible = false;

    hpB=createButton('Harry Potter');
    hpB.position(510,400)
    rwB=createButton('Ron Weasely');
    rwB.position(350,400)
    hgB=createButton('Hermione Granger');
    hgB.position(640,400)
    dmB=createButton('Draco Malfoy');
    dmB.position(815,400)

    hpB.mousePressed(function (){
   
        gameState=3;
        hpB.hide()
        player.addImage(harry_potter);
        player.scale=0.1;
    })
    rwB.mousePressed(function (){
        gameState=3;
        player.addImage(ron_weasley);
        player.scale=0.8;
    })
   hgB.mousePressed(function (){
        gameState=3;
        player.addImage(hermionie_granger);
        player.scale=0.3;
    })
   dmB.mousePressed(function (){
        gameState=3;
        player.addImage(draco_malfoy);
        player.scale=0.6;
    })

    }
    else if(gameState===3){
 background(background2);

 player.visible=true;

 hp.destroy();
 rw.destroy();
 hg.destroy();
 dm.destroy();

 }
    

   drawSprites();
 
}

