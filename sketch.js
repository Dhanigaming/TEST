var iss , issImage, SC , SCimage1 , SCimage2 , SCimage3 , SCimage4 ;
var backgroundImg;
var hasDocked;
var ISC

function preload(){
 backgroundImg = loadImage("spacebg.jpg");
 issImage = loadImage("iss.png");
 SCimage1 = loadAnimation("spacecraft1.png","spacecraft1.png","spacecraft1.png");
 SCimage2 = loadAnimation("spacecraft2.png","spacecraft2.png","spacecraft2.png");
 SCimage3 = loadAnimation("spacecraft3.png","spacecraft3.png","spacecraft3.png");
 SCimage4 = loadAnimation("spacecraft4.png","spacecraft4.png","spacecraft4.png");

}


function setup() {
  createCanvas(windowWidth , windowHeight);
  
  SC = createSprite(windowWidth/2 , 600 , 100, 50);
  SC.addAnimation("spacecraft",SCimage1);
  SC.scale = 0.3;

  iss = createSprite(windowWidth/2 , windowHeight/2, 100, 50);
  iss.addImage("spacecraft",issImage);

  ISC = createSprite(700,400,20,20);
  ISC.visible = false;


  hasDocked = false ;
}

function draw() {
     background(backgroundImg);
     
     SC.setCollider("circle",0,0,80);
     ISC.setCollider("rectangle",0,0,20,20);
     ISC.debug = false;
     SC.debug = false;
    
    if(keyDown(RIGHT_ARROW)){
      SC.changeAnimation(SCimage4);
      SC.x += 1;
      
    }
    if(keyDown(LEFT_ARROW)){
      SC.changeAnimation(SCimage3);
      SC.x -= 1;
     
    }
    if(keyDown(UP_ARROW)){
      SC.changeAnimation(SCimage1);
      SC.y -= 1;
      
    }
    if(keyDown(DOWN_ARROW)){
      SC.changeAnimation(SCimage2);
    } 
    
    if(ISC.isTouching(SC)){
      hasDocked = true ;
     
      if(keyDown(RIGHT_ARROW)){
        SC.x += 0;       
      }
      if(keyDown(LEFT_ARROW)){
        SC.x -= 0;  
      }
      if(keyDown(UP_ARROW)){
        SC.y -= 0;       
      }
      
    }  
  
     

    if(ISC.isTouching(SC)){
      hasDocked = true ;
     
      fill("white");
      stroke("black");
      textSize(50)
      text("Docking Successful !",100,500);
      
    }  
  

  
  console.log(SC.x);
  console.log(SC.y);

  drawSprites();
} 