import Board from './components/Board';
import PlayAgainButton from './components/PlayAgainButton';
import TurnIndicator from './components/TurnIndicator';

function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
      <Board
        board={Array(3).fill(Array(3).fill(null))}
        handleClick={(index: number) => {}}
      />
      <TurnIndicator currentTurn="O" />
      <PlayAgainButton resetGame={() => {}} />
    </div>
  );
}

export default App;
