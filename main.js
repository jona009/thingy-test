const canvas = document.getElementById('gameBackground');
const thing = canvas.getContext('2d');

let y = 60;
let x = 60;

let y2 = 540;
let x2 = 740;


let MoveUp = false;
let MoveDown = false;
let MoveLeft = false;
let MoveRight = false;

let MovementSpeed = 1.5;

let MovementSpeed2 = 1.5;


let MoveUp2 = false;
let MoveDown2 = false;
let MoveLeft2 = false;
let MoveRight2 = false;

let CharacterOrientation = 1;

let CharacterOrientation2 = 1;

let ShootInDirection = false;

let ShootInDirection2 = false;

let OneHit = 0;

let OneHit2 = 0;

let Character1HP = 20;

let Character2HP = 20;

let StartScreenTime = 0;

let StopAnimation = 0;

let UltimateAbility1 = false;

let UltimateAbility2 = false;

let UltimateTime = 0;

let UltimateTime2 = 0;

let UltimateDisable = 0; 

let UltimateDisable2 = 0; 

let StartUltimateTime = 0;

let StartUltimateTime2 = 0;

let CoolDown = 0;

let CoolDown2 = 0;

let CoolDownP2 = 0;

let CoolDown2P2 = 0;

let PlayMusic = 0;

let EasterEggFound = 0;

let EasterEggFound2 = 0;

let PlaceBlock = false;

let KeepBlock = 0;




const BeforeSuspence = new Audio('Orchestra Heartbeat.mp3');
const AfterSuspence = new Audio('For the Kingdom.mp3');



function GameFunctions(){
  requestAnimationFrame(GameFunctions);
  Background();
  River();
  CharacterMovement();
  MakeCharacter();
  CharacterMovement2();
  MakeCharacter2();
  ScreenBorder();
  ProjectileDirection();
  Damage();
  DisplayHP();
  Win();
  StartingScreen();
  Ultimate();
  Music();
  EasterEgg();
  BlockPlaced();
}



function BlockPlaced() {
  if (PlaceBlock == true) {
    KeepBlock++;
  } 
  if(KeepBlock >= 10){
    var Bx = x + 20;
    var By = y + 20;
    thing.fillStyle = 'dimgrey';
    thing.fillRect(Bx, By, 40, 40);

}
}

document.body.addEventListener('keyup', NoPlace);
document.body.addEventListener('keydown', Place);


function Place(event){
  if(event.keyCode == 16){
    PlaceBlock = true;
  }
}



function NoPlace(event) {
  if (event.keyCode == 16) {
    PlaceBlock = false;
  }
}


 function EasterEgg(){
   if(x >= 420 && x <= 460 && y >= 380 && y <= 420 ){
     EasterEggFound++;
   }
     
    if(EasterEggFound >= 1){
     thing.fillStyle= 'blue';
     thing.font = ' 10px arial';
     thing.fillText('[COMPOSER] Griphyn', x,y-30)
    }
    if (x2 >= 420 && x2 <= 460 && y2 >= 380 && y2 <= 420) {
      EasterEggFound2++;
    }
    
    if (EasterEggFound2 >= 1) {
      thing.fillStyle = 'blue';
      thing.font = ' 10px arial';
      thing.fillText('[COMPOSER] Griphyn', x2, y2 - 30)
    }
    }
   
 
