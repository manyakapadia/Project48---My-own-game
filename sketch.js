var level1bg, level2bg, level3bg, homescreen, homescreenImg;
var books, booksImg, cup, cupImg, mirror, mirrorImg, hammock, hammockImg, hammock2, hammock2Img, books2, bird, birdImg, chest, chestImg;
var cabinet, cabinetImg, chest2, chest2Img, cauldron, cauldronImg, goblet, gobletImg, vases, vasesImg, clock, clockImg, clock2, clock2Img, locket, locketImg;
var teapot, teapotImg, bird3, goblet2, goblet3, trumpet, trumpetImg, hammock3, vases2, chest3, goblet4, books4, clock3, vases3, cauldron2, necklace, necklaceImg;
var mirror2, lantern, lanternImg, trumpet2, books5, teapot3, teapot4, bird3, bird2, chest4, potion, potionImg, potion2, cup2, book6, diadem, diademImg;
var books6, books6Img ,chair, chairImg, table, tableImg,books7, cup3, teapot5, chair2, coatRack, cupboard, cupboardImg, cupboard2, cupboard2Img, chair3;
var table3, coatRack, coatRackImg, coatRack2, lantern2, lantern2, bird4, table5, table6, chair4, chair5, chair6, chair7, chair8, table8, table9, paper, paperImg;
var paper2, cauldron3, pot, potImg, cup4, books9, teapot6, goblet5, paper3, paper3Img, paper4, lantern3, books10, mirror3, books11, chest6, goblet2, goblet2Img;
var chest7, vases5, books11, mirror4, vase6, paper5, goblet7, goblet7Img, ring, ringImg;
var snake, snakeImg, diary, diaryImg, horcruxesImg, textImg, harryRonHermioneImg, voldemortImg;
var goblet7Found, ringFound, gameState, scene1objects, diaryFound, snakeFound, bgMusic, lives;

