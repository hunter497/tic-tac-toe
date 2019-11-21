// Gameboard Module
const gameBoardModule = (() => {
    let gameBoard = [];

    const initialSetup = () => {
        gameBoard.push('X');
        gameBoard.push('X');
        gameBoard.push('X');
        gameBoard.push('X');
        gameBoard.push('X');
        gameBoard.push('X');
        gameBoard.push('X');
        gameBoard.push('X');
        gameBoard.push('X');
    }

    const getGameStatus = () => {
        return gameBoard;
    }
    const checkWinStatus = () => {

    }
    return {
        initialSetup,
        getGameStatus,
    };
})();

// Control Flow Module
const controlModule = (() => {
    const resetBoard = () => {
        gameBoardModule.initialSetup();
    }
    return {
        resetBoard
    };
})();

// Display Module
const displayModule = (() => {
    const displayBoard = () => {
        const gameBoard = gameBoardModule.getGameStatus();
        console.log(gameBoard);
    }
    return {
        displayBoard,
    }
})();

// Player Factory
const Player = (name) => {
    return name;
}

const init = () => {
    controlModule.resetBoard();
    displayModule.displayBoard();
}

init();