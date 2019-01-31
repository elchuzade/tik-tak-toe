let state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let choiceSide = 60;
let choiceStartY = 100;
let playerChoice = 'o'; // can be 'x' or 'o'
let botChoice = determineBotChoice(playerChoice);
let hover = false;
let over = 'o';
let gameStarted = false;
let playerTurn = true;
let index = 0;
let indexList = [0, 1, 2, 3, 4, 5, 6, 7, 8];


function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(0);
    if (gameStarted) {
        showYourSymbol();
        grid();
        gameLogic();
        allTurns();
        //checkWinner();
    } else {
        hoverChoice();
        startButton();
    }
}

function allTurns() {
    push();
    if (state[0] == 1) {
        if (playerChoice == 'o') {
            makeO(-60, -60, choiceSide);
        } else {
            makeX(-60, -60, choiceSide);
        }
    }
    pop();
}

function checkWinner() {
    console.log('checking');
}

function showYourSymbol() {
    push();
    fill(200, 200, 200);
    rect(60, 60, choiceSide, choiceSide);
    if (playerChoice == 'o') {
        makeO(90, 90, choiceSide);
    } else {
        makeX(90, 90, choiceSide);
    }
    pop();
}

function grid() {
    push();
    translate(width / 2, height / 2);
    stroke(255, 255, 255);
    line(-90, -30, 90, -30);
    line(-90, 30, 90, 30);
    line(-30, -90, -30, 90);
    line(30, -90, 30, 90);
    pop();
}

function makeChoice(hover, over) {
    push();
    fill(150, 150, 150);
    rect(width / 2 - 10 - choiceSide, choiceStartY, choiceSide, choiceSide);
    rect(width / 2 + 10, choiceStartY, choiceSide, choiceSide);
    makeO(width / 2 - 10 - choiceSide + choiceSide / 2, choiceStartY + choiceSide / 2, choiceSide);
    makeX(width / 2 + 10 + choiceSide / 2, choiceStartY + choiceSide / 2, choiceSide);
    if (hover) {
        fill(200, 200, 200);
        if (over == 'o') {
            rect(width / 2 - 10 - choiceSide, choiceStartY, choiceSide, choiceSide);
            makeO(width / 2 - 10 - choiceSide + choiceSide / 2, choiceStartY + choiceSide / 2, choiceSide);
        } else if (over == 'x') {
            rect(width / 2 + 10, choiceStartY, choiceSide, choiceSide);
            makeX(width / 2 + 10 + choiceSide / 2, choiceStartY + choiceSide / 2, choiceSide);
        }
    }
    chosenSide(playerChoice);
    pop();
}

function chosenSide(playerChoice) {
    push();
    stroke(250, 80, 1);
    strokeWeight(2);
    noFill();
    if (playerChoice == 'o') {
        rect(width / 2 - 70, choiceStartY, choiceSide, choiceSide);
    } else {
        rect(width / 2 + 10, choiceStartY, choiceSide, choiceSide);
    }
    pop();
}

function makeO(x, y, size) {
    push();
    translate(x, y);
    noFill();
    strokeWeight(4);
    stroke(20, 20, 20);
    ellipse(0, 0, size * 0.6);
    pop();
}

function makeX(x, y, size) {
    push();
    translate(x, y);
    strokeWeight(4);
    stroke(20, 20, 20);
    line(-size * 0.3, -size * 0.3, size * 0.3, size * 0.3);
    line(-size * 0.3, size * 0.3, size * 0.3, -size * 0.3);
    pop();
}

function determineBotChoice(playerChoice) {
    let botChoice = 'x';
    if (playerChoice == 'x') {
        botChoice = 'o';
    }
    return botChoice;
}

function hoverChoice() {
    if (mouseX > width / 2 - 10 - choiceSide && mouseX < width / 2 - 10 &&
        mouseY > choiceStartY && mouseY < choiceStartY + choiceSide) {
        hover = true;
        over = 'o';
        makeChoice(hover, over);
    } else if (mouseX > width / 2 + 10 && mouseX < width / 2 + 10 + choiceSide &&
        mouseY > choiceStartY && mouseY < choiceStartY + choiceSide) {
        hover = true;
        over = 'x';
        makeChoice(hover, over);
    } else {
        hover = false;
        over = null;
        makeChoice(hover, over);
    }
}

