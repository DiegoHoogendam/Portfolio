
let player;
let projectile;
let projectiles = [];
let enemy;
let enemies = [];
let amount = 1;
let score = 0;
let interval = 5000;
let level = 1;
let maxSpeed = 2;
let teller = 0;
let passes = 0;
let lives = 5;
let gameOver = false;
let restart = false;
let play = false;
let menuActive = true;


function reload(){
  preload()
  setup()
  draw()
  gameOver = false;
  passes = 0;
  score = 0;
  amount = 1;
  lives = 5;
  button.remove();
  restart = true;
}

function menu(){

  //console.log("menu");
   
    background(245, 245, 220);
    fill(0);
    textSize(60);
    text('WarPlane', windowWidth / 7, windowHeight / 2);
    
    push()
    textSize(20);
    text('Gemaakt door Diego', windowWidth / 7, windowHeight / 1.5);
    text('Bewegen: A & D', windowWidth / 7, windowHeight / 1.5 + 40);
    text('Schieten: SPATIE', windowWidth / 7, windowHeight / 1.5 + 60);
    pop()
    
    if(menuActive === true){
    playButton = createButton('Play');
    
    playButton.position(windowWidth / 7, windowHeight / 2 + 30);
    playButton.size(100,50);
    playButton.mousePressed(speel);
    
    menuActive = false;
    }

    
}

function speel(){
  console.log("play");
  play = true;
  playButton.remove();
}

function preload(){
   fighter = loadImage("images/helldiver.png",console.log("loaded"));
   bomber = loadImage("images/bomber.png");
}
function setup() {

    createCanvas(windowWidth, windowHeight);
  player = new Player(windowWidth/2, windowHeight - windowHeight/6);

    spawnEnemy();
    console.log(enemies);

}

function wait(time){
  start = millis()
  do
  {
    current = millis();
  }
  while(current < start + time)
}

function draw() {

  if(!restart && play === false){
    menu();
    
    
  }
else {

  background(245, 245, 220);
  player.display();
  player.update();
  
  for(var n = 0; n < enemies.length; n++){
    enemies[n].display();
    enemies[n].update();
  }
  
  
//projectiles gelijk aan enemy
  for (let i = projectiles.length - 1; i >= 0; i--) {
    projectiles[i].display();
    projectiles[i].update();
    
    for (let q = 0; q < enemies.length; q++){
    
    if (projectiles[i].x > enemies[q].x-enemies[q].width/4.5 && projectiles[i].x <
    enemies[q].x + enemies[q].width &&
    
    projectiles[i].y > enemies[q].y && projectiles[i].y <
    enemies[q].y + enemies[q].height - 50)
    {
      
    console.log("hit");
    
    score = score + 1;
    
    projectiles[i].delete();
    
    enemies[q].geraakt();
    
           }
    }
      
  
    
  }
  //tekst ui
  push();
  fill(0);
  textSize(30);
   text('Level ' + amount, 40, 60);
   text('Score ' + score, 40, 90);
   text('Lives ' + lives, windowWidth - 130, 60);
  // button.position(40, 130);
  pop();

  //gameOver
  if(passes >= 5){
    
    if (!gameOver) {
      dead();

      enemies.length = 0;
      projectiles.length = 0
      
    }
    background(245, 245, 220);
    push();
    fill(0);
    textSize(60);
    text('Game Over', windowWidth / 7, windowHeight / 2);
    textSize(30);
    text('Level ' + amount, windowWidth/7, windowHeight / 2 + 30);
    text('Score ' + score, windowWidth/7, windowHeight / 2 + 60);
    pop();

  }
    
}
}

 

function spawnEnemy() {
  
  if(gameOver === false){
  //spawn nieuwe enemies
  for (var b = 0; b < amount; b++) {
  enemies.push(new Enemy(random(windowWidth/4,windowWidth - windowWidth / 4), random(-50, -300)));
  }
  
  teller = teller + 1;
  if (teller == 3){
    amount = amount + 1;
    teller = 0;
  }
  interval = interval - 100;
  
  //second group if statement
  }
 }
     
  setInterval(spawnEnemy, interval);
     
      
      
 


function keyPressed() {
 if(key === 'a'|| key === 'A') {
  player.move(-5);
 }
 if(key === 'd' || key === 'D') {
  player.move(5);
 }
 if(key === ' ') {
  console.log("Shoot");
  player.shoot();
 }
 var clickDetected = false; // Flag to keep track of mouse click detection


}

function dead() {
      button = createButton('Restart');
      button.position(windowWidth / 7, windowHeight / 2 + 90);
      button.size(100,50);
      button.mousePressed(reload);

      gameOver = true;
}

function keyReleased() {
  if (key === 'a' || key === 'A' || key === 'd' || key === 'D') {
    player.stop();
  }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
    this.direction = 0;
  }

  display() {
    
    
    push();
    noStroke();
    //fill("transparent");
    //rect(this.x, this.y, this.width, this.height);
    
    fighter.resize(100, 100);

    image(fighter, this.x - this.width/2, this.y - this.height/2);
    
    pop();
    
  }

  update() {
    this.x += this.direction * this.speed;
    this.x = constrain(this.x, 0, width - this.width); // Houd de speler binnen het scherm
  }

  stop() {
    this.direction = 0;
  }

  move(mvmtDir) {
    this.direction = mvmtDir;
  }

  shoot() {
    let projectile = new Projectile(this.x + this.width/2, this.y);
    projectiles.push(projectile);
  }
}

class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 20;
    this.speed = 5;
    this.alive = true;
  }

  display() {
    if(this.alive === true){
    fill("black");
    rect(this.x, this.y, this.width, this.height);
    }
    
  }

  update() {
    if (this.alive === true){
    this.y -= this.speed;
    }
    else{
      // return this.y + this.height < 0;
      this.x = this.x + windowWidth * 2;
    }
    
    
  }

  isOffscreen() {
    return this.y + this.height < 0;
  }
  
  
  
  delete(){
    this.alive = false;
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.speed = 3;
    this.direction = random(-1,1);
    this.alive = true;
  }
  display() {
   
    if(this.alive === true){
      
      
      
    push();
    //fill("red");
    //rect(this.x-this.width/4.5, this.y, this.width, this.height);
    
    bomber.resize(150, 150);
   (180);

    image(bomber, this.x - this.width/2, this.y - this.height/2);
    
    pop();
    }
    
  }
  update() {
    
   this.x += this.direction * this.speed;
   this.y += 1 * this.speed;
    
    if(this.y > windowHeight + 50 && this.x < windowWidth && this.x > 0 && this.alive === true){
      
      this.alive = false;
      passes = passes + 1;
      lives = lives - 1;
      
      console.log("pass" + passes);
    }
    
    }
  geraakt() {
    this.alive = false;
    this.x = windowWidth * 5;
  }
    
  }
