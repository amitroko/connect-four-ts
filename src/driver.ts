import { exit } from "process";
import ConnectFourGame from "./ConnectFourGame";
const prompt = require('prompt-sync')({sigint: true});

let connectFourGame = new ConnectFourGame();
connectFourGame.printBoard();

while (true) {
    if (connectFourGame.turn > connectFourGame.height * connectFourGame.width) {
        console.log("The game ends in a draw.");
        exit(0);
    }
    const col: any = prompt(`Turn ${connectFourGame.turn}: Player ${connectFourGame.turn % 2 === 1 ? 1 : 2}, select a column. `);
    if (col === '' || isNaN(col) || parseInt(col) < 1 || parseInt(col) > connectFourGame.width) {
        console.log(`Invalid entry. Please enter a number between 1 and ${connectFourGame.width}.`);
    }
    else if (connectFourGame.heights[parseInt(col) - 1] === connectFourGame.height) {
        console.log("This column is full.");
    }
    else {
        connectFourGame.addPiece(parseInt(col));
        if (connectFourGame.checkWin()) {
            connectFourGame.printBoard();
            console.log(`Player ${connectFourGame.turn % 2 === 1 ? 1 : 2} wins!`);
            exit(0);
        }
        connectFourGame.incrementTurn();
        connectFourGame.printBoard();
    }
}