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
let timeToMove = true;
let gameEnded = false;
let winner = 'nobody';


function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(0);
    if (gameStarted) {
        showYourSymbol();
        grid();
        checkWinner();
        allTurns();
        if (!gameEnded) {
            gameLogic();
        } else {
            showWinner();
        }
    } else {
        hoverChoice();
        startButton();
    }
}

function showWinner() {
    push();
    translate(width / 2, height / 2);
    fill(50, 50, 50);
    noStroke();
    rect(-100, -40, 200, 80);
    if (winner == 'player') {
        textSize(40);
        stroke(0, 255, 0);
        fill(0, 255, 0);
        text('You Won', - 80, 15);
    } else if (winner == 'bot') {
        textSize(40);
        fill(255, 0, 0);
        stroke(255, 0, 0);
        text('You Lost', - 80, 15);
    }
    pop();
}

function allTurns() {
    push();
    translate(width / 2, height / 2);
    // zero index
    if (state[0] == 1) {
        if (playerChoice == 'o') {
            makeO(-60, -60, choiceSide, 'bright');
        } else {
            makeX(-60, -60, choiceSide, 'bright');
        }
    } else if (state[0] == 2) {
        if (playerChoice == 'o') {
            makeX(-60, -60, choiceSide, 'bright');
        } else {
            makeO(-60, -60, choiceSide, 'bright');
        }
    }
    // one index
    if (state[1] == 1) {
        if (playerChoice == 'o') {
            makeO(0, -60, choiceSide, 'bright');
        } else {
            makeX(0, -60, choiceSide, 'bright');
        }
    } else if (state[1] == 2) {
        if (playerChoice == 'o') {
            makeX(0, -60, choiceSide, 'bright');
        } else {
            makeO(0, -60, choiceSide, 'bright');
        }
    }
    // two index
    if (state[2] == 1) {
        if (playerChoice == 'o') {
            makeO(60, -60, choiceSide, 'bright');
        } else {
            makeX(60, -60, choiceSide, 'bright');
        }
    } else if (state[2] == 2) {
        if (playerChoice == 'o') {
            makeX(60, -60, choiceSide, 'bright');
        } else {
            makeO(60, -60, choiceSide, 'bright');
        }
    }
    // three index
    if (state[3] == 1) {
        if (playerChoice == 'o') {
            makeO(-60, 0, choiceSide, 'bright');
        } else {
            makeX(-60, 0, choiceSide, 'bright');
        }
    } else if (state[3] == 2) {
        if (playerChoice == 'o') {
            makeX(-60, 0, choiceSide, 'bright');
        } else {
            makeO(-60, 0, choiceSide, 'bright');
        }
    }
    // four index
    if (state[4] == 1) {
        if (playerChoice == 'o') {
            makeO(0, 0, choiceSide, 'bright');
        } else {
            makeX(0, 0, choiceSide, 'bright');
        }
    } else if (state[4] == 2) {
        if (playerChoice == 'o') {
            makeX(0, 0, choiceSide, 'bright');
        } else {
            makeO(0, 0, choiceSide, 'bright');
        }
    }
    // five index
    if (state[5] == 1) {
        if (playerChoice == 'o') {
            makeO(60, 0, choiceSide, 'bright');
        } else {
            makeX(60, 0, choiceSide, 'bright');
        }
    } else if (state[5] == 2) {
        if (playerChoice == 'o') {
            makeX(60, 0, choiceSide, 'bright');
        } else {
            makeO(60, 0, choiceSide, 'bright');
        }
    }
    // six index
    if (state[6] == 1) {
        if (playerChoice == 'o') {
            makeO(-60, 60, choiceSide, 'bright');
        } else {
            makeX(-60, 60, choiceSide, 'bright');
        }
    } else if (state[6] == 2) {
        if (playerChoice == 'o') {
            makeX(-60, 60, choiceSide, 'bright');
        } else {
            makeO(-60, 60, choiceSide, 'bright');
        }
    }
    // seven index
    if (state[7] == 1) {
        if (playerChoice == 'o') {
            makeO(0, 60, choiceSide, 'bright');
        } else {
            makeX(0, 60, choiceSide, 'bright');
        }
    } else if (state[7] == 2) {
        if (playerChoice == 'o') {
            makeX(0, 60, choiceSide, 'bright');
        } else {
            makeO(0, 60, choiceSide, 'bright');
        }
    }
    // eight index
    if (state[8] == 1) {
        if (playerChoice == 'o') {
            makeO(60, 60, choiceSide, 'bright');
        } else {
            makeX(60, 60, choiceSide, 'bright');
        }
    } else if (state[8] == 2) {
        if (playerChoice == 'o') {
            makeX(60, 60, choiceSide, 'bright');
        } else {
            makeO(60, 60, choiceSide, 'bright');
        }
    }
    pop();
}

