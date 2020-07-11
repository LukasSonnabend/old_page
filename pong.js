function draw_field(ctx){
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(canvas.width/2 - 75, 0);
    ctx.moveTo(canvas.width/2 + 75, 0);
    ctx.lineTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(canvas.width/2 + 75, canvas.height);
    ctx.moveTo(canvas.width/2 - 75, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 100, 1 * Math.PI, 4* Math.PI)
    ctx.stroke();
    ctx.restore();
}

function draw_players(ctx, p1x, p1y, p2x, p2y){

    ctx.save();
    ctx.rect(p1x, p1y, 75, 15);
    ctx.rect(p2x, p2y, 75, 15);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.restore();
}

function draw_ball(ctx, x, y){
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 25, 1 * Math.PI, 4* Math.PI);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();
}

function scoring_func(){
    document.getElementById("score1").innerHTML = score1;
    document.getElementById("score2").innerHTML = score2;
}

function collision_function(){
    ballX += ballxSpeed;
    ballY += ballySpeed;

    if (ballX + 25 >= canvas.width){
        ballxSpeed *= -1;
    }
    if (ballX - 25 <= 0){
        ballxSpeed *= -1;
    }
    if (ballY + 25 >= canvas.height){
        if(ballX + 25 >= 125 && ballX <= 275 + 25){
            score2 +=1;
            console.log("Point P2");
        }
        ballySpeed *= -1;
    }
    if (ballY - 25 <= 0){
        if(ballX >= 125 && ballX <= 275){
            score1 +=1;
            console.log("Point P1");
        }
        ballySpeed *= -1;
    }
            //collision player 2
            if (ballY + 30 >= player2Y){
                if(ballX >= player2X - 75/2 && ballX <= player2X + 75){
                    ballySpeed = -5;
                }
            }
            //collision player 1
            if (ballY - 30 <= player1Y){
                if(ballX >= player1X - 75/2 && ballX <= player1X + 75){
                    ballySpeed = 5;
                }
            }
}