"use client";

import React from "react";
import { useUserDataStore } from "~/lib/store/testStore";

const LearnZustand = () => {
  // 🔌 Access user from Zustand store
  const user = useUserDataStore((state) => state.user);

  // 🧠 Custom greeting logic:
  // Check if both firstname and lastname exist and are truthy
  const hasFullName = user?.firstname && user?.lastname;

  // 📣 Fallback-friendly greeting
  const greeting = hasFullName
    ? `Hello, ${user.firstname} ${user.lastname}`
    : "Hello, there";

  return (
    <main className="border-2 border-[#3d348b] rounded-md p-4 m-4 shadow-md">
      <h1 className="text-center text-2xl font-bold">Learn Zustand</h1>
      <p>{greeting}</p>
    </main>
  );
};

export default LearnZustand;