function checkWinner() {
    push();
    strokeWeight(2);
    stroke(200, 80, 10);
    translate(width / 2, height / 2);
    // top horizontal
    if (state[0] == 1 && state[1] == 1 && state[2] == 1) {
        line(-90, -60, 90, -60);
        winner = 'player';
        console.log('player won');
    } else if (state[0] == 2 && state[1] == 2 && state[2] == 2) {
        line(-90, -60, 90, -60);
        winner = 'bot';
        console.log('bot won');
    }
    // center horizontal
    if (state[3] == 1 && state[4] == 1 && state[5] == 1) {
        line(-90, 0, 90, 0);
        winner = 'player';
        console.log('player won');
    } else if (state[3] == 2 && state[4] == 2 && state[5] == 2) {
        line(-90, 0, 90, 0);
        winner = 'bot';
        console.log('bot won');
    }
    // bottom horizontal
    if (state[6] == 1 && state[7] == 1 && state[8] == 1) {
        line(-90, 60, 90, 60);
        winner = 'player';
        console.log('player won');
    } else if (state[6] == 2 && state[7] == 2 && state[8] == 2) {
        line(-90, 60, 90, 60);
        winner = 'bot';
        console.log('bot won');
    }
    // left vertical
    if (state[0] == 1 && state[3] == 1 && state[6] == 1) {
        line(-60, -90, -60, 90);
        winner = 'player';
        console.log('player won');
    } else if (state[0] == 2 && state[3] == 2 && state[6] == 2) {
        line(-60, -90, -60, 90);
        winner = 'bot';
        console.log('bot won');
    }
    // center vertical
    if (state[1] == 1 && state[4] == 1 && state[7] == 1) {
        line(0, -90, 0, 90);
        winner = 'player';
        console.log('player won');
    } else if (state[1] == 2 && state[4] == 2 && state[7] == 2) {
        line(0, -90, 0, 90);
        winner = 'bot';
        console.log('bot won');
    }
    // right vertical
    if (state[2] == 1 && state[5] == 1 && state[8] == 1) {
        line(60, -90, 60, 90);
        winner = 'player';
        console.log('player won');
    } else if (state[2] == 2 && state[5] == 2 && state[8] == 2) {
        line(60, -90, 60, 90);
        winner = 'bot';
        console.log('bot won');
    }
    // left-top right-bottom
    if (state[0] == 1 && state[4] == 1 && state[8] == 1) {
        line(-90, -90, 90, 90);
        winner = 'player';
        console.log('player won');
    } else if (state[0] == 2 && state[4] == 2 && state[8] == 2) {
        line(-90, -90, 90, 90);
        winner = 'bot';
        console.log('bot won');
    }
    // right-top left-bottom
    if (state[2] == 1 && state[4] == 1 && state[6] == 1) {
        line(-90, 90, 90, -90);
        winner = 'player';
        console.log('player won');
    } else if (state[2] == 2 && state[4] == 2 && state[6] == 2) {
        line(-90, 90, 90, -90);
        winner = 'bot';
        console.log('bot won');
    }
    pop();
    if (winner == 'player' || winner == 'bot') {
        gameEnded = true;
    }
}