function River(){
  thing.fillStyle = 'blue';
  thing.fillRect(360, 0 ,80,100);
  thing.fillRect(380,100,80,100);
  thing.fillRect(400, 200,80,60);
  thing.fillRect(390, 260, 80, 80);
  thing.fillRect(400, 340, 80, 100);
  thing.fillRect(380, 440, 80, 80);
  thing.fillRect(360, 520, 80, 80);
  thing.fillStyle= 'brown';
  thing.fillRect(380, 290, 80,40)
  thing.fillRect(340, 300, 40,40)
  thing.fillRect(460, 300, 40,40)
  thing.fillRect(460, 295, 20,5)
  thing.fillRect(360, 295, 20,5)
  thing.fillRect(440, 330, 20,5)
  thing.fillRect(380, 330, 20,5)
if(x >= 340 && x <= 369 && y <= 100){
  x = 340;
}
if(x <= 460 && y <= 100 && x >= 430) {
  x = 460;
}
if(x >= 360 && y <= 200 && x <= 390 && y >= 100){
  x = 360;
}
if(x <= 480 && y <= 200 && x >= 450 && y >= 100) {
  x = 480;
}
if (x >= 380 && y <= 260 && x <= 410 && y >= 200) {
  x = 380;
}
if (x <= 500 && y <= 260 && x >= 470 && y >= 200) {
  x = 500;
}
if(y <= 260 && y >= 250 && x >= 400 && x <= 480){
  y = 260;
}
if(y >= 320 && y <= 340 && x >= 400 && x <= 480){
  y = 320;
}
if(x >= 380 && x <= 410 && y >= 320 && y <= 440){
  x = 380;
}
if(x <= 500 && x >= 470 && y >= 320 && y <= 440){
  x = 500
}
if(x >= 360 && x <= 370 && y >= 440 && y <= 520){
  x = 360;
}
if (x <= 480 && x >= 451 && y >= 440 && y <= 520) {
  x = 480;
}
if (x >= 340 && x <= 369 && y >= 520 && y <= 600) {
  x = 340;
}
if (x <= 460 && x >= 431 && y >= 520 && y <= 600) {
  x = 460;
}


if (x2 >= 340 && x2 <= 369 && y2 <= 100) {
  x2 = 340;
}
if (x2 <= 460 && y2 <= 100 && x2 >= 430) {
  x2 = 460;
}
if (x2 >= 360 && y2 <= 200 && x2 <= 390 && y2 >= 100) {
  x2 = 360;
}
if (x2 <= 480 && y2 <= 200 && x2 >= 450 && y2 >= 100) {
  x2 = 480;
}
if (x2 >= 380 && y2 <= 260 && x2 <= 410 && y2 >= 200) {
  x2 = 380;
}
if (x2 <= 500 && y2 <= 260 && x2 >= 470 && y2 >= 200) {
  x2 = 500;
}
if (y2 <= 260 && y2 >= 250 && x2 >= 400 && x2 <= 480) {
  y2 = 260;
}
if (y2 >= 320 && y2 <= 340 && x2 >= 400 && x2 <= 480) {
  y2 = 320;
}
if (x2 >= 380 && x2 <= 410 && y2 >= 320 && y2 <= 440) {
  x2 = 380;
}
if (x2 <= 500 && x2 >= 470 && y2 >= 320 && y2 <= 440) {
  x2 = 500
}
if (x2 >= 360 && x2 <= 370 && y2 >= 440 && y2 <= 520) {
  x2 = 360;
}
if (x2 <= 480 && x2 >= 451 && y2 >= 440 && y2 <= 520) {
  x2 = 480;
}
if (x2 >= 340 && x2 <= 369 && y2 >= 520 && y2 <= 600) {
  x2 = 340;
}
if (x2 <= 460 && x2 >= 431 && y2 >= 520 && y2 <= 600) {
  x2 = 460;
}
}
 
function Music(){
  if(PlayMusic == 0){
    BeforeSuspence.play();
  }
  if(x >= x2 - 20 && x <= x2 + 20 && y >= y2 - 20 && y <= y2 +20){
    PlayMusic++;
  }
  if(PlayMusic >= 1){
    BeforeSuspence.pause();
    AfterSuspence.play();
  }
}

document.body.addEventListener('keyup', NoUltimate);
document.body.addEventListener('keydown', YesUltimate);


function YesUltimate(event) {
  if (event.keyCode == 50) {
    UltimateAbility1 = true;
  }
}
function NoUltimate(event) {
  if (event.keyCode == 50) {
    UltimateAbility1 = false;
  }
}
document.body.addEventListener('keyup', NoUltimate2);
document.body.addEventListener('keydown', YesUltimate2);


function YesUltimate2(event) {
  if (event.keyCode == 48) {
    UltimateAbility2 = true;
  }
}
function NoUltimate2(event) {
  if (event.keyCode == 48) {
    UltimateAbility2 = false;
  }
}