function mousePressed() {
    if (mouseButton == LEFT) {
        if (mouseX > width / 2 - 10 - choiceSide && mouseX < width / 2 - 10 &&
            mouseY > choiceStartY && mouseY < choiceStartY + choiceSide) {
            playerChoice = 'o';
        } else if (mouseX > width / 2 + 10 && mouseX < width / 2 + 10 + choiceSide &&
            mouseY > choiceStartY && mouseY < choiceStartY + choiceSide) {
            playerChoice = 'x';
        }
        if (mouseX > width / 2 - 60 && mouseX < width / 2 - 60 + 120 &&
            mouseY > 200 && mouseY < 200 + 50) {
            setTimeout(function () {
                gameStarted = true;
            }, 1000);
        }
        if (gameStarted) {
            if (playerTurn) {
                if (mouseX > width / 2 - 90 && mouseX < width / 2 - 30 &&
                    mouseY > height / 2 - 90 && mouseY < height / 2 - 30 &&
                    state[0] == 0) {
                    index = 0;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 30 && mouseX < width / 2 + 30 &&
                    mouseY > height / 2 - 90 && mouseY < height / 2 - 30 &&
                    state[1] == 0) {
                    index = 1;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 + 30 && mouseX < width / 2 + 90 &&
                    mouseY > height / 2 - 90 && mouseY < height / 2 - 30 &&
                    state[2] == 0) {
                    index = 2;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 90 && mouseX < width / 2 - 30 &&
                    mouseY > height / 2 - 30 && mouseY < height / 2 + 30 &&
                    state[3] == 0) {
                    index = 3;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 30 && mouseX < width / 2 + 30 &&
                    mouseY > height / 2 - 30 && mouseY < height / 2 + 30 &&
                    state[4] == 0) {
                    index = 4;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 + 30 && mouseX < width / 2 + 90 &&
                    mouseY > height / 2 - 30 && mouseY < height / 2 + 30 &&
                    state[5] == 0) {
                    index = 5;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 90 && mouseX < width / 2 - 30 &&
                    mouseY > height / 2 + 30 && mouseY < height / 2 + 90 &&
                    state[6] == 0) {
                    index = 6;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 30 && mouseX < width / 2 + 30 &&
                    mouseY > height / 2 + 30 && mouseY < height / 2 + 90 &&
                    state[7] == 0) {
                    index = 7;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 + 30 && mouseX < width / 2 + 90 &&
                    mouseY > height / 2 + 30 && mouseY < height / 2 + 90 &&
                    state[8] == 0) {
                    index = 8;
                    state[index] = 1;
                    playerTurn = false;
                    deleteFromIndexList(index);
                }
            }
        }
    }
}

function deleteFromIndexList(index) {
    indexList.forEach(function (indexListValue) {
        if (indexListValue == index) {
            indexList.splice(index, 1);
        }
    });
}

function botMakeTurn() {
    let turnIndex = getRandomInt(indexList.length);
    let turnValue = indexList[turnIndex];
    console.log('turn value: ', turnValue);
    state[turnValue] = 2;
    console.log(state[turnValue]);
    deleteFromIndexList(state[turnValue]);
}

function startButton() {
    push();
    if (startHover()) {
        fill(120, 120, 120);
    } else {
        fill(80, 80, 80);
    }
    rect(width / 2 - 70, 200, 140, 50);
    textSize(32);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    text('START', width / 2 - 60 + 10, 238);
    pop();
}

function startHover() {
    if (mouseX > width / 2 - 60 && mouseX < width / 2 - 60 + 120 &&
        mouseY > 200 && mouseY < 200 + 50) {
        return true;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}

function gameLogic() {
    if (!playerTurn) {
        console.log('bot playing');
        setTimeout(botMakeTurn, 1000);
        playerTurn = true;
    }
}