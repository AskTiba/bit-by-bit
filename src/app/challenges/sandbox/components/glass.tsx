"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

type GlassChessCardProps = {
  name: string;
  title: string;
  flag: string;
  profilePhotoUrl: string | StaticImageData;
  fideRating: { standard: number; rapid: number; blitz: number };
  attributes: {
    tactics: number;
    speed: number;
    accuracy: number;
    opening: number;
    middlegame: number;
    endgame: number;
  };
};

const GlassChessCard: React.FC<GlassChessCardProps> = ({
  name,
  title,
  flag,
  profilePhotoUrl,
  fideRating,
  attributes: { tactics, speed, accuracy, opening, middlegame, endgame },
}) => {
  return (
    <div className="relative w-80 p-4 rounded-xl bg-black/50 backdrop-blur-md shadow-xl ring-2 ring-white/10 text-white font-sans">
      {/* Profile Image */}
      <div className="w-24 h-24 mx-auto -mt-12 rounded-full overflow-hidden border-4 border-white/30 bg-white">
        <Image
          src={profilePhotoUrl}
          alt={`${name} profile`}
          width={96}
          height={96}
          className="object-cover"
        />
      </div>

      {/* Header */}
      <div className="mt-2 text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm uppercase tracking-wide">{title}</p>
        <p className="text-2xl mt-1">{flag}</p>
      </div>

      {/* Ratings */}
      <div className="mt-4 grid grid-cols-3 text-center text-xs font-medium text-white/90">
        <div>
          <p>STD</p>
          <p className="text-lg font-semibold">{fideRating.standard}</p>
        </div>
        <div>
          <p>RAP</p>
          <p className="text-lg font-semibold">{fideRating.rapid}</p>
        </div>
        <div>
          <p>BLZ</p>
          <p className="text-lg font-semibold">{fideRating.blitz}</p>
        </div>
      </div>

      {/* Key Attributes Block (6 across) */}
      <div className="mt-5 grid grid-cols-6 gap-2 text-center text-white/90">
        {[
          { label: "TAC", value: tactics },
          { label: "SPD", value: speed },
          { label: "ACC", value: accuracy },
          { label: "OPN", value: opening },
          { label: "MID", value: middlegame },
          { label: "END", value: endgame },
        ].map((attr, index) => (
          <div key={index}>
            <p className="text-xs">{attr.label}</p>
            <p className="text-sm font-bold">{attr.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassChessCard;