function Ultimate(){
  if(UltimateAbility1 == true){
    MovementSpeed = 3;
    StartUltimateTime++;
  }
  if(StartUltimateTime >= 1){
    UltimateTime++;
  }
  if(UltimateTime == 100){
    UltimateDisable++;
  }
  if(UltimateDisable >= 1){
    UltimateTime = 0;
    MovementSpeed = 1.5;
    UltimateAbility1 = false;
  }
  
 
  
if (UltimateAbility2 == true) {
  MovementSpeed2 = 3;
  StartUltimateTime2++;
}
if (StartUltimateTime2 >= 1) {
  UltimateTime2++;
}
if (UltimateTime2 == 100) {
  UltimateDisable2++;
}
if (UltimateDisable2 >= 1){
  UltimateTime2 = 0;
  MovementSpeed2 = 1.5;
  UltimateAbility2 = false;
}

}
function StartingScreen(){
  StartScreenTime++;
  if(StartScreenTime == 100){
StopAnimation++;
  }
  
  
  if(StopAnimation == 1){
    StartScreenTime = 0;
  }
  
  if(StartScreenTime > 0 ){
    thing.fillStyle = 'black';
    thing.fillRect(0,0,800,600);
    thing.fillStyle = 'white';
    thing.font='50px arial';
    thing.fillText('PVP ULTIMATES',200,200);
    thing.fillStyle = 'white';
    thing.font = '30px Georgia';
    thing.fillText('Dylan Presents', 300, 100);
    thing.fillStyle = 'white';
    thing.font = '10px Georgia';
    thing.fillText('SECRET', 720,580 );
  }
if(StartScreenTime <= 50 && StartScreenTime >= 1){
  thing.beginPath();
  thing.fillStyle = 'blue';
  thing.arc(320,500,40,0,2 * Math.PI);
  thing.fill();
  thing.beginPath();
  thing.fillStyle = 'blue';
  thing.arc(480, 500, 40, 0, 2 * Math.PI);
  thing.fill();
  thing.fillRect(320,360,30,140);
  thing.fillRect(480,360,30,140);
  thing.fillRect(320,360,180,30);

}
if(StartScreenTime > 50 && StartUltimateTime <= 100){
  thing.fillStyle = 'white';
  thing.font = '20px arial'
  thing.fillText("Thank you for your music Ian Riesterer",250,400)
}
}
function Win(){
  if(Character1HP ==0){
    thing.fillStyle='blue';
    thing.font='12px arial';
    thing.fillText('Blue Wins!!',400,300);
  }
  if (Character2HP == 0) {
    thing.fillStyle = 'Red';
    thing.font = '12px arial';
    thing.fillText('Red Wins!!', 400, 300);
  }
}
function DisplayHP(){
  thing.fillStyle = 'black';
  thing.font='12px arial';
  thing.fillText('HP = '+Character1HP,x+20,y+20);
  
  thing.fillStyle = 'black';
  thing.font = '12px arial';
  thing.fillText('HP = ' + Character2HP, x2 - 60, y2 +20);
}

function Damage(){
  if (ShootInDirection2 == true) {
    CoolDown2P2++;
  }
  if (CoolDown2P2 > 1) {
    CoolDown2++;
    ShootInDirection2 = false;
  }
  if (CoolDown2 == 100) {
    CoolDown2 = 0;
    CoolDown2P2 = 0;
  }
  
  
 if (ShootInDirection == true) {
   CoolDownP2++;
 }
 if(CoolDownP2 > 1 ){
   CoolDown++;
   ShootInDirection = false;
 }
if(CoolDown == 100){
  CoolDown = 0;
  CoolDownP2 = 0;
}
 if (ShootInDirection == false) {
  OneHit = 0;
}
if (ShootInDirection2 == false) {
  OneHit2 = 0;
}
if (ShootInDirection == true) {
  if(CoolDown == 0){
  if (x >= x2 - 40 && y >= y2 - 15 && y <= y2 + 15 && x <= x2 + 10) {
    OneHit++;
  }
  }
}
if (OneHit == 1) {
  x2= x2 + 25
  Character2HP--;
}
if (ShootInDirection2 == true) {
  if(CoolDown2 == 0){
  if (x2 <= x + 40 && y2 >= y - 15 && y2 <= y + 15 && x2 >= x - 10) {
    OneHit2++;
  }
  }
}
if (OneHit2 == 1) {
  x = x - 25;
  Character1HP--;
}
}
function ProjectileDirection(){
  if(ShootInDirection == true){
      thing.fillStyle ='red';
      thing.fillRect(x+20,y ,40,2);
  }
  if (ShootInDirection2 == true) {
    thing.fillStyle = 'blue';
    thing.fillRect(x2 - 60, y2 , 40, 2);
  }
}

