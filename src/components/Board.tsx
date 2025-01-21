import X_IMAGE from '../assets/x.png';
import O_IMAGE from '../assets/o.png';
import { Player } from '../types/player';

type Cell = Player | null;

interface BoardProps {
  board: Cell[][];
  handleClick: (row: number, col: number) => void;
}

const Board = ({ board, handleClick }: BoardProps) => {
  return (
    <div className="grid grid-rows-3 gap-2 w-64">
      {board.map((row, rowIndex) => (
        <div key={`${rowIndex}:row`} className="grid grid-cols-3">
          {row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}:${colIndex}`}
              className="w-20 h-20 flex items-center justify-center bg-gray-200 border border-gray-500"
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {cell && (
                <img
                  src={cell === 'X' ? X_IMAGE : O_IMAGE}
                  alt={cell}
                  className="w-16 h-16"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
