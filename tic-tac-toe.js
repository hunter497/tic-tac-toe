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

    const playLocation = (location, playerSymbol) => {
        gameBoard[location] = playerSymbol;
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
        
    }
    return {
        displayBoard,
    }
})();

// Player Factory
const Player = (name) => {
    const playX = location => {
        gameBoardModule.playLocation(location, 'X');
    }
    const playO = location => {
        gameBoardModule.playLocation(location, 'O');
    }

    return (name, playX, playO);
}

const init = () => {
    controlModule.resetBoard();
    displayModule.displayBoard();
}

// const gameLoop = (playerOne, playerTwo) => {
//     let winCondition = false;
//     while(winCondition == false) {

//     }
// }

init();