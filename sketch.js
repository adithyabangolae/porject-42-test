const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var drops = [];
var umbrella;
//var maxDrops = 100;
var thunder,thunder1,thunder2,thunder3,thunder4;


function preload(){

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
createCanvas(500,500)


umbrella = new Umbrella(250,100,50)

//for (var i=0; i<maxDrops; i++) {

    //drops.push(new Drops(random(0,400), random(0,400)));
//}

   
    
}

function draw(){


    umbrella.display();
    

}

function createThunder() {

rand = Math.round(random(1,4));
 if(frameCount%80===0){ thunderCreatedFrame=frameCount; 
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
     switch(rand){
          case 1: thunder.addImage(thunder1);
           break;
            case 2: thunder.addImage(thunder2);
             break;
              case 3: thunder.addImage(thunder3);
               break;
                case 4: thunder.addImage(thunder4);
                 break;
                  default: break;
                 }

                }

            }

