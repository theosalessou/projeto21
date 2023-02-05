var MENU = 0;
var PLAY = 1;
var END = 2;
var gameState = MENU;

var path1, path2, pathImg;
var grassR, grassL, grassImg;
var fence1R, fence2R, fence3R, fence4R, fence5R, fence6R, fence7R, fence8R, fence9R, fence10R, fence1L, fence2L, fence3L, fence4L, fence5L, fence6L, fence7L, fence8L, fence9L, fence10L, fenceImg;

var house1R, house2R, house3R, house4R;
var brownHouseImgR, greenHouseImgR, blueHouseImgR, pinkHouseImgR;

var bullet, bulletImg;
var greg, gregAnim, gregImg;

var zombie1, zombie2, zombie1Anim;
var zombie1G, zombie2G;

var distance = 0;

var ddz, ddzImg;
var gameoverImg, gameover;

function preload(){

    gregAnim = loadAnimation("greg1-1.png","greg1-2.png","greg1-3.png");
    gregImg = loadImage("greg1-1.png");

    zombie1Anim = loadAnimation("zombie1-1.png","zombie1-2.png","zombie1-3.png");

    pathImg = loadImage("path.png");

    grassImg = loadImage("grass.png");

    fenceImg = loadImage("fence.png");

    ddzImg = loadImage("ddz.png");
    gameoverImg = loadImage("gameover.png");

}

function setup(){

    createCanvas(400,400)

    //Paths

    path1 = createSprite(200,200);
    path1.addImage(pathImg);

    path2 = createSprite(200, 408);
    path2.addImage(pathImg);

    //Grasses

    grassR = createSprite(360,200);
    grassR.addImage(grassImg)

    grassL = createSprite(40,200);
    grassL.addImage(grassImg)

    //Fences

    fence1R = createSprite(335,375);
    fence1R.addImage("fence", fenceImg);
    fence2R = createSprite(384,375);
    fence2R.addImage("fence", fenceImg);
    fence3R = createSprite(335,275);
    fence3R.addImage("fence", fenceImg);
    fence4R = createSprite(384,275);
    fence4R.addImage("fence", fenceImg);
    fence5R = createSprite(335,175);
    fence5R.addImage("fence", fenceImg);
    fence6R = createSprite(384,175);
    fence6R.addImage("fence", fenceImg);
    fence7R = createSprite(335,75);
    fence7R.addImage("fence", fenceImg);
    fence8R = createSprite(384,75);
    fence8R.addImage("fence", fenceImg);
    fence9R = createSprite(335,-25);
    fence9R.addImage("fence", fenceImg);
    fence10R = createSprite(384,-25);
    fence10R.addImage("fence", fenceImg);

    fence1L = createSprite(17,375);
    fence1L.addImage("fence", fenceImg);
    fence2L = createSprite(66,375);
    fence2L.addImage("fence", fenceImg);
    fence3L = createSprite(17,275);
    fence3L.addImage("fence", fenceImg);
    fence4L = createSprite(66,275);
    fence4L.addImage("fence", fenceImg);
    fence5L = createSprite(17,175);
    fence5L.addImage("fence", fenceImg);
    fence6L = createSprite(66,175);
    fence6L.addImage("fence", fenceImg);
    fence7L = createSprite(17,75);
    fence7L.addImage("fence", fenceImg);
    fence8L = createSprite(66,75);
    fence8L.addImage("fence", fenceImg);
    fence9L = createSprite(17,-25);
    fence9L.addImage("fence", fenceImg);
    fence10L = createSprite(66,-25);
    fence10L.addImage("fence", fenceImg);

    //Greg

    greg = createSprite(200,350);

    //Group

    zombie1G = new Group();
    zombie2G = new Group();

    //ddz

    ddz = createSprite(200,200);
    ddz.addImage("ddz", ddzImg)

    //Game Over

    gameover = createSprite(200,200);
    gameover.addImage("gameover", gameoverImg);

}

