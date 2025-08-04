import { useState, useCallback } from 'react';

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState({ state: 'playing' });

  const checkWinner = useCallback((newBoard) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return {
          state: 'won',
          winner: newBoard[a],
          winningLine: combination
        };
      }
    }
    if (newBoard.every(cell => cell !== null)) {
      return { state: 'draw' };
    }
    return { state: 'playing' };
  }, []);

  const handleCellClick = useCallback((index) => {
    if (board[index] || gameStatus.state !== 'playing') return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newGameStatus = checkWinner(newBoard);
    setGameStatus(newGameStatus);

    if (newGameStatus.state === 'playing') {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }, [board, currentPlayer, gameStatus.state, checkWinner]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus({ state: 'playing' });
  }, []);

  const getStatusMessage = () => {
    if (gameStatus.state === 'won') {
      return `🎉 Player ${gameStatus.winner} wins!`;
    }
    if (gameStatus.state === 'draw') {
      return `🤝 It's a draw!`;
    }
    return `Player ${currentPlayer}'s turn`;
  };

  const isCellWinning = (index) => {
    return gameStatus.winningLine?.includes(index) || false;
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/abstract-fire-ice-element-against-vs-each-other-background-heat-cold-concept_1071931-34516.avif')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 animate-float">
            Tic Tac Toe
          </h1>
          <div className={`text-xl font-semibold p-3 rounded-xl transition-all duration-300 ${
            gameStatus.state === 'won' 
              ? 'text-game-winner-glow animate-pulse-winner bg-game-winner-glow/10' 
              : gameStatus.state === 'draw'
              ? 'text-muted-foreground bg-muted/50'
              : 'text-foreground bg-primary/10'
          }`}>
            {getStatusMessage()}
          </div>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-game-grid/30">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleCellClick(index)}
              disabled={cell !== null || gameStatus.state !== 'playing'}
              className={`
                relative h-20 w-20 rounded-xl font-bold text-3xl
                transition-all duration-300 transform
                ${cell === null && gameStatus.state === 'playing' 
                  ? 'hover:scale-105 hover:shadow-lg cursor-pointer bg-white hover:bg-game-cell-hover' 
                  : 'cursor-not-allowed'
                }
                ${isCellWinning(index) 
                  ? 'animate-pulse-winner bg-game-winner-glow/20 scale-105' 
                  : cell === null 
                  ? 'bg-white shadow-sm' 
                  : 'bg-white/90'
                }
                disabled:transform-none
              `}
              style={{
                background: cell === null ? 'var(--gradient-cell)' : undefined,
                boxShadow: cell === null ? 'var(--shadow-cell)' : undefined
              }}
            >
              {cell && (
                <span
                  className={`
                    inline-block animate-bounce-in font-extrabold
                    ${cell === 'X' ? 'text-game-player-x' : 'text-game-player-o'}
                    ${isCellWinning(index) ? 'drop-shadow-lg' : ''}
                  `}
                >
                  {cell}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4">
          {/* Replace Button with button */}
          <button
            onClick={resetGame}
            type="button"
            className="w-full bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary font-semibold transition-all duration-300 hover:scale-105 rounded-xl py-3 text-lg"
            style={{ border: '1px solid var(--primary, #646cff)' }}
          >
            🔄 New Game
          </button>
          
          {gameStatus.state !== 'playing' && (
            <div className="text-center text-sm text-muted-foreground animate-float">
              Click "New Game" to play again!
            </div>
          )}
        </div>

        {/* Game Stats */}
        <div className="mt-6 text-center">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-2 rounded-lg bg-game-player-x/10">
              <div className="font-semibold text-game-player-x">Player X</div>
              <div className="text-xs text-muted-foreground">Goes First</div>
            </div>
            <div className="p-2 rounded-lg bg-game-player-o/10">
              <div className="font-semibold text-game-player-o">Player O</div>
              <div className="text-xs text-muted-foreground">Goes Second</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}