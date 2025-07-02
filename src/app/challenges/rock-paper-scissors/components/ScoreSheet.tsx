import React from "react";

const ScoreSheet = () => {
  return (
    <main className="">
      <section className="border border-white flex justify-between items-center p-4 rounded-md">
        <div className="flex flex-col font-extrabold text-xl leading-4">
          <span className="">Rock</span>
          <span className="">Paper</span>
          <span className="">Scissors</span>
        </div>
        <div className="bg-white size-20 flex flex-col justify-evenly rounded-sm pt-2 items-center text-2xl text-score-text">
          <h1 className="text-[10px] font-semibold uppercase">Score</h1>
          <span className="font-extrabold text-4xl">12</span>
        </div>
      </section>
    </main>
  );
};

export default ScoreSheet;
