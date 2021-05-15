var ball,database,position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,15,15);
    ball.shapeColor = "red";
    database = firebase.database();
    var locref = database.ref("ball/position")
    locref.on("value",readPosition,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}

function showError(){
    console.log("error")
}



function readPosition(data){

    position = data.val();
    
    ball.x = position.x;
    ball.y = position.y;
} 


function writePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    var writeRef = database.ref("ball/position")
    writeRef.set({
        x:ball.x+x,
        y:ball.y+y

    })
}