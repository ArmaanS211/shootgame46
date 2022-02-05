var bg, bg_image;
var platform, platform_img, platformGroup;
var player, player_img

function preload(){
    bg_image = loadImage("Images/Background.jpeg");
    platform_img = loadImage("Images/platform.png");
    player_img = loadImage("Images/PC Boy.png");
}

function setup(){
    createCanvas(1200, 700);
    bg = createSprite(1000, 350);
    bg.addImage(bg_image);
    bg.scale = 2.0;

    platformGroup = new Group;

    player = createSprite(50, 630);
    player.addImage(player_img);
    player.scale = 0.5;
    player.debug = true;
    
    player.setCollider("rectangle", 0,100,0,10)

}

function draw(){
    background(0);

    bg.velocityX = -3;

    if(bg.x < 200){
        bg.x = bg.width/2;

    }

    /*if(keyDown("UP_ARROW") && player.y >= 500){
        player.y = player.y-40;
        
    }

    if( player.y <= 630){
        player.y = player.y+30;
    }*/

    if (keyDown("space") && player.y>= 450 ) {
      player.velocityY = -12  
    }
    if (keyDown("RIGHT_ARROW")) {
        player.x+=1;
      }
    if (keyDown("LEFT_ARROW")) {
        player.x-=3;
    }
console.log(player.y)
    player.velocityY = player.velocityY +0.5;

    if(platformGroup.isTouching(player)){
        player.velocityY = -0.01;
        if (keyDown("space") && player.y >= 450-platform.y) {
            player.velocityY = -12  
        }
    }
    

    spawnPlatforms();
    drawSprites();

}

function spawnPlatforms(){
    
    if(World.frameCount % 100 === 0){
        platform = createSprite(1200, 600);
        platform.y = Math.round(random(600, 400));
        platform.addImage(platform_img);
        platform.velocityX = -3;
        platformGroup.add(platform);
        platform.scale = 0.25;
    }

    
    
}