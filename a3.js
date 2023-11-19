/* Course: SENG 513 */
/* Date: NOV 18, 2023 */
/* Assignment 3 */
/* Name: Angi Shi */
/* UCID: 30117768 */


// Constants
const PLAYER1 = 'Player 1';
const PLAYER2 = 'Player 2';

// Variables
let currentPlayer;
let p1score = 0;
let p2score = 0;
let squareRemaining = 16;

const player1score = document.getElementById('p1score');
const player2score = document.getElementById('p2score');
player1score.textContent = p1score;
player2score.textContent = p2score;

function goToPage(page) {
    window.location.href = page;
}

function drawLine(id) {
    const element = document.getElementById(id);
    if (currentPlayer === PLAYER1) {element.style.backgroundColor = 'red';}
    else {element.style.backgroundColor = 'blue';}
}

function detectSquareVertical(id) {
    let isSquare = false;
    const coordinates = id.split('_').slice(1);
    const [x,y] = coordinates.map(c => parseInt(c));
    console.log([x,y]);
    if (x < 5) {
        const rightTop = document.getElementById("h_" + x + "_" + (x+10));
        const right = document.getElementById("v_" + (x+10) + "_" + (y+10));
        const rightBottom = document.getElementById("h_" + y + "_" + (y+10));

        const rtColor = window.getComputedStyle(rightTop).backgroundColor;
        const rColor = window.getComputedStyle(right).backgroundColor;
        const rbColor = window.getComputedStyle(rightBottom).backgroundColor;
        
        if (rtColor  !== 'rgb(211, 211, 211)' &&
            rColor !== 'rgb(211, 211, 211)' &&
            rbColor !== 'rgb(211, 211, 211)') {
                squareRemaining = squareRemaining-1;
                const square = document.getElementById("s_" + ((Math.floor(y/10)+1)) + "_" + (x%10));
                if (currentPlayer === PLAYER1) {square.style.backgroundColor = '#FF7F7F';}
                else {square.style.backgroundColor = 'skyblue';}
                isSquare = true;
                if (currentPlayer === PLAYER1) {
                    p1score = p1score+1;
                    player1score.textContent = p1score;
                }
                else {
                    p2score = p2score+1;
                    player2score.textContent = p2score;
                }
        }
    }
    else if (x > 40) {
        const leftTop = document.getElementById("h_" + (x-10) + "_" + x);
        const left = document.getElementById("v_" + (x-10) + "_" + (y-10));
        const leftBottom = document.getElementById("h_" + (y-10) + "_" + y);

        const ltColor = window.getComputedStyle(leftTop).backgroundColor;
        const lColor = window.getComputedStyle(left).backgroundColor;
        const lbColor = window.getComputedStyle(leftBottom).backgroundColor;

        if (ltColor  !== 'rgb(211, 211, 211)' &&
            lColor !== 'rgb(211, 211, 211)' &&
            lbColor !== 'rgb(211, 211, 211)') {
                squareRemaining = squareRemaining-1;
                const square = document.getElementById("s_" + (Math.floor(y/10)) + "_" + (x%10));
                if (currentPlayer === PLAYER1) {square.style.backgroundColor = '#FF7F7F';}
                else {square.style.backgroundColor = 'skyblue';}
                isSquare = true;
                if (currentPlayer === PLAYER1) {
                    p1score = p1score+1;
                    player1score.textContent = p1score;
                }
                else {
                    p2score = p2score+1;
                    player2score.textContent = p2score;
                }
        }
    }
    else {
        const rightTop = document.getElementById("h_" + x + "_" + (x+10));
        const right = document.getElementById("v_" + (x+10) + "_" + (y+10));
        const rightBottom = document.getElementById("h_" + y + "_" + (y+10));

        const rtColor = window.getComputedStyle(rightTop).backgroundColor;
        const rColor = window.getComputedStyle(right).backgroundColor;
        const rbColor = window.getComputedStyle(rightBottom).backgroundColor;

        const leftTop = document.getElementById("h_" + (x-10) + "_" + x);
        const left = document.getElementById("v_" + (x-10) + "_" + (y-10));
        const leftBottom = document.getElementById("h_" + (y-10) + "_" + y);

        const ltColor = window.getComputedStyle(leftTop).backgroundColor;
        const lColor = window.getComputedStyle(left).backgroundColor;
        const lbColor = window.getComputedStyle(leftBottom).backgroundColor;

        if (rtColor  !== 'rgb(211, 211, 211)' &&
            rColor !== 'rgb(211, 211, 211)' &&
            rbColor !== 'rgb(211, 211, 211)') {
                squareRemaining = squareRemaining-1;
                const square = document.getElementById("s_" + ((Math.floor(y/10)+1)) + "_" + (x%10));
                if (currentPlayer === PLAYER1) {square.style.backgroundColor = '#FF7F7F';}
                else {square.style.backgroundColor = 'skyblue';}
                isSquare = true;
                if (currentPlayer === PLAYER1) {
                    p1score = p1score+1;
                    player1score.textContent = p1score;
                }
                else {
                    p2score = p2score+1;
                    player2score.textContent = p2score;
                }
        }
        if (ltColor  !== 'rgb(211, 211, 211)' &&
            lColor !== 'rgb(211, 211, 211)' &&
            lbColor !== 'rgb(211, 211, 211)') {
                squareRemaining = squareRemaining-1;
                const square = document.getElementById("s_" + (Math.floor(y/10)) + "_" + (x%10));
                console.log("s_" + (Math.floor(y/10)) + "_" + (x%10));
                if (currentPlayer === PLAYER1) {square.style.backgroundColor = '#FF7F7F';}
                else {square.style.backgroundColor = 'skyblue';}
                isSquare = true;
                if (currentPlayer === PLAYER1) {
                    p1score = p1score+1;
                    player1score.textContent = p1score;
                }
                else {
                    p2score = p2score+1;
                    player2score.textContent = p2score;
                }
        }
    }
    return isSquare;
}

