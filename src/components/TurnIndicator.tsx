import X_IMAGE from '../assets/x.png'; // Replace with actual image path
import O_IMAGE from '../assets/o.png';

interface TurnIndicatorProps {
  currentTurn: 'X' | 'O';
}

const TurnIndicator = ({ currentTurn }: TurnIndicatorProps) => {
  return (
    <div className="flex mt-4 gap-2 items-center">
      <img
        src={currentTurn === 'X' ? X_IMAGE : O_IMAGE}
        alt={currentTurn}
        className="w-10 h-10"
      />
      <h1 className="text-2xl">Plays</h1>
    </div>
  );
};

export default TurnIndicator;