function draw(){

// -------------------- MENU --------------------

if(gameState == MENU){

    path1.velocityY = 0;
    path2.velocityY = 0;

    ddz.visible = true;
    gameover.visible = false;

    greg.addAnimation("gregAnim", gregAnim);

    if(keyWentDown("enter")){
        gameState = PLAY;
    }

}

// -------------------- END --------------------

    if(gameState == END){

        gameover.visible = true

        zombie1.visible = false;
    }

    if(gameState == PLAY){

        ddz.visible = false;

        text("Aperte ENTER para iniciar", 100,200)
    
        background("0")
    
        if(World.frameCount % 120 == 0){
    
            zombie1 = createSprite(Math.round(random(100,300)),-100)
            zombie1.addAnimation("zombie", zombie1Anim);
    
            zombie1.velocityY = +4;
    
            zombie1G.add(zombie1);
    
        }

        if(World.frameCount % 360 == 0){
    
            zombie2 = createSprite(Math.round(random(100,300)),-500)
            zombie2.addAnimation("zombie", zombie1Anim);
    
            zombie2.velocityY = +4;
    
            zombie2G.add(zombie2);         
    
        }
    
        //if(zombie1G.isTouching(bullet)){
        //    zombie1G.destroyEach();
        //}
    
        path1.velocityY = +4;
        path2.velocityY = +4;
    
        fence1R.velocityY = +4;
        fence2R.velocityY = +4;
        fence3R.velocityY = +4;
        fence4R.velocityY = +4;
        fence5R.velocityY = +4;
        fence6R.velocityY = +4;
        fence7R.velocityY = +4;
        fence8R.velocityY = +4;
        fence9R.velocityY = +4;
        fence10R.velocityY = +4;
    
        fence1L.velocityY = +4;
        fence2L.velocityY = +4;
        fence3L.velocityY = +4;
        fence4L.velocityY = +4;
        fence5L.velocityY = +4;
        fence6L.velocityY = +4;
        fence7L.velocityY = +4;
        fence8L.velocityY = +4;
        fence9L.velocityY = +4;
        fence10L.velocityY = +4;
    
        if(path1.y > 400){
            path1.y = 0;
        }
        if(path2.y > 400){
            path2.y = 0;
        }
    
        if(fence3R.y > 400){
            fence3R.y = -2;
        }
        if(fence4R.y > 400){
            fence4R.y = -2;
        }
        if(fence5R.y > 400){
            fence5R.y = -2;
        }
        if(fence6R.y > 400){
            fence6R.y = -2;
        }
        if(fence7R.y > 400){
            fence7R.y = -2;
        }
        if(fence8R.y > 400){
            fence8R.y = -2;
        }
        if(fence9R.y > 400){
            fence9R.y = -2;
        }
        if(fence10R.y > 400){
            fence10R.y = -2;
        }
    
        if(fence3L.y > 400){
            fence3L.y = -2;
        }
        if(fence4L.y > 400){
            fence4L.y = -2;
        }
        if(fence5L.y > 400){
            fence5L.y = -2;
        }
        if(fence6L.y > 400){
            fence6L.y = -2;
        }
        if(fence7L.y > 400){
            fence7L.y = -2;
        }
        if(fence8L.y > 400){
            fence8L.y = -2;
        }
        if(fence9L.y > 400){
            fence9L.y = -2;
        }
        if(fence10L.y > 400){
            fence10L.y = -2;
        }

        if(keyDown("w")){
            greg.y = greg.y-4;
        }
        if(keyDown("a")){
            greg.x = greg.x-4;
        }
        if(keyDown("s")){
            greg.y = greg.y+4;
        }
        if(keyDown("d")){
            greg.x = greg.x+4;
        }
    
        greg.collide(grassR) || greg.collide(grassL);

        if(greg.isTouching(zombie1G || zombie2G)){
            zombie1.visible = false;
            gameState = END;
        }
    
    }
  drawSprites();
    
}