function detectSquareHorizontal(id) {
    let isSquare = false;
    const coordinates = id.split('_').slice(1);
    const [x,y] = coordinates.map(c => parseInt(c));
    if (x%10 === 4) {
        const bottomLeft = document.getElementById("v_" + x + "_" + (x-1));
        const bottom = document.getElementById("h_" + (x-1) + "_" + (y-1));
        const bottomRight = document.getElementById("v_" + y + "_" + (y-1));

        const blColor = window.getComputedStyle(bottomLeft).backgroundColor;
        const bColor = window.getComputedStyle(bottom).backgroundColor;
        const brColor = window.getComputedStyle(bottomRight).backgroundColor;
        
        if (blColor  !== 'rgb(211, 211, 211)' &&
            bColor !== 'rgb(211, 211, 211)' &&
            brColor !== 'rgb(211, 211, 211)') {
                squareRemaining = squareRemaining-1;
                const square = document.getElementById("s_" + ((Math.floor(y/10))) + "_" + (y%10));
                if (currentPlayer === PLAYER1) {square.style.backgroundColor = '#FF7F7F';}
                else {square.style.backgroundColor = 'skyblue';}
                isSquare = true;
                if (currentPlayer === PLAYER1) {
                    p1score = p1score+1;
                    player1score.textContent = p1score;
                }
                else {
                    p2score = p2score+1;
                    player2score.textContent = p2score;
                }
        }
    }
    else if (x%10 === 0) {
        const topLeft = document.getElementById("v_" + (x+1) + "_" + x);
        const top = document.getElementById("h_" + (x+1) + "_" + (y+1));
        const topRight = document.getElementById("v_" + (y+1) + "_" + y);

        const tlColor = window.getComputedStyle(topLeft).backgroundColor;
        const tColor = window.getComputedStyle(top).backgroundColor;
        const trColor = window.getComputedStyle(topRight).backgroundColor;
        
        if (tlColor  !== 'rgb(211, 211, 211)' &&
            tColor !== 'rgb(211, 211, 211)' &&
            trColor !== 'rgb(211, 211, 211)') {
                squareRemaining = squareRemaining-1;
                const square = document.getElementById("s_" + ((Math.floor(y/10))) + "_" + ((y%10)+1));
                if (currentPlayer === PLAYER1) {square.style.backgroundColor = '#FF7F7F';}
                else {square.style.backgroundColor = 'skyblue';}
                isSquare = true;
                if (currentPlayer === PLAYER1) {
                    p1score = p1score+1;
                    player1score.textContent = p1score;
                }
                else {
                    p2score = p2score+1;
                    player2score.textContent = p2score;
                }
        }
    }
    else {
        const bottomLeft = document.getElementById("v_" + x + "_" + (x-1));
        const bottom = document.getElementById("h_" + (x-1) + "_" + (y-1));
        const bottomRight = document.getElementById("v_" + y + "_" + (y-1));

        const blColor = window.getComputedStyle(bottomLeft).backgroundColor;
        const bColor = window.getComputedStyle(bottom).backgroundColor;
        const brColor = window.getComputedStyle(bottomRight).backgroundColor;

        const topLeft = document.getElementById("v_" + (x+1) + "_" + x);
        const top = document.getElementById("h_" + (x+1) + "_" + (y+1));
        const topRight = document.getElementById("v_" + (y+1) + "_" + y);

        const tlColor = window.getComputedStyle(topLeft).backgroundColor;
        const tColor = window.getComputedStyle(top).backgroundColor;
        const trColor = window.getComputedStyle(topRight).backgroundColor;

        if (blColor !== 'rgb(211, 211, 211)' &&
            bColor !== 'rgb(211, 211, 211)' &&
            brColor !== 'rgb(211, 211, 211)'){
                squareRemaining = squareRemaining-1;
                const square = document.getElementById("s_" + ((Math.floor(y/10))) + "_" + (y%10));
                if (currentPlayer === PLAYER1) {square.style.backgroundColor = '#FF7F7F';}
                else {square.style.backgroundColor = 'skyblue';}
                isSquare = true;
                if (currentPlayer === PLAYER1) {
                    p1score = p1score+1;
                    player1score.textContent = p1score;
                }
                else {
                    p2score = p2score+1;
                    player2score.textContent = p2score;
                }
        }
        if (tlColor  !== 'rgb(211, 211, 211)' &&
            tColor !== 'rgb(211, 211, 211)' &&
            trColor !== 'rgb(211, 211, 211)') {
                squareRemaining = squareRemaining-1;
                const square = document.getElementById("s_" + ((Math.floor(y/10))) + "_" + ((y%10)+1));
                if (currentPlayer === PLAYER1) {square.style.backgroundColor = '#FF7F7F';}
                else {square.style.backgroundColor = 'skyblue';}
                isSquare = true;
                if (currentPlayer === PLAYER1) {
                    p1score = p1score+1;
                    player1score.textContent = p1score;
                }
                else {
                    p2score = p2score+1;
                    player2score.textContent = p2score;
                }
        }
    }
    return(isSquare);
}

