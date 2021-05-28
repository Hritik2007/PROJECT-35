//Create variables here
var  dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
  dogImage= loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
   foodStock=database.ref('food');
  foodStock.on("value",readStock);
foodStock.set(20);
  dog=createSprite(250,350,10,60);
  dog.addImage(dogImage);
  dog.scale= 0.2;

 
 
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImage);
   }

  drawSprites();
  //add styles here
  text("Press up-arrow key to feed the pet !",50,70);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })

}



