"use client";

import React, { JSX, useState } from "react";
import Cross from "./components/Cross";
import Naught from "./components/Naught";
import Redo from "./components/Redo";

const squares = Array.from({ length: 9 }, (_, i) => i + 1); // valid 1-9

const TicTacToe = () => {
  const [board, setBoard] = useState<(JSX.Element | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);

  const handlePlay = (index: number) => {
    if (board[index]) return;

    const updatedBoard = [...board];
    updatedBoard[index] = xIsNext ? (
      <div className="">
        <Cross color="#a2d2ff" />
      </div>
    ) : (
      <div className="">
        <Naught color="#ffd700" />
      </div>
    );

    setBoard(updatedBoard);
    setXIsNext(!xIsNext);
  };

  return (
    <main className="max-h-screen flex flex-col justify-center items-center min-h-screen bg-black/80">
      {/* Top Section Grid (Now uses buttons instead of divs) */}
      <section className="grid grid-cols-3 text-sm font-semibold gap-6 mb-3">
        <button
          type="button"
          className="w-20 bg-[#403d39] rounded-sm flex items-center gap-1 justify-center"
        >
          <div className="">
            <Cross color="#a2d2ff" />
          </div>
          <div className="">
            <Naught color="#ffd700" />
          </div>
        </button>
        <button
          type="button"
          className="w-20 bg-[#403d39] rounded-sm text-center flex items-center gap-1 justify-center"
        >
          <div className="">
            <Naught color="#ffd700" />
          </div>
          <span className="text-[#96abb5] ">TURN</span>
        </button>
        <button
          type="button"
          className="w-20 bg-[#96abb5] inline-flex rounded-sm justify-center items-center place-items-end"
        >
          <div className="py-2">
            <Redo width={20} height={20} strokeWidth={10} />
          </div>
        </button>
      </section>

      {/* Game Board */}
      <div className="grid grid-cols-3">
        {squares.map((index) => (
          <div className="text-white font-semibold text-2xl p-3" key={index}>
            <button
              onClick={() => handlePlay(index)}
              className="size-20 cursor-pointer bg-[#403d39] flex items-center justify-center rounded-sm"
            >
              {board[index]}
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Section Grid (Also uses buttons now) */}
      <section className="grid grid-cols-3 text-sm font-semibold gap-6 mt-3">
        <button
          type="button"
          className="w-20 px-5 py-1 bg-[#a2d2ff] rounded-sm text-center"
        >
          <h3>X(YOU)</h3>
          <span>14</span>
        </button>
        <button
          type="button"
          className="w-20 px-5 py-1 bg-[#96abb5] rounded-sm text-center"
        >
          <h3>X(YOU)</h3>
          <span>14</span>
        </button>
        <button
          type="button"
          className="w-20 py-1 bg-amber-300 rounded-sm text-center"
        >
          <h3>X(YOU)</h3>
          <span>14</span>
        </button>
      </section>
    </main>
  );
};

export default TicTacToe;
