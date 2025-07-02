import React from "react";
import ScoreSheet from "./components/ScoreSheet";

const GamePage = () => {
  return (
    <main className="w-full h-full min-h-screen bg-gradient-to-b from-radial-gradient-from to-radial-gradient-to p-6">
      <ScoreSheet />
    </main>
  );
};

export default GamePage;
