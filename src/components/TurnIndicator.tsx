import X_IMAGE from '../assets/x.png';
import O_IMAGE from '../assets/o.png';
import { Player } from '../types/player';

interface TurnIndicatorProps {
  currentPlayer: Player;
}

const TurnIndicator = ({ currentPlayer }: TurnIndicatorProps) => {
  return (
    <div className="flex mt-4 gap-2 items-center">
      <img
        src={currentPlayer === 'X' ? X_IMAGE : O_IMAGE}
        alt={currentPlayer}
        className="w-10 h-10"
      />
      <h1 className="text-2xl">Plays</h1>
    </div>
  );
};

export default TurnIndicator;