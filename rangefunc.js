function createNumArray(start, end, step){
    start = start;
    end = end;
    step = step || 1;
    numberArray = new Array;
    for (let i=start; start <= end; start += step){
        numberArray.push(start);
    }
    return numberArray;
}

// numberArray = createNumArray(0,100,25);
// console.log(numberArray);

let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

let list1 = {value: 0, rest: list};
let list2 = {value: -1, rest: list};
// console.log(list);
// console.log(list1);
// console.log(list2);

kluesNumbs = [0,1,2,3,4,5];
function incr(element){
    return element +1;
}


kluesNumbs1 = kluesNumbs.map(incr);
console.log(kluesNumbs1);

kluesNumbs2 = kluesNumbs.map(x => x+1);
console.log(kluesNumbs2);

//Turn an play Logic


function getDOM(y, x)
  {
  console.log("Turn status: " + turnStatus);
  if (boardState[y][x] == "O" || boardState[y][x] == "X"){
  if (turnStatus < 1){
    turnStatus = 1;
  content = document.getElementById(y+","+x).innerHTML;
  if (content == "X" || content == "O"){
    document.getElementById(y+","+x).innerHTML = " ";
    turn += 1;
    console.log(turn);
  }

  console.log(y + "," + x);
  console.log( boardState[y][x] );
    //get possible moves
    if (boardState[y][x] == "O"){
      oldX = x;
      oldY = y;
      boardElement = boardState[y][x];
      oldDiv = y +","+x;
      oldChar = boardState[y][x]
      moves = y-1 + "," + (x-1);
      if(x > 0){
        oldColorM1 =  document.getElementById(moves).style.background;
        document.getElementById(moves).style.background = "lightgrey";
      }
      
      moves = y-1 + "," + (x+1);
      if(x < 7){
        oldColorM2 =  document.getElementById(moves).style.background;
        document.getElementById(moves).style.background = "lightgrey";  
      } 
    }
  }
  else{
    if( y == oldY && x == oldX){
      console.log("setting:" + oldDiv + " " + oldChar);
      document.getElementById(oldDiv).innerHTML = oldChar;
      // document.getElementById(moves).style.background = oldColorM1;
      moves = y-1 + "," + (x-1);
      if(x > 0){
      document.getElementById(moves).style.background = oldColorM1;
      }
      moves = y-1 + "," + (x+1);
      if(x < 7){
      document.getElementById(moves).style.background = oldColorM2; 
      }
      turnStatus = 0; 
    }

  }
}

  

  //turn indicator handling
    // if (turn % 2 == 0){
    //   document.getElementById("turnIndicator").style.borderTop = "2px solid green";
    //   document.getElementById("turnIndicator").style.borderBottom = "2px solid white";  
    // }
    // else{
    //   document.getElementById("turnIndicator").style.borderTop = "2px solid white";
    //   document.getElementById("turnIndicator").style.borderBottom = "2px solid green";  
    // }
}