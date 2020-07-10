function drawScore(ctx, score){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, ctx.canvas.width / 2, 250);
    ctx.stroke();
    ctx.restore();

}

function drawObstacle(ctx, centerX, centerY, width, height, color){
    // ctx.fillStyle = color;
    // ctx.beginPath();
    // ctx.moveTo(centerX, centerY);
    // ctx.lineTo(centerX + width/2, centerY);
    // ctx.lineTo(centerX + width/2, centerY + height);
    // ctx.lineTo(centerX, centerY + height);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fill();
    ctx.fillStyle = color;
    this.width = width;
    this.height = height;
    this.x = centerX;
    this.y = centerY;
    ctx.fillRect(this.x, this.y, this.width, this.height);


}

function drawBird(ctx, centerX, centerY, radius){

        //start Body
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0.25*Math.PI, 1.75 * Math.PI);
        ctx.lineTo(centerX + radius , centerY);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "lightblue";
        ctx.fill();
        //end Body
    
        //start Wing
    
        //start eye
        ctx.beginPath();
        ctx.arc(centerX+radius/2, centerY- radius/2, radius/10, 0.*Math.PI, 2 * Math.PI)
        ctx.stroke();
        ctx.strokeStyle = "white";
        ctx.fillStyle = "grey";
        ctx.fill();
        //end eye
}

function drawGround(ctx){
                //draw ground
                ctx.beginPath();
                ctx.moveTo(0, 200);
                ctx.lineTo(600, 200);
                ctx.lineTo(600, 300);
                ctx.lineTo(0, 300);
                ctx.closePath();
                ctx.stroke();
                ctx.fillStyle = "brown";
                ctx.fill();
}

function collision(playerX, playerY, obstX, obstY, obstHeight){
    //|| obstX + 15 < playerX + 10 && obstX + 15 > playerX - 20               
    if( obstX < playerX + 10 && obstX > playerX - 20 ){
        //this is for non top oriented
        if (obstY > 0){
            if(playerY+10 > 200 - obstHeight){
                alert("Game Over");
                reset();
            }
        }
        else {
            if(playerY - 15 < obstHeight){
                alert("Game Over");
                console.log(obstHeight);
                reset();
            }
       }

    }
}

function reset(){
     score = 0;

     x1 = 200;
    scored1 = false;
     x2 = 300;
     x3 = 400;
     x4 = 500;
     x5 = 600;
     x6 = 700;
     x7 = 800;
     x8 = 900;

     y1 = 100;
     y2 = 0;
     topOriented = 0;
    
     y3 = 100;
     y4 = 0;
     y5 = 100;
     y6 = 0;
     y7 = 100;
     y8 = 0;

     xMovement = 1

    scored1 = false;
    scored2 = false;
    scored3 = false;
    scored4 = false;
    scored5 = false;
    scored6 = false;
    scored7 = false;
    scored8 = false;

    playerX = 50;
    playerY = 100;
}