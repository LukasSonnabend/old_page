function getDOM(y,x){
    //cannot move over own playstones
    calcMoves(y, x);
    drawBoard();
}

function calcMoves(y, x){
    if(turnActive == false){
        savedBoard = JSON.parse(JSON.stringify(boardState));
        oldY = y;
        oldX = x;
        console.log("Turn active: " + turnActive);
        let char = boardState[y][x];
        console.log(JSON.stringify(boardState))
        //start with standard  player
        //for O y= -1; X = +1
       
        if( char == "O" ){
            if (boardState[y-1][x-1] != "O" || boardState[y-1][x+1] != "O" ){
            boardState[y][x] = " ";
            y = y-1;
            boardState[y][x-1] = "M";
            boardState[y][x+1] = "M";
            turnActive = true;
        }
        

        }
        if( char == "X" ){
            y = y+1;
            boardState[y][x-1] = "M";
            boardState[y][x+1] = "M";
        }
    }
    else{
        console.log( x +" , "+oldX );
        console.log( y +" , "+oldY );
        if(y == oldY && x == oldX){
            resetMove(y, x);
        }
    }
}

function resetMove(){
    turnActive = false;
    boardState = savedBoard;
}



function drawBoard(){
    let string;
    let color;
    //loop through rows
    for(var i = 0; i <= 7; i++ ){
        //loop through columns
        string = "";
        for(var j = 0; j <= 7; j++){
            let char = boardState[i][j];
            if (char == "E"){
                char = " ";
            }
            if (i % 2 == 0 && j % 2 != 0){
                color = "lightgreen";
            }
            else if (i % 2 != 0 && j % 2 == 0){
                color = "lightgreen";
            }
            else{
                color = "grey";
            }
            if (char == "M"){
                color = "lightgrey";
                char = " ";
            }
            string += '<div id="'+ i + ',' + j +'" onClick="getDOM(' + i + ',' + j +') "class="field" style="height: 20px; width: 20px; background: '+ color + '; display: inline-block">' + char + '</div>'; 
            elementId = "liLoop"+i;
            document.getElementById(elementId).innerHTML = string;
        }
}
}




// function getDOM(y, x)
//   {
//   console.log("Turn status: " + turnStatus);
//   if (boardState[y][x] == "O" || boardState[y][x] == "X"){
//   if (turnStatus < 1){
//     turnStatus = 1;
//   content = document.getElementById(y+","+x).innerHTML;
//   if (content == "X" || content == "O"){
//     document.getElementById(y+","+x).innerHTML = " ";
//     turn += 1;
//     console.log(turn);
//   }

//   console.log(y + "," + x);
//   console.log( boardState[y][x] );
//     //get possible moves
//     if (boardState[y][x] == "O"){
//       oldX = x;
//       oldY = y;
//       boardElement = boardState[y][x];
//       oldDiv = y +","+x;
//       oldChar = boardState[y][x]
//       moves = y-1 + "," + (x-1);
//       if(x > 0){
//         oldColorM1 =  document.getElementById(moves).style.background;
//         document.getElementById(moves).style.background = "lightgrey";
//       }
      
//       moves = y-1 + "," + (x+1);
//       if(x < 7){
//         oldColorM2 =  document.getElementById(moves).style.background;
//         document.getElementById(moves).style.background = "lightgrey";  
//       } 
//     }
//   }
//   else{
//     if( y == oldY && x == oldX){
//       console.log("setting:" + oldDiv + " " + oldChar);
//       document.getElementById(oldDiv).innerHTML = oldChar;
//       // document.getElementById(moves).style.background = oldColorM1;
//       moves = y-1 + "," + (x-1);
//       if(x > 0){
//       document.getElementById(moves).style.background = oldColorM1;
//       }
//       moves = y-1 + "," + (x+1);
//       if(x < 7){
//       document.getElementById(moves).style.background = oldColorM2; 
//       }
//       turnStatus = 0; 
//     }

//   }
// }

  

//   //turn indicator handling
//     // if (turn % 2 == 0){
//     //   document.getElementById("turnIndicator").style.borderTop = "2px solid green";
//     //   document.getElementById("turnIndicator").style.borderBottom = "2px solid white";  
//     // }
//     // else{
//     //   document.getElementById("turnIndicator").style.borderTop = "2px solid white";
//     //   document.getElementById("turnIndicator").style.borderBottom = "2px solid green";  
//     // }
// }