function preload(){
  homescreenImg = loadImage("images/homeScreen4.jpg");
  level3bg = loadImage("images/roomOfRequirements.jpg");
  level1bg = loadImage("images/Ministry of magic.jpg");
  level2bg = loadImage("images/forest.jpg");
  booksImg = loadImage("images/books.png");
  books3Img = loadImage("images/books3.png");
  cupImg = loadImage("images/cup.png");
  mirrorImg = loadImage("images/mirror.png");
  hammockImg = loadImage("images/hammock3.png");
  hammock2Img = loadImage("images/hammock3.png");
  birdImg = loadImage("images/bird.png");
  chestImg = loadImage("images/chest.png");
  cabinetImg = loadImage("images/cabinet.png");
  chest2Img = loadImage("images/chest2.png");
  cauldronImg = loadImage("images/cauldron.png");
  gobletImg = loadImage("images/goblet.png");
  vasesImg = loadImage("images/vases.png");
  clockImg = loadImage("images/clock.png");
  clock2Img = loadImage("images/clock2.png");
  teapotImg = loadImage("images/teapot.png");
  trumpetImg = loadImage("images/trumpet.png");
  lanternImg = loadImage("images/lantern.png");
  potionImg = loadImage("images/potion.png");
  diademImg = loadImage("images/diadem.png");
  necklaceImg = loadImage("images/necklace.png");
  locketImg = loadImage("images/locket.png");
  books6Img = loadImage("images/books6.jpg");
  chairImg = loadImage("images/chair.png");
  tableImg = loadImage("images/table.png");
  cupboardImg = loadImage("images/cupboard.png");
  cupboard2Img = loadImage("images/cupboard2.png");
  coatRackImg = loadImage("images/coatRack.png");
  paperImg = loadImage("images/paper.png");
  potImg = loadImage("images/pot.png");
  paper3Img = loadImage("images/paper2.png");
  goblet2Img = loadImage("images/goblet2.png");
  goblet7Img = loadImage("images/cup2.png");
  ringImg = loadImage("images/ring.png");
  diaryImg = loadImage("images/diary2.png");
  basketImg = loadImage("images/basket.png");
  snakeImg = loadImage("images/snake4.png");
  horcruxesImg = loadImage("images/horcruxes.jpg");
  textImg = loadImage("images/text3.png");
  harryRonHermioneImg = loadImage("images/harryRonHermione.jpg");
  voldemortImg = loadImage("images/voldemort.jfif");
  bgMusic = loadSound("sounds/bgMusic.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  goblet7Found = false;
  ringFound = false;
  diaryFound = false;
  snakeFound = false;
  diademFound = false;
  locketFound = false;
  gameState = "start";
  playButton = createButton("Start");
  scene1objects = new Group();
  scene2objects = new Group();
  scene3objects = new Group();
  bgMusic.setVolume(0.2);
  bgMusic.play();
  lives = 3;

  
}

function draw() {
  
  //scene1(); 
  //scene2();
  //scene3();
  
  if(gameState === "start"){
    homeScreen();
  }
  if(gameState === "level1"){
    playButton.hide();
    scene1();
  } 
  if(gameState == "level2"){
    scene2();
  }
  if(gameState == "level3"){
    scene3();
  }
  if(gameState == "EndScreen"){
    EndScreen();
  }

  if(gameState == "lost"){
    lostScreen();
  }

  text("Lives:" + lives, 900, 50);
  if(lives == 0){
    gameState = "lost";
  }
  drawSprites();
}



function homeScreen(){
 
  background(homescreenImg);
  fill("white");
  textAlign(CENTER);
  textSize(30)
  text("Welcome to The Horcrux Hunt. \n This is a Harry Potter game\n in which you will have to find certain objects \nin order to defeat Voldemort. \n There are 3 scenes in total and \n each scene has two such objects.\n Find those objects in order to win.", windowWidth/2, 250 )
  scale(1.3);
  image(textImg, 300,50, 400, 100);
  
  playButton.position(windowWidth / 2 - 100, windowHeight / 2 + 200);
  playButton.class("customButton");

  playButton.mousePressed(() => {
    gameState = "level1";
    
  })
  
  
 
}

function scene3(){
  //I am unable to switch from one scene to another
  background(level3bg)
  scene2objects.removeSprites();
  books = createSprite(250, 400, 30,30);
  books.addImage("books", booksImg);
  books.scale = 0.6;
  scene3objects.add(books);

  // books2 = createSprite(750, 700, 30,30);
  // books2.addImage("books", booksImg);
  // books2.scale = 0.6;

  // cup = createSprite(1270, 420, 30,30);
  // cup.addImage("cup", cupImg);
  // cup.scale = 0.1;

  // mirror = createSprite(1200, 500, 30,30);
  // mirror.addImage("mirror", mirrorImg);
  // mirror.scale = 1.2;

  // hammock = createSprite(350, 250, 70,30);
  // hammock.addImage("hammock", hammockImg);
  // hammock.scale = 0.5;

  hammock2 = createSprite(200, 180, 70,30);
  hammock2.addImage("hammock", hammock2Img);
  hammock2.scale = 0.5;
 scene3objects.add(hammock2)

  hammock3 = createSprite(970, 180, 70,30);
  hammock3.addImage("hammock", hammockImg);
  hammock3.scale = 0.5;
  scene3objects.add(hammock3);

  // bird = createSprite(720, 700, 70,30);
  // bird.addImage("bird", birdImg);
  // bird.scale = 0.2;
  
  // chest = createSprite(200, 550, 70,30);
  // chest.addImage("chest", chestImg);
  // chest.scale = 0.4;

  // chest2 = createSprite(700, 450, 70,30);
  // chest2.addImage("chest", chest2Img);
  // chest2.scale = 0.4;

  // books3 = createSprite(100, 600, 30,30);
  // books3.addImage("books", books3Img);
  // books3.scale = 0.6;
  
  cabinet = createSprite(1100, 350, 70,30);
  cabinet.addImage("cabinet", cabinetImg);
  cabinet.scale = 0.6;
  scene3objects.add(cabinet);


  // cauldron = createSprite(650, 750, 70,30);
  // cauldron.addImage("cauldron", cauldronImg);
  // cauldron.scale = 0.8;

  // goblet = createSprite(200, 600, 70,30);
  // goblet.addImage("goblet", gobletImg);
  // goblet.scale = 0.8;

  // vases = createSprite(1300, 600, 70,30);
  // vases.addImage("vases", vasesImg);
  // vases.scale = 0.8;

  // clock = createSprite(1400, 500, 70,30);
  // clock.addImage("clock", clockImg);
  // clock.scale = 0.5;

  // clock2 = createSprite(800, 450, 70,30);
  // clock2.addImage("clock2", clock2Img);
  // clock2.scale = 0.5;

  // teapot = createSprite(1750, 650, 70,30);
  // teapot.addImage("teapot", teapotImg);
  // teapot.scale = 0.2;

  // bird3 = createSprite(750, 800, 70,30);
  // bird3.addImage("teapot", teapotImg);
  // bird3.scale = 0.2;

  // goblet2 = createSprite(250, 600, 70,30);
  // goblet2.addImage("goblet2", gobletImg);
  // goblet2.scale = 0.8;

  // goblet3 = createSprite(850, 750, 70,30);
  // goblet3.addImage("goblet3", gobletImg);
  // goblet3.scale = 0.8;

  // trumpet = createSprite(1600, 650, 70,30);
  // trumpet.addImage("trumpet", trumpetImg);
  // trumpet.scale = 0.4;

  // vases3 = createSprite(1600, 700, 70,30);
  // vases3.addImage("vases3", vasesImg);
  // vases3.scale = 0.8;

  // chest3 = createSprite(550, 750, 70,30);
  // chest3.addImage("chest", chest2Img);
  // chest3.scale = 0.4;

  // goblet4 = createSprite(750, 500, 70,30);
  // goblet4.addImage("goblet4", gobletImg);
  // goblet4.scale = 0.8;

  // books3 = createSprite(550, 500, 30,30);
  // books3.addImage("books3", booksImg);
  // books3.scale = 0.6;

  // clock3 = createSprite(300, 600, 70,30);
  // clock3.addImage("clock3", clockImg);
  // clock3.scale = 0.5;

  // vases2 = createSprite(400, 500, 70,30);
  // vases2.addImage("vases4", vasesImg);
  // vases2.scale = 0.8;

  chest3 = createSprite(600, 500, 70,30);
  chest3.addImage("chest", chest2Img);
  chest3.scale = 0.4;
  scene3objects.add(chest3);

  // cauldron2 = createSprite(1500, 600, 70,30);
  // cauldron2.addImage("cauldron2", cauldronImg);
  // cauldron2.scale = 0.8;

  // mirror2 = createSprite(500, 750, 30,30);
  // mirror2.addImage("mirror2", mirrorImg);
  // mirror2.scale = 1.2;

  // lantern = createSprite(550, 550, 30,30);
  // lantern.addImage("lantern", lanternImg);
  // lantern.scale = 0.3;

  // trumpet2 = createSprite(600, 650, 70,30);
  // trumpet2.addImage("trumpet2", trumpetImg);
  // trumpet2.scale = 0.4;

  // books5 = createSprite(450, 600, 70,30);
  // books5.addImage("books5", books3Img);
  // books5.scale = 0.6;

  // teapot3 = createSprite(400, 650, 70,30);
  // teapot3.addImage("teapot", teapotImg);
  // teapot3.scale = 0.2;

  // teapot4 = createSprite(650, 500, 70,30);
  // teapot4.addImage("teapot", teapotImg);
  // teapot4.scale = 0.2;

  // bird3 = createSprite(700, 550, 70,30);
  // bird3.addImage("bird", birdImg);
  // bird3.scale = 0.2;

  // bird2 = createSprite(850, 280, 70,30);
  // bird2.addImage("bird", birdImg);
  // bird2.scale = 0.2;

  // potion = createSprite(1500, 650, 70,30);
  // potion.addImage("potion", potionImg);
  // potion.scale = 0.4;

  // potion2 = createSprite(1400, 550, 70,30);
  // potion2.addImage("potion2", potionImg);
  // potion2.scale = 0.4;

  // cup2 = createSprite(1450, 650, 70,30);
  // cup2.addImage("cup2", cupImg);
  // cup2.scale = 0.1;

  // necklace = createSprite(1650, 650, 70,30);
  // necklace.addImage("necklace", necklaceImg);
  // necklace.scale = 0.1;
  
  locket = createSprite(1150, 400, 70,30);
  locket.addImage("locket", locketImg);
  locket.scale = 0.3;
  scene3objects.add(locket)

  diadem = createSprite(600,500, 70,30);
  diadem.addImage("diadem", diademImg);
  diadem.scale = 0.2;
  scene3objects.add(diadem);

  fill("white");
  textSize(20);
  text("Find :", 100, 450, 150, 150);

  image(locketImg, 150, 500, 50, 82);
  image(diademImg, 100, 500, 50, 86);
  
  if(mousePressedOver(locket)){
    locketFound = true;
    locket.visible = false;
  }
  

  if(mousePressedOver(diadem)){
    diademFound = true;
    diadem.visible = false;
    
  }

//   if(mousePressedOver(books) && lives > 0 ){
//     lives = lives - 1;
// }

  if((locketFound == true && diademFound == false)||(diademFound == true && locketFound == false) ){
    // fill("black");
    // rect(50,50, 500,50);
    fill("white");
    textSize(20);
    text("Congratulations! You have successfully found and destroyed one object!Now, find the other one ", 50,50);
  }

  else if(locketFound == true && diademFound == true){
    fill("white");
    textSize(30);
  
   
    text("Congratulations! We are moving to the next scene. Find the other objects now.", 150,150);
    gameState = "EndScreen";
  }
}

function scene1(){
  background(level1bg);
  
  // paper = createSprite(1350, 450, 70,30);
  // paper.addImage("paper", paperImg);
  // paper.scale = 0.7;

  // scene1objects.add(paper);

  // cupboard = createSprite(450, 300, 70,30);
  // cupboard.addImage("cupboard", cupboardImg);
  // cupboard.scale = 0.9;

  // scene1objects.add(cupboard);

  // cupboard2 = createSprite(1750, 500, 70,30);
  // cupboard2.addImage("cupboard", cupboard2Img);
  // cupboard2.scale = 0.9;

  // scene1objects.add(cupboard2);

  // books6 = createSprite(1200, 350, 70,30);
  // books6.addImage("books6", books6Img);
  // books6.scale = 0.08;

  // scene1objects.add(books6);

  // chair = createSprite(800, 350, 70,30);
  // chair.addImage("chair", chairImg);
  // chair.scale = 0.4;

  // scene1objects.add(chair);

  // chair3 = createSprite(500, 450, 70,30);
  // chair3.addImage("chair", chairImg);
  // chair3.scale = 0.4;

  // scene1objects.add(chair3);

  // paper2 = createSprite(1350, 500, 70,30);
  // paper2.addImage("paper2", paperImg);
  // paper2.scale = 0.7;

  // scene1objects.add(paper2);

  // chair2 = createSprite(250, 600, 70,30);
  // chair2.addImage("chair2", chairImg);
  // chair2.scale = 0.4;

  // scene1objects.add(chair2);
  
  // table = createSprite(800, 400, 70,30);
  // table.addImage("table", tableImg);
  // table.scale = 0.7;

  // scene1objects.add(table);

  // table3 = createSprite(500, 500, 70,30);
  // table3.addImage("table", tableImg);
  // table3.scale = 0.7;

  // scene1objects.add(table3);

  // books7 = createSprite(700, 300, 70,30);
  // books7.addImage("books7", booksImg);
  // books7.scale = 0.4;

  // scene1objects.add(books7);

  // cup3 = createSprite(800, 330, 70,30);
  // cup3.addImage("cup3", cupImg);
  // cup3.scale = 0.1;

  // scene1objects.add(cup3);

  // teapot4 = createSprite(850, 300, 70,30);
  // teapot4.addImage("teapot4", teapotImg);
  // teapot4.scale = 0.2;

  // scene1objects.add(teapot4);

  // table4 = createSprite(250, 650, 70,30);
  // table4.addImage("table4", tableImg);
  // table4.scale = 0.7;

  // scene1objects.add(table4);

  // coatRack = createSprite(1550, 300, 70,30);
  // coatRack.addImage("coatRack", coatRackImg);
  // coatRack.scale = 0.7;

  // scene1objects.add(coatRack);

  // lantern2 = createSprite(1050, 350, 70,30);
  // lantern2.addImage("lantern2", cauldronImg);
  // lantern2.scale = 0.7;

  // scene1objects.add(lantern2);

  // lantern2 = createSprite(1250, 700, 70,30);
  // lantern2.addImage("lantern2", lanternImg);
  // lantern2.scale = 0.3;

  // scene1objects.add(lantern2);

  // bird4 = createSprite(1050, 350, 70,30);
  // bird4.addImage("bird4", birdImg);
  // bird4.scale = 0.2;

  // scene1objects.add(bird4);

  chair5 = createSprite(600, 450, 70,30);
  chair5.addImage("chair5", chairImg);
  chair5.scale = 0.4;

  scene1objects.add(chair5);

  table5 = createSprite(600,500,70,30);
  table5.addImage("table5", tableImg);
  table5.scale = 0.7;

  scene1objects.add(table5);

  chair6 = createSprite(700, 200, 70,30);
  chair6.addImage("chair6", chairImg);
  chair6.scale = 0.4;

  scene1objects.add(chair6);

  table6 = createSprite(700, 250, 70,30);
  table6.addImage("table6", tableImg);
  table6.scale = 0.7;

  scene1objects.add(table6);

  chair4 = createSprite(250, 250, 70,30);
  chair4.addImage("chair4", chairImg);
  chair4.scale = 0.4;

  scene1objects.add(chair4);

  table7 = createSprite(250, 280, 70,30);
  table7.addImage("table7", tableImg);
  table7.scale = 0.7;

   scene1objects.add(table7);

  // cauldron3 = createSprite(1450, 450, 70,30);
  // cauldron3.addImage("cauldron3", cauldronImg);
  // cauldron3.scale = 0.7;

  // scene1objects.add(cauldron3);

  // books8 = createSprite(200, 550, 70,30);
  // books8.addImage("books7", books3Img);
  // books8.scale = 0.4;

  // scene1objects.add(books8);

  // pot = createSprite(150, 680, 70,30);
  // pot.addImage("pot", potImg);
  // pot.scale = 0.4;

  // scene1objects.add(pot);

  // cup = createSprite(350, 720, 70,30);
  // cup.addImage("cup", cupImg);
  // cup.scale = 0.1;

  // scene1objects.add(cup);

  // books9 = createSprite(300, 700, 70,30);
  // books9.addImage("books9", booksImg);
  // books9.scale = 0.4;

  // scene1objects.add(books9);
  
  // teapot6 = createSprite(350, 550, 70,30);
  // teapot6.addImage("teapot6", teapotImg);
  // teapot6.scale = 0.2;

  // scene1objects.add(teapot6);

  // goblet6 = createSprite(600, 650, 70,30);
  // goblet6.addImage("goblet6", gobletImg);
  // goblet6.scale = 0.7;

  // scene1objects.add(goblet6);

  // paper3 = createSprite(700, 650, 70,30);
  // paper3.addImage("paper3", paper3Img);
  // paper3.scale = 0.3;

  // scene1objects.add(paper3);

  // paper4 = createSprite(500, 400, 70,30);
  // paper4.addImage("paper4", paper3Img);
  // paper4.scale = 0.3;

  // scene1objects.add(paper4);


  // books10 = createSprite(500, 500, 70,30);
  // books10.addImage("books10", books3Img);
  // books10.scale = 0.4;

  // scene1objects.add(books10);

  // mirror3 = createSprite(700, 480, 70,30);
  // mirror3.addImage("mirror3", mirrorImg);
  // mirror3.scale = 0.7;

  // scene1objects.add(mirror3);

  // books11 = createSprite(1600, 650, 70,30);
  // books11.addImage("books11", chest2Img);
  // books11.scale = 0.4;

  // scene1objects.add(books11);

  // goblet2 = createSprite(1250, 400, 70,30);
  // goblet2.addImage("goblet2", goblet2Img);
  // goblet2.scale = 0.2;

  // scene1objects.add(goblet2);

  // chest7 = createSprite(1150, 450, 70,30);
  // chest7.addImage("chest7", chest2Img);
  // chest7.scale = 0.4;

  // scene1objects.add(chest7);

  vases5 = createSprite(1150, 250, 70,30);
  vases5.addImage("vases5", vasesImg);
  vases5.scale = 0.9;

  scene1objects.add(vases5);

  // books11 = createSprite(1300, 550, 70,30);
  // books11.addImage("books11", booksImg);
  // books11.scale = 0.4;

  // scene1objects.add(books11);

  // mirror4 = createSprite(1200, 650, 70,30);
  // mirror4.addImage("mirror4", mirrorImg);
  // mirror4.scale = 0.9;

  // scene1objects.add(mirror4);

  vase4 = createSprite(width/2 - 300, height - 200, 70,30);
  vase4.addImage("vase4", potImg);
  vase4.scale = 0.4;

   scene1objects.add(vase4);

  // paper4 = createSprite(1400, 650, 70,30);
  // paper4.addImage("paper4", paper3Img);
  // paper4.scale = 0.3;

  // scene1objects.add(paper4);

  goblet7 = createSprite(width/2 + 550, height - 270, 70,30);
  goblet7.addImage("goblet7", goblet7Img);
  goblet7.scale = 0.3;

  scene1objects.add(goblet7);
  
  ring = createSprite(width/2 - 290, height - 220, 70,30);
  ring.addImage("ring", ringImg);
  ring.scale = 0.1;

  scene1objects.add(ring);

  lantern3 = createSprite(380, 400, 70,30);
  lantern3.addImage("lantern3", lanternImg);
  lantern3.scale = 0.3;

  scene1objects.add(lantern3);


  fill("white");
  textSize(30)
  text("Find:", 1800, 750);

  fill("white");
  text("Find :", 1050, 450, 150, 150);

  image(goblet7Img, 1050, 500, 50, 82);
  image(ringImg, 1100, 500, 50, 86);
  
  if(mousePressedOver(goblet7)){
    goblet7Found = true;
    goblet7.visible = false;
  }
  

  if(mousePressedOver(ring)){
    ringFound = true;
    ring.visible = false;
    
  }

 

  if(mousePressedOver(lantern3) && lives > 0 ){
     lives = lives - 1;
}

  if((goblet7Found == true && ringFound == false)||(ringFound == true && goblet7Found == false) ){
    // fill("black");
    // rect(50,50, 500,50);
    fill("white");
    textSize(20);
    text("Congratulations! You have successfully found and destroyed one object!Now, find the other one ", 50,50);
  }

  else if(goblet7Found == true && ringFound == true){
    fill("white");
    textSize(30);
    text("Congratulations! We are moving to the next scene. Find the other objects now.", 150,150);
    gameState = "level2";
  }
  // console.log(goblet7Found);
  // console.log(ringFound);
}
  function scene2(){
    
    scene1objects.removeSprites();
    background(level2bg);
    
    snake = createSprite(100, 400, 70,30);
    snake.addImage("snake", snakeImg);
    snake.scale = 0.2;
    scene2objects.add(snake);

    diary = createSprite(130, 500, 70,30);
    diary.addImage("diary", diaryImg);
    diary.scale = 0.4;
    scene2objects.add(diary);

    fill("white");
    textSize(20);
    text("Find :", 1050, 450, 200, 200);
    
    image(snakeImg, 950, 450, 120, 122);
    image(diaryImg, 1100, 450, 150, 156);
   
  if(mousePressedOver(diary)){
    diaryFound = true;
    diary.visible = false;
  }
  

  if(mousePressedOver(snake)){
    snakeFound = true;
    snake.visible = false;
    
  }
  if(mousePressedOver(lantern3) && lives > 0 ){
    lives = lives - 1;
}
  if((diaryFound == true && snakeFound == false)||(snakeFound == true && diaryFound == false) ){
    // fill("black");
    // rect(50,50, 500,50);
    fill("white");
    textSize(20);
    text("Congratulations! You have successfully found and destroyed one object!Now, find the other one ", 50,50);
  }

  else if(diaryFound == true && snakeFound == true){
    fill("white");
    textSize(30);
    
   
    text("Congratulations! We are moving to the next scene. Find the other objects now.", 150,150);
    gameState = "level3";
  }
  
}

function EndScreen(){
  scene3objects.removeSprites();
  background(homescreenImg);
  fill("white");
  textAlign(CENTER);
  textSize(30)
  text("Congratulations! \n You have successfully defeated Voldemort! \n Reload the page to play again ", windowWidth/2, 250 )
  scale(1.3);
  image(textImg, 300,50, 400, 100);
  
  // playButton.position(windowWidth / 2 - 100, windowHeight / 2 + 200);
  // playButton.class("customButton");

  // playButton.mousePressed(() => {
  //   gameState = "homeScreen";
    
  // })
}

// function mousePressed(){
//   console.log("mousePressed");
//   // if(mousePressedOver(ring) == false && mousePressedOver(goblet7)== false ){
//   //   if(lives > 0 ){
//   //     lives = lives - 1;
//   //   } else{

//   //   }
//   // }
// }

function lostScreen(){
  scene3objects.removeSprites();
  scene1objects.removeSprites();
  scene2objects.removeSprites();
  background(homescreenImg);
  fill("white");
  textAlign(CENTER);
  textSize(30)
  text("Oops! You lost! Reload the page and try again.", windowWidth/2, 250 )
  scale(1.3);
  image(textImg, 300,50, 400, 100);
}