document.body.addEventListener('keyup', dontShoot);
document.body.addEventListener('keydown', shoot);


function shoot(event) {
  if (event.keyCode == 81) {
    ShootInDirection = true;
  }
}
function dontShoot(event) {
  if (event.keyCode == 81) {
    ShootInDirection = false;
  }
}
document.body.addEventListener('keyup', dontShoot2);
document.body.addEventListener('keydown', shoot2);


function shoot2(event) {
  if (event.keyCode == 73) {
    ShootInDirection2 = true;
  }
}
function dontShoot2(event) {
  if (event.keyCode == 73) {
    ShootInDirection2 = false;
  }
}


function ScreenBorder(){
  if (x >= 780){
    x = 780
  }
    if (x2 >= 780) {
        x2 = 780
  }
  if(x <= 20){
    x= 20;
  }
  if (x2 <= 20) {
    x2 = 20;
  }
  if(y <= 20){
    y = 20;
    
  }
  if (y >= 580) {
    y = 580;
  
  }
  if (y2 <= 20) {
    y2 = 20;
  
  }
  if (y2 >= 580) {
    y2 = 580;
  
  }
}

function Background(){
  thing.fillStyle='green';
  thing.fillRect(0,0,800,600)
}

function CharacterMovement(){
    if (MoveUp == true) {
      y = y - MovementSpeed;
    }
    if (MoveDown == true) {
      y = y + MovementSpeed;
    }
    if (MoveRight == true) {
      x = x + MovementSpeed;
    }
    if (MoveLeft == true) {
      x = x - MovementSpeed;
    }
 }

