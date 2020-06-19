const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, world; 
var p1,p2,p3,p4, p5,p6,p7,p8;  
var p9,p10,p11,p12,p13, p14,p15, p16, p17; 
var p18, p19,p20,p21,p22,p23,p24,p25; 
var p26,p27,p28,p29,p30,p31,p32,p33,p34; 

var div1, div2, div3, div4, div5; 

/*var particles =[]; 
var plinkos =[]; 
var divisions =[]; 
*/
//var divisionHeight=300; 

function setup() {
  createCanvas(480,800); 
  engine = Engine.create();
  world = engine.world; 
  //createSprite(400, 200, 50, 50); 
  ground= new Ground(480, 790, 1200,20);  
  
  //1st row
  p1=new Plinko(20,100,15); 
  p2=new Plinko(80,100,15); 
  p3=new Plinko(140,100,15); 
  p4=new Plinko(200,100,15); 
  p5=new Plinko(260,100,15); 
  p6=new Plinko(320,100,15); 
  p7=new Plinko(380,100,15); 
  p8=new Plinko(440,100,15); 

  //2nd row 
  p9=new Plinko(0,200,15); 
  p10=new Plinko(60,200,15); 
  p11=new Plinko(120,200,15); 
  p12=new Plinko(180,200,15); 
  p13=new Plinko(240,200,15); 
  p14=new Plinko(300,200,15); 
  p15=new Plinko(360,200,15); 
  p16=new Plinko(420,200,15); 
  p17=new Plinko(480,200,15);

  //3rd row 
  p18=new Plinko(20,300,15); 
  p19=new Plinko(80,300,15); 
  p20=new Plinko(140,300,15); 
  p21=new Plinko(200,300,15); 
  p22=new Plinko(260,300,15); 
  p23=new Plinko(320,300,15); 
  p24=new Plinko(380,300,15); 
  p25=new Plinko(440,300,15); 

  //4th row 
  p26=new Plinko(0,400,15); 
  p27=new Plinko(60,400,15); 
  p28=new Plinko(120,400,15); 
  p29=new Plinko(180,400,15); 
  p30=new Plinko(240,400,15); 
  p31=new Plinko(300,400,15); 
  p32=new Plinko(360,400,15); 
  p33=new Plinko(420,400,15); 
  p34=new Plinko(480,400,15);
 
  div1= new Division(0,700,10,400); 
  div2= new Division(100,700,10,400);
  div3= new Division(200,700,10,400);
  div4= new Division(300,700,10,400);
  div5= new Division(400,700,10,400);
 

/*for (var j=40;j<=innerWidth;j=j+50) 
{ 
  plinkos.push(new Plinko(j,75)); 

}
for (varj=15;j<=width-10;j=j+50) 
{ 
  plinkos.push(new Plinko(j,175));
} 



for (var k=0; k<=innerWidth; k=k+80){ 
  divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight)); 
  }

}

for (var j=0;j<particles.length;j++){ 
  particles[j].display();
} 
for (var l=0;l<divisions.length;k++){ 
  divisions[k].display();
} 


if(frameCount%60===0) 
{ 
  particles.push(new particles(random(width/2-10, width/2+10),10,10));
} */
}  

function newParticle(){
  
  particles.push(p);
} 

function draw() {
    
  if(frameCount%60==0){ 
  newParticle(); 
  }

  background(0,0,0);  
  Engine.update(engine); 
  for(var i=0;i<particles.length; i++){ 
    particles[0].show(); 
  }
  ground.display();  
 
  p1.display(); 
  p2.display(); 
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();

  p9.display(); 
  p10.display(); 
  p11.display(); 
  p12.display();
  p13.display(); 
  p14.display(); 
  p15.display(); 
  p16.display();
  p17.display(); 

  p18.display(); 
  p19.display(); 
  p20.display(); 
  p21.display(); 
  p22.display(); 
  p23.display(); 
  p24.display(); 
  p25.display();

  p26.display(); 
  p27.display(); 
  p28.display(); 
  p29.display(); 
  p30.display(); 
  p31.display(); 
  p32.display(); 
  p33.display();
  p34.display();


  div1.display(); 
  div2.display(); 
  div3.display();
  div4.display();
  div5.display();

//   drawSprites();
}