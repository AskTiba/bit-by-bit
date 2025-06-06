import React from "react";

type Props = {};

const squares = [...Array<number[]>(9).keys()].map((i) => i + 1);

const TicTacToe = (props: Props) => {
  return (
    <main className="max-h-screen flex flex-col justify-center items-center min-h-screen bg-black/80">
      <div className="grid grid-cols-3">
        {squares.map((index) => {
          return (
            <div className=" text-white font-semibold text-2xl p-3" key={index}>
              <button className=" size-20 cursor-pointer bg-[#403d39] rounded-sm">
                {index}
              </button>
            </div>
          );
        })}
      </div>
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
