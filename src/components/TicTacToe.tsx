import Board from './Board';
import PlayAgainButton from './PlayAgainButton';
import TurnIndicator from './TurnIndicator';
import useTicTacToeGameLogic from '../hooks/useTicTacToeGameLogic';

const TicTacToe = () => {
  const { board, nextPlayer, winner, isGameFinished, handleClick, resetGame } =
    useTicTacToeGameLogic();

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
      <Board board={board} handleClick={handleClick} />
      {isGameFinished && <p className="text-xl font-bold mt-4">{winner ? `${winner} won!` : 'Game over!'}</p>}
      {!isGameFinished && <TurnIndicator currentPlayer={nextPlayer} />}
      {isGameFinished && <PlayAgainButton resetGame={resetGame} />}
    </div>
  );
};

export default TicTacToe;