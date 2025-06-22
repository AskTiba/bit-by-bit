import React from "react";
import Image from "next/image";
import sassie from "../assets/images/stinner1.png";

// 🧠 Fun Profile Object (scalable + maintainable)
const funProfile = {
  name: "Driciru Sandra Olivia 🌊",
  title: "Certified Vibe Curator",
  quirks: [
    "Sips tea during checkmate",
    "Radiates awesome vibes  ",
    'Once named a pawn "Gregory"',
  ],
  catchphrase: "Stay chill, play thrill ♟️",
  favoriteMove: "Knight to f3, like a boss",
  hobbies: "Chess & Skateboarding",
  vibeScore: "Chaotic Genius: 93/100",
  moodEmojis: "🌀🎧🐸",
};

const Driso = () => {
  return (
    <main className="bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400">
      <div className="flex justify-center bg-neutral-400/40 backdrop-blur-[1px] items-center h-screen">
        <div className="flex rounded-md">
          {/* 📸 Image Left */}
          <Image
            src={sassie}
            alt="sassie"
            height={450}
            className="rounded-l-md"
          />

          {/* 🎨 Content Right */}
          <div className="bg-black flex items-center rounded-r-md">
            <div className="flex-1 flex flex-col h-full justify-center p-10 bg-neutral-400/20 backdrop-blur-[1px] text-neutral-300 rounded-r-md space-y-3">
              <h2 className="text-2xl font-bold">{funProfile.name}</h2>
              <p className="italic text-teal-300">{funProfile.title}</p>
              {/* 🌀 Quirks List */}
              <ul className="list-disc list-inside text-sm space-y-1">
                {funProfile.quirks.map((quirk, index) => (
                  <li key={index}>{quirk}</li>
                ))}
              </ul>
              {/* 🗣️ Other fun attributes */}
              <div className="text-sm space-y-1 mt-4">
                <p>
                  <span className="font-semibold">Catchphrase:</span>{" "}
                  {funProfile.catchphrase}
                </p>
                <p>
                  <span className="font-semibold">Fav Move:</span>{" "}
                  {funProfile.favoriteMove}
                </p>
                <p>
                  <span className="font-semibold">Hobbies:</span>{" "}
                  {funProfile.hobbies}
                </p>
                <p>
                  <span className="font-semibold">Rating Vibes:</span>{" "}
                  {funProfile.vibeScore}
                </p>
              </div>
              {/* 😎 Mood Emojis */}
              <p className="text-xl">{funProfile.moodEmojis}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Driso;