function showYourSymbol() {
    push();
    fill(200, 200, 200);
    rect(60, 60, choiceSide, choiceSide);
    if (playerChoice == 'o') {
        makeO(90, 90, choiceSide, 'dark');
    } else {
        makeX(90, 90, choiceSide, 'dark');
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
    makeO(width / 2 - 10 - choiceSide + choiceSide / 2, choiceStartY + choiceSide / 2, choiceSide, 'dark');
    makeX(width / 2 + 10 + choiceSide / 2, choiceStartY + choiceSide / 2, choiceSide, 'dark');
    if (hover) {
        fill(200, 200, 200);
        if (over == 'o') {
            rect(width / 2 - 10 - choiceSide, choiceStartY, choiceSide, choiceSide);
            makeO(width / 2 - 10 - choiceSide + choiceSide / 2, choiceStartY + choiceSide / 2, choiceSide, 'dark');
        } else if (over == 'x') {
            rect(width / 2 + 10, choiceStartY, choiceSide, choiceSide);
            makeX(width / 2 + 10 + choiceSide / 2, choiceStartY + choiceSide / 2, choiceSide, 'dark');
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

function makeO(x, y, size, mode) {
    push();
    translate(x, y);
    noFill();
    strokeWeight(4);
    if (mode == 'bright') {
        stroke(220, 220, 220);
    } else if (mode == 'dark') {
        stroke(20, 20, 20);
    }
    ellipse(0, 0, size * 0.6);
    pop();
}

function makeX(x, y, size, mode) {
    push();
    translate(x, y);
    strokeWeight(4);
    if (mode == 'bright') {
        stroke(220, 220, 220);
    } else if (mode == 'dark') {
        stroke(20, 20, 20);
    }
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
            if (playerTurn && timeToMove) {
                if (mouseX > width / 2 - 90 && mouseX < width / 2 - 30 &&
                    mouseY > height / 2 - 90 && mouseY < height / 2 - 30 &&
                    state[0] == 0) {
                    index = 0;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 30 && mouseX < width / 2 + 30 &&
                    mouseY > height / 2 - 90 && mouseY < height / 2 - 30 &&
                    state[1] == 0) {
                    index = 1;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 + 30 && mouseX < width / 2 + 90 &&
                    mouseY > height / 2 - 90 && mouseY < height / 2 - 30 &&
                    state[2] == 0) {
                    index = 2;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 90 && mouseX < width / 2 - 30 &&
                    mouseY > height / 2 - 30 && mouseY < height / 2 + 30 &&
                    state[3] == 0) {
                    index = 3;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 30 && mouseX < width / 2 + 30 &&
                    mouseY > height / 2 - 30 && mouseY < height / 2 + 30 &&
                    state[4] == 0) {
                    index = 4;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 + 30 && mouseX < width / 2 + 90 &&
                    mouseY > height / 2 - 30 && mouseY < height / 2 + 30 &&
                    state[5] == 0) {
                    index = 5;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 90 && mouseX < width / 2 - 30 &&
                    mouseY > height / 2 + 30 && mouseY < height / 2 + 90 &&
                    state[6] == 0) {
                    index = 6;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 - 30 && mouseX < width / 2 + 30 &&
                    mouseY > height / 2 + 30 && mouseY < height / 2 + 90 &&
                    state[7] == 0) {
                    index = 7;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                } else if (mouseX > width / 2 + 30 && mouseX < width / 2 + 90 &&
                    mouseY > height / 2 + 30 && mouseY < height / 2 + 90 &&
                    state[8] == 0) {
                    index = 8;
                    state[index] = 1;
                    playerTurn = false;
                    timeToMove = false;
                    deleteFromIndexList(index);
                }
            }
        }
    }
}

function deleteFromIndexList(index) {
    for (let i = 0; i < indexList.length; i++) {
        if (indexList[i] == index) {
            indexList.splice(i, 1);
        }
    }
}

function botMakeTurn() {
    let turnIndex = getRandomInt(indexList.length - 1);
    let turnValue = indexList[turnIndex];
    state[turnValue] = 2;
    deleteFromIndexList(turnValue);
    timeToMove = true;
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
        setTimeout(botMakeTurn, 1000);
        playerTurn = true;
    }
}