var hero, hero_img, hero_fell_img;
var b1,b2,b3,b4,b5,b6, b1_img,b2_img,b3_img,b4_img,b5_img,b6_img;
var m1,m2,m3,m4,m1_img,m2_img,m3_img,m4_img;
var coin, coin_img;


var PLAY = 1;
var END = 0;
var gameState = PLAY;

var gameOver, gameOver_img;
var right, right_img;

var score;
var dieSound, jumpSound;


function preload(){

    hero_img = loadAnimation("robot_1.png","robot_2.png");
    hero_fell_img = loadImage("robot_3.png");
    b1_img = loadImage("background1.png");
    b2_img = loadImage("background2.png");
    b3_img = loadImage("background3.png");
    b4_img = loadImage("background4.png");
    b5_img = loadImage("background5.png");
    b6_img = loadImage("background6.png");
    coin_img = loadAnimation("bronze_1.png","bronze_2.png","bronze_3.png","bronze_4.png","bronze_5.png","bronze_6.png");
    m1_img = loadImage("monster_1.png");
    m2_img = loadImage("monster_2.png");
    m3_img = loadImage("monster_3.png");
    m4_img = loadImage("monster_4.png");
    gameOver_img = loadImage("gameOver.png");
    right_img = loadImage("right.png");
    dieSound = loadSound("die.mp3");
    jumpSound = loadSound("jump.mp3");  
    cash_img = loadImage("cash.png");

}

function setup() {
  createCanvas(600,400);

 
}

function draw() {
  background(180);
    
 
}