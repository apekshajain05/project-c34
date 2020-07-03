//var database;
var canvas;
var currentPath=[];   
var drawing=[];
function setup() {

  var canvas=createCanvas(800,500);
  canvas.mousePressed(startPath);
  
   //database=firebase.database;
 
}

  

function draw() {
  background(0 );  
  
  if(mouseIsPressed){
    var point={
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
    //var ref=database.ref("pointX");
  }

  
  stroke(rgb(176, 222, 220));
  strokeWeight(4);
  noFill();
  for(var i=0;i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var a=0;a<path.length;a++){
    vertex(path[a].x,path[a].y);
    }
    endShape();
  }
 
 



 
  
  
  
}

function startPath(){
  currentPath=[];
  drawing.push(currentPath);
}
