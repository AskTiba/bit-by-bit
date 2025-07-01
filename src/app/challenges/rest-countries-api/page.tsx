"use client";
import CountryExplorer from "./components/CountryExplorer";

const CountriesPage = () => {
  return (
    <main className="text-gray-950 dark:bg-[#202D36] dark:text-white font-sans mx-auto min-h-[calc(100vh-64px)]">
      <div className="text-sm px-4 lg:max-w-7xl md:max-w-3xl lg:px-20 md:text-base max-w-sm mx-auto">
        <CountryExplorer />
      </div>
    </main>
  );
};

export default CountriesPage;
