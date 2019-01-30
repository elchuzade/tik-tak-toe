let state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let choiceSide = 60;
let choiceStartY = 100;
let playerChoice = 'o'; // can be 'x' or 'o'
let botChoice = determineBotChoice(playerChoice);
let hover = false;
let over = 'o';

function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(0);
    hoverChoice();
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
    // make 1 to the place a player clicked at
}

function makeX(x, y, size) {
    push();
    translate(x, y);
    strokeWeight(4);
    stroke(20, 20, 20);
    line(-size * 0.3, -size * 0.3, size * 0.3, size * 0.3);
    line(-size * 0.3, size * 0.3, size * 0.3, -size * 0.3);
    pop();
    // make 1 to the place a player clicked at
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