function switchPlayer() {
    if (currentPlayer == PLAYER1) {currentPlayer = PLAYER2;}
    else {currentPlayer = PLAYER1;}
}



document.addEventListener('DOMContentLoaded', function() {
    // Randomly select a player to start
    const randomNum = Math.floor(Math.random() * 2) + 1; // from chatGPT to generate a random  number betwwen 1 and 2
    if (randomNum === 1) {currentPlayer = PLAYER1}
    else {currentPlayer = PLAYER2}
    const p1turn = document.getElementById('p1turn');
    const p2turn = document.getElementById('p2turn');
    if (currentPlayer == PLAYER1) {
        p1turn.style.display = 'block';
        p2turn.style.display = 'none';
        p1win.style.display = 'none';
        p2win.style.display = 'none';
        tie.style.display = 'none';
    } else {
        p1turn.style.display = 'none';
        p2turn.style.display = 'block';
        p1win.style.display = 'none';
        p2win.style.display = 'none';
        tie.style.display = 'none';
    }
    const verticalLines = document.querySelectorAll('.vertical-line');
    const horizontalLines = document.querySelectorAll('.horizontal-line');

    // Add click event listeners for vertical lines
    verticalLines.forEach(line => {
        line.addEventListener('click', function() {
            console.log(p1score);
            console.log(p2score);
            const element = document.getElementById(line.id);
            var computedStyle = window.getComputedStyle(element);
            var backgroundColor = computedStyle.backgroundColor;
            if (backgroundColor === 'rgb(211, 211, 211)') {
                drawLine(line.id);
                if (detectSquareVertical(line.id) === false) {
                    switchPlayer();
                }
            }
            if (currentPlayer == PLAYER1) {
                p1turn.style.display = 'block';
                p2turn.style.display = 'none';
                p1win.style.display = 'none';
                p2win.style.display = 'none';
                tie.style.display = 'none';
            } else {
                p1turn.style.display = 'none';
                p2turn.style.display = 'block';
                p1win.style.display = 'none';
                p2win.style.display = 'none';
                tie.style.display = 'none';
            }
            if (squareRemaining === 0) {
                if (p1score > p2score) {
                    p1turn.style.display = 'none';
                    p2turn.style.display = 'none';
                    p1win.style.display = 'block';
                    p2win.style.display = 'none';
                    tie.style.display = 'none';
                } else if (p1score < p2score) {
                    p1turn.style.display = 'none';
                    p2turn.style.display = 'none';
                    p1win.style.display = 'none';
                    p2win.style.display = 'block';
                    tie.style.display = 'none';
                } else {
                    p1turn.style.display = 'none';
                    p2turn.style.display = 'none';
                    p1win.style.display = 'none';
                    p2win.style.display = 'none';
                    tie.style.display = 'block';
                }
            }
        });
    });

    // Add click event listeners for horizontal lines
    horizontalLines.forEach(line => {
        line.addEventListener('click', function() {
            console.log(p1score);
            console.log(p2score);
            const element = document.getElementById(line.id);
            var computedStyle = window.getComputedStyle(element);
            var backgroundColor = computedStyle.backgroundColor;
            if (backgroundColor === 'rgb(211, 211, 211)') {
                drawLine(line.id);
                if (detectSquareHorizontal(line.id) === false) {
                    switchPlayer();
                }
            }
            if (currentPlayer == PLAYER1) {
                p1turn.style.display = 'block';
                p2turn.style.display = 'none';
                p1win.style.display = 'none';
                p2win.style.display = 'none';
                tie.style.display = 'none';
            } else {
                p1turn.style.display = 'none';
                p2turn.style.display = 'block';
                p1win.style.display = 'none';
                p2win.style.display = 'none';
                tie.style.display = 'none';
            }
            if (squareRemaining === 0) {
                if (p1score > p2score) {
                    p1turn.style.display = 'none';
                    p2turn.style.display = 'none';
                    p1win.style.display = 'block';
                    p2win.style.display = 'none';
                    tie.style.display = 'none';
                } else if (p1score < p2score) {
                    p1turn.style.display = 'none';
                    p2turn.style.display = 'none';
                    p1win.style.display = 'none';
                    p2win.style.display = 'block';
                    tie.style.display = 'none';
                } else {
                    p1turn.style.display = 'none';
                    p2turn.style.display = 'none';
                    p1win.style.display = 'none';
                    p2win.style.display = 'none';
                    tie.style.display = 'block';
                }
            }

        });
    });
});
