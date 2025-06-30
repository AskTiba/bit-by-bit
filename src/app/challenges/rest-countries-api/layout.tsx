import React from "react";
import Header from "./components/Header";
import { ThemeWrapper } from "./components/ThemeWrapper";

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      <div className="min-h-screen text-gray-900 dark:text-white">
        <Header />
        {children}
      </div>
    </ThemeWrapper>
  );
}