function MakeCharacter(){
   if(CharacterOrientation == 4){
     thing.fillStyle = '#995400'
     thing.fillRect(x - 15, y - 20, 30, 5);
     
     thing.fillStyle = 'darkred';
     thing.fillRect(x - 10,y + 5,20,15);
     thing.fillRect( x - 15 , y + 10 , 5, 15);
     thing.fillRect( x + 10 , y + 10 , 5, 15);
     thing.fillRect(x + 15 , y + 10 , 5 ,5 );
     thing.fillRect( x + 20 , y + 5 , 5 ,5 );
     thing.fillRect( x - 15 , y - 15 , 30, 5);
    thing.fillRect(x - 10, y - 25, 20, 5);
    thing.fillRect(x - 20, y - 15, 5, 5);
    thing.fillRect(x - 25, y - 20, 5, 5);
    thing.fillRect(x + 15, y - 15, 5, 5);
    thing.fillRect(x + 20, y - 20, 5, 5);
  thing.fillStyle ='white';
  thing.fillRect(x,y - 10 , 5, 10);
  thing.fillRect( x + 5 , y -5, 5 ,5);
  thing.fillStyle ='black';
  thing.fillRect(x + 5 , y - 10, 5,5);
  thing.fillStyle = '#E0A761';
  thing.fillRect(x - 10 , y , 20 , 5);
  thing.fillRect(x- 5 , y - 5 , 5 ,5)
  thing.fillRect(x + 10, y - 5 , 5 ,5 )
  thing.fillStyle='#573000'
  thing.fillRect(x - 15, y - 10, 5 , 20);
  thing.fillRect( x - 10 , y - 10, 5, 10);
  thing.fillRect(x -5,y - 10, 5 ,5 );
   }
  if(CharacterOrientation == 1){
    thing.fillStyle = '#995400'
    thing.fillRect(x - 15, y - 20, 30, 5);
    thing.fillStyle='darkred'
    thing.fillRect( x- 15, y + 10,30,10);
    thing.fillRect(x - 10, y +5 , 20, 5);
    thing.fillRect(x - 10, y +20, 5,5);
    thing.fillRect(x + 5, y + 20, 5,5);
    thing.fillRect(x - 15, y - 15, 30, 5);
    thing.fillRect(x - 10, y - 25, 20, 5);
    thing.fillRect(x - 20, y - 15, 5, 5);
    thing.fillRect(x - 25, y - 20, 5, 5);
    thing.fillRect(x + 15, y - 15, 5, 5);
    thing.fillRect(x + 20, y - 20, 5, 5);
    thing.fillStyle = '#573000';
    thing.fillRect(x -15, y -10,30,10);
    thing.fillRect(x-10,y,20,5);
    thing.fillRect(x -5,y+5,5,10);
    thing.fillRect(x,y+10,5,5);
  }

if(CharacterOrientation == 3){
  thing.fillStyle = '#995400'
  thing.fillRect(x - 15, y - 20, 30, 5);
  thing.fillStyle='darkred'

thing.fillRect(x - 15, y - 15, 30, 5);
thing.fillRect(x - 10, y - 25, 20, 5);
thing.fillRect(x - 20, y - 15, 5, 5);
thing.fillRect(x - 25, y - 20, 5, 5);
thing.fillRect(x + 15, y - 15, 5, 5);
thing.fillRect(x + 20, y - 20, 5, 5);
thing.fillRect(x - 10, y + 5, 20,15);
thing.fillRect(x - 15, y + 10,5,15);
thing.fillRect(x + 10, y + 10,5,15);
thing.fillRect(x - 20, y + 10, 5,5);
thing.fillRect(x + 15, y + 10, 5,5);
thing.fillStyle='#573000';
thing.fillRect(x - 15, y,5,10);
thing.fillRect(x + 10, y,5,10);
thing.fillStyle='black';
thing.fillRect(x - 15, y - 10,5,5);
thing.fillRect(x + 10, y - 10,5,5);
thing.fillStyle='white';
thing.fillRect(x - 10, y - 10, 5,10);
thing.fillRect(x - 15, y - 5, 5,5);
thing.fillRect(x + 5, y - 10, 5,10);
thing.fillRect(x +10, y - 5, 5,5);
  thing.fillStyle = '#E0A761';
  thing.fillRect(x - 10, y, 20,5);
  thing.fillRect(x-5,y-10,10,10);
  thing.fillRect(x - 25, y+ 5,5,5);
    thing.fillRect(x + 20, y+ 5,5,5);
 }
 if(CharacterOrientation == 2){
   thing.fillStyle = '#995400'
   thing.fillRect(x - 15, y - 20, 30, 5);
    thing.fillStyle = 'darkred'
   
    thing.fillRect(x - 15, y - 15, 30, 5);
    thing.fillRect(x - 10, y - 25, 20, 5);
    thing.fillRect(x - 20, y - 15, 5, 5);
    thing.fillRect(x - 25, y - 20, 5, 5);
    thing.fillRect(x + 15, y - 15, 5, 5);
    thing.fillRect(x + 20, y - 20, 5, 5);
    thing.fillRect(x - 15, y + 10, 30,10);
    thing.fillRect(x - 10, y + 5,20,5);
    thing.fillRect(x - 15, y + 20 ,5,5);
    thing.fillRect(x +10, y + 20 ,5,5);
    thing.fillRect(x - 20, y + 10 ,5,5);
      thing.fillStyle = '#E0A761';
thing.fillRect(x - 10, y , 20,5);
thing.fillRect(x - 15, y - 5, 5,5);
thing.fillRect(x , y - 5,5,5);
thing.fillRect(x - 25,y+5,5,5);
thing.fillStyle='white';
thing.fillRect(x - 5, y-10, 5,10);
thing.fillRect(x - 10, y - 5,5,5);
thing.fillStyle='black';
thing.fillRect(x - 10, y-10,5,5);
  thing.fillStyle='#573000';
thing.fillRect(x, y - 10, 15,5);
thing.fillRect(x + 5, y - 5, 10,5);
thing.fillRect(x + 10,y,5,10);


 }
}
document.body.addEventListener('keydown', KeyDown);
document.body.addEventListener('keyup', KeyUp);
function KeyDown(event){
if (event.keyCode == 87)
  MoveUp = true;
  CharacterOrientation = 1;
if (event.keyCode == 83){
  MoveDown = true;
  CharacterOrientation = 3;
}
if (event.keyCode == 68){
  MoveRight = true;
  CharacterOrientation = 4;
}
if (event.keyCode == 65){
  MoveLeft = true;
  CharacterOrientation = 2;
}
}

