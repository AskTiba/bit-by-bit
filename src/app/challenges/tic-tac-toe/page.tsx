"use client";

import React, { JSX, useState } from "react";
import Cross from "./components/Cross";

type Props = {};

// const squares = [...Array<number[]>(9).keys()].map((i) => i + 1);
const squares = Array.from({ length: 9 }, (_, i) => i + 1); // valid 1-9

const TicTacToe = (props: Props) => {
  const [board, setBoard] = useState<(JSX.Element | null)[]>(
    Array(9).fill(null)
  );
  const [likes, setLikes] = React.useState(0);

  // Update specific square with "X" when clicked
  const handlePlay = (index: number) => {
    // If square already filled, do nothing
    if (board[index]) return;

    const updatedBoard = [...board]; // create a copy
    updatedBoard[index] = <Cross color="#ffd700" />; // mark clicked square
    setBoard(updatedBoard); // update state
  };

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <main className="max-h-screen flex flex-col justify-center items-center min-h-screen bg-black/80">
      <div className="grid grid-cols-3">
        {squares.map((index) => {
          return (
            <div className=" text-white font-semibold text-2xl p-3" key={index}>
              <button
                onClick={() => handlePlay(index)}
                className=" size-20 cursor-pointer bg-[#403d39] flex items-center justify-center rounded-sm"
              >
                {board[index]}
              </button>
            </div>
          );
        })}
      </div>
      <button
        className="bg-purple-600 w-20 rounded-sm px-3 py-1 mt-3"
        onClick={handleLikes}
      >
        Like ({likes})
      </button>

      {/* <section className="grid grid-cols-3 text-sm font-semibold gap-6 mt-5">
        <div className="w-20 px-5 py-1 bg-green-300 rounded-sm text-center">
          <h3 className="">X(YOU)</h3>
          <span className="">14</span>
        </div>
        <div className="w-20 px-5 py-1 bg-white rounded-sm text-center">
          <h3 className="">X(YOU)</h3>
          <span className="">14</span>
        </div>
        <div className="w-20 py-1 bg-amber-300 rounded-sm text-center">
          <h3 className="">X(YOU)</h3>
          <span className="">14</span>
        </div>

        
      </section> */}
    </main>
  );
};

export default TicTacToe;
