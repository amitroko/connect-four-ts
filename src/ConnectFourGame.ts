export default class ConnectFourGame {
    width: number = 7;
    height: number = 6;
    turn: number = 1;

    board: string[][] = new Array(this.height).fill('_')
                            .map(() => Array(this.width).fill('_'));

    // keep track of the height of the pieces in each column
    heights: number[] = new Array(this.width).fill(0);

    // print the board
    printBoard(): void {
        function range(start: number, end: number) {
            return Array(end - start + 1).fill(0).map((_, idx) => start + idx)
        }
        console.log(...range(1, this.width));
        for (let i: number = 0; i < this.height; i++) {
            console.log(...this.board[i]);
        }
    }

    incrementTurn(): void {
        this.turn++;
    }

    // add a piece to comumn col
    addPiece(col: number): void {
        const symbol: string = this.turn % 2 === 1 ? 'x' : 'o';
        this.board[this.height - 1 - this.heights[col - 1]][col - 1] = symbol;
        this.heights[col - 1]++;
    }

    // check if there is a four-in-a-row on the board
    checkWin(): boolean {
        const symbol: string = this.turn % 2 === 1 ? 'x' : 'o';
        // horizontal check
        for (let i: number = 0; i < this.height; i++) {
            for (let j: number = 0; j < this.width - 3; j++) {
                if (this.board[i][j] === symbol && this.board[i][j + 1] === symbol
                    && this.board[i][j + 2] === symbol && this.board[i][j + 3] === symbol) {
                        return true;
                    }
            }
        }
        // vertical check
        for (let i: number = 0; i < this.width; i++) {
            for (let j: number = 0; j < this.height - 3; j++) {
                if (this.board[j][i] === symbol && this.board[j + 1][i] === symbol
                    && this.board[j + 2][i] === symbol && this.board[j + 3][i] === symbol) {
                        return true;
                }
            }
        }
        // ascending diagonal check
        for (let i: number = 3; i < this.height; i++) {
            for (let j: number = 0; j < this.width - 3; j++) {
                if (this.board[i][j] === symbol && this.board[i - 1][j + 1] === symbol
                    && this.board[i - 2][j + 2] === symbol && this.board[i - 3][j + 3] === symbol) {
                        return true;
                }
            }
        }
        // descending diagonal check
        for (let i: number = 0; i < this.height - 3; i++) {
            for (let j: number = 0; j < this.width - 3; j++) {
                if (this.board[i][j] === symbol && this.board[i + 1][j + 1] === symbol
                    && this.board[i + 2][j + 2] === symbol && this.board[i + 3][j + 3] === symbol) {
                        return true;
                }
            }
        }

        return false;
    }
}