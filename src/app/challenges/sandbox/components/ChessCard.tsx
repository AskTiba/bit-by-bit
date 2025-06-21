"use client";

import React from "react";
import sassie from "../assets/images/sassie.png";
import GlassChessCard from "./glass";

const ChessCard = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-6">
      <GlassChessCard
        name="Driciru Sandra Olivia"
        title="WCM"
        flag="🇺🇬"
        profilePhotoUrl={sassie}
        fideRating={{ standard: 2850, rapid: 2800, blitz: 2900 }}
        attributes={{
          tactics: 92,
          speed: 88,
          accuracy: 90,
          opening: 85,
          middlegame: 95,
          endgame: 89,
        }}
      />
    </main>
  );
};

export default ChessCard;
