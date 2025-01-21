import { useState } from 'react';
import { Player } from '../types/player';
import { Board } from '../types/board';

const STARTER_PLAYER: Player = 'X';

const useTicTacToeGameLogic = () => {
  const initialBoard: Board = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null));
  const [board, setBoard] = useState<Board>(initialBoard);
  const [nextPlayer, setNextPlayer] = useState<Player>(STARTER_PLAYER);
  const [winner, setWinner] = useState<Player | null>(null);

  const isBoardFull = (board: (string | null)[][]) => {
    return board.every(row => row.every(cell => cell !== null));
  };

  const isGameFinished = winner !== null || isBoardFull(board)

  const checkWinner = (board: Board) => {
    const size = board.length;

    for (let i = 0; i < size; i++) {
      if (board[i][0] && board[i].every((cell) => cell === board[i][0]))
        return board[i][0]; // Check rows
      if (board[0][i] && board.every((row) => row[i] === board[0][i]))
        return board[0][i]; // Check columns
    }

    if (board[0][0] && board.every((_, i) => board[i][i] === board[0][0]))
      return board[0][0]; // Check main diagonal
    if (
      board[0][size - 1] &&
      board.every((_, i) => board[i][size - 1 - i] === board[0][size - 1])
    )
      return board[0][size - 1]; // Check anti-diagonal

    return null;
  };

  const handleClick = (row: number, col: number) => {
    if (board[row][col] || winner) return;

    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? nextPlayer : cell))
    );
    setBoard(newBoard);
    setNextPlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setNextPlayer(STARTER_PLAYER);
    setWinner(null);
  };

  return { board, nextPlayer, winner, handleClick, resetGame, isGameFinished };
};

export default useTicTacToeGameLogic;