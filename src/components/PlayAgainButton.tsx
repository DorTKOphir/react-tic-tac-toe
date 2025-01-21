interface PlayAgainButtonProps {
  resetGame: () => void;
}

const PlayAgainButton = ({ resetGame }: PlayAgainButtonProps) => {
  return (
    <button
      onClick={resetGame}
      className="mt-4 p-2 bg-blue-500 text-white rounded"
    >
      Play Again
    </button>
  );
};

export default PlayAgainButton;
