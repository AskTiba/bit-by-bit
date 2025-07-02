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
      <div className="min-h-screen text-gray-900 dark:text-white bg-[#E9E8E3] dark:bg-[#202D36]">
        <Header />
        {children}
      </div>
    </ThemeWrapper>
  );
}