function KeyUp(event){
if (event.keyCode == 87)
  MoveUp = false;
if (event.keyCode == 83){
  MoveDown = false;
}
if (event.keyCode == 68){
  MoveRight = false;
}
if (event.keyCode == 65){
  MoveLeft = false;
}
}

function CharacterMovement2(){
   if(MoveUp2 == true){
    y2=y2 - MovementSpeed2;
   }
   if (MoveDown2 == true){
    y2 = y2 + MovementSpeed2;
   }
   if (MoveRight2 == true){
    x2 = x2 + MovementSpeed2;
   }
   if (MoveLeft2 == true){
     x2 = x2 - MovementSpeed2;
   }
 }

function MakeCharacter2(){
   if(CharacterOrientation2 == 4){
     thing.fillStyle = '#995400'
     thing.fillRect(x2 - 15, y2 - 20, 30, 5);
     thing.fillStyle = 'darkblue';
     thing.fillRect(x2 - 10,y2 + 5,20,15);
     thing.fillRect( x2 - 15 , y2 + 10 , 5, 15);
     thing.fillRect( x2 + 10 , y2 + 10 , 5, 15);
     thing.fillRect(x2 + 15 , y2 + 10 , 5 ,5 );
     thing.fillRect( x2 + 20 , y2 + 5 , 5 ,5 );
     thing.fillRect( x2 - 15 , y2 - 15 , 30, 5);
    thing.fillRect(x2 - 10, y2 - 25, 20, 5);
    thing.fillRect(x2 - 20, y2 - 15, 5, 5);
    thing.fillRect(x2 - 25, y2 - 20, 5, 5);
    thing.fillRect(x2 + 15, y2 - 15, 5, 5);
    thing.fillRect(x2 + 20, y2 - 20, 5, 5);
  thing.fillStyle ='white';
  thing.fillRect(x2,y2 - 10 , 5, 10);
  thing.fillRect( x2 + 5 , y2 -5, 5 ,5);
  thing.fillStyle ='black';
  thing.fillRect(x2 + 5 , y2 - 10, 5,5);
  thing.fillStyle = '#E0A761';
  thing.fillRect(x2 - 10 , y2 , 20 , 5);
  thing.fillRect(x2- 5 , y2 - 5 , 5 ,5)
  thing.fillRect(x2 + 10, y2 - 5 , 5 ,5 )
  thing.fillStyle='#573000'
  thing.fillRect(x2 - 15, y2 - 10, 5 , 20);
  thing.fillRect( x2 - 10 , y2 - 10, 5, 10);
  thing.fillRect(x2 -5,y2 - 10, 5 ,5 );
   }
  if(CharacterOrientation2 == 1){
    thing.fillStyle = '#995400'
    thing.fillRect(x2 - 15, y2 - 20, 30, 5);
    thing.fillStyle='darkblue'
    thing.fillRect( x2- 15, y2 + 10,30,10);
    thing.fillRect(x2 - 10, y2 +5 , 20, 5);
    thing.fillRect(x2 - 10, y2 +20, 5,5);
    thing.fillRect(x2 + 5, y2 + 20, 5,5);
    thing.fillRect(x2 - 15, y2 - 15, 30, 5);
    thing.fillRect(x2 - 10, y2 - 25, 20, 5);
    thing.fillRect(x2 - 20, y2 - 15, 5, 5);
    thing.fillRect(x2 - 25, y2 - 20, 5, 5);
    thing.fillRect(x2 + 15, y2 - 15, 5, 5);
    thing.fillRect(x2 + 20, y2 - 20, 5, 5);
    thing.fillStyle = '#573000';
    thing.fillRect(x2 -15, y2 -10,30,10);
    thing.fillRect(x2-10,y2,20,5);
    thing.fillRect(x2 -5,y2+5,5,10);
    thing.fillRect(x2,y2+10,5,5);
  }

if(CharacterOrientation2 == 3){
  thing.fillStyle = '#995400'
  thing.fillRect(x2 - 15, y2 - 20, 30, 5);
  thing.fillStyle='darkblue'

thing.fillRect(x2 - 15, y2 - 15, 30, 5);
thing.fillRect(x2 - 10, y2 - 25, 20, 5);
thing.fillRect(x2 - 20, y2 - 15, 5, 5);
thing.fillRect(x2 - 25, y2 - 20, 5, 5);
thing.fillRect(x2 + 15, y2 - 15, 5, 5);
thing.fillRect(x2 + 20, y2 - 20, 5, 5);
thing.fillRect(x2 - 10, y2 + 5, 20,15);
thing.fillRect(x2 - 15, y2 + 10,5,15);
thing.fillRect(x2 + 10, y2 + 10,5,15);
thing.fillRect(x2 - 20, y2 + 10, 5,5);
thing.fillRect(x2 + 15, y2 + 10, 5,5);
thing.fillStyle='#573000';
thing.fillRect(x2 - 15, y2,5,10);
thing.fillRect(x2 + 10, y2,5,10);
thing.fillStyle='black';
thing.fillRect(x2 - 15, y2 - 10,5,5);
thing.fillRect(x2 + 5, y2 - 10,5,5);
thing.fillStyle='white';
thing.fillRect(x2 - 10, y2 - 10, 5,10);
thing.fillRect(x2 - 15, y2 - 5, 5,5);
thing.fillRect(x2 + 5, y2 - 5, 5,10);
thing.fillRect(x2 + 10, y2 - 10, 5,10);
  thing.fillStyle = '#E0A761';
  thing.fillRect(x2 - 10, y2, 20,5);
  thing.fillRect(x2-5,y2-10,10,10);
  thing.fillRect(x2 - 25, y2+ 5,5,5);
    thing.fillRect(x2 + 20, y2+ 5,5,5);
 }
 if(CharacterOrientation2 == 2){
   thing.fillStyle = '#995400'
       thing.fillRect(x2 - 15, y2 - 20, 30, 5);

    thing.fillStyle = 'darkblue'
          thing.fillRect(x2 - 15, y2 - 15, 30, 5);

    thing.fillRect(x2 - 10, y2 - 25, 20, 5);
    thing.fillRect(x2 - 20, y2 - 15, 5, 5);
    thing.fillRect(x2 - 25, y2 - 20, 5, 5);
    thing.fillRect(x2 + 15, y2 - 15, 5, 5);
    thing.fillRect(x2 + 20, y2 - 20, 5, 5);
    thing.fillRect(x2 - 15, y2 + 10, 30,10);
    thing.fillRect(x2 - 10, y2 + 5,20,5);
    thing.fillRect(x2 - 15, y2 + 20 ,5,5);
    thing.fillRect(x2 +10, y2 + 20 ,5,5);
    thing.fillRect(x2 - 20, y2 + 10 ,5,5);
      thing.fillStyle = '#E0A761';
thing.fillRect(x2 - 10, y2 , 20,5);
thing.fillRect(x2 - 15, y2 - 5, 5,5);
thing.fillRect(x2 , y2 - 5,5,5);
thing.fillRect(x2 - 25,y2+5,5,5);
thing.fillStyle='white';
thing.fillRect(x2 - 5, y2-10, 5,10);
thing.fillRect(x2 - 10, y2 - 5,5,5);
thing.fillStyle='black';
thing.fillRect(x2 - 10, y2-10,5,5);
  thing.fillStyle='#573000';
thing.fillRect(x2, y2 - 10, 15,5);
thing.fillRect(x2 + 5, y2 - 5, 10,5);
thing.fillRect(x2 + 10,y2,5,10);


 }
}
document.body.addEventListener('keydown', KeyDown2);
document.body.addEventListener('keyup', KeyUp2);
function KeyDown2(event){
if (event.keyCode == 79)
  MoveUp2 = true;
  CharacterOrientation2 = 1;
if (event.keyCode == 76){
  MoveDown2 = true;
  CharacterOrientation2 = 3;
}
if (event.keyCode == 186){
  MoveRight2 = true;
  CharacterOrientation2 = 4;
}
if (event.keyCode == 75){
  MoveLeft2 = true;
  CharacterOrientation2 = 2;
}
}

function KeyUp2(event){
if (event.keyCode == 79)
  MoveUp2 = false;

if (event.keyCode == 76){
  MoveDown2 = false;
}
if (event.keyCode == 186){
  MoveRight2 = false;
}
if (event.keyCode == 75){
  MoveLeft2 = false;
}
}

GameFunctions();

