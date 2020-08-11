//Create variables here 
var dog,happydog,database,foodS,foodStock;

function preload()
{ 
  dogIMG = loadImage("Dog.png"); 
  happydog = loadImage("happydog.png");
  
	//load images here
}

function setup() {
  createCanvas(500, 500); 
  dog = createSprite(250,250,10,10);  
  dog.addImage(dogIMG); 
  dog.scale= 0.1;
  database =firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87); 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS); 
    dog.addImage(happydog);
  }  
  //console.log(foodS);
  drawSprites();  
  textSize(40); 
  fill(255); 
  stroke(10);
  text("food:"+foodS,200,200)
  //add styles here

}

function readStock(data){
  foodS=data.val(); 
} 
function writeStock(x){ 
  if(x<=0){
    x=0
  } else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

