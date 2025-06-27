import React from "react";
import countries from "../lib/data.json";
import CountryListItem from "./CountryListItem";

const Countries = () => {
  return (
    <main className="">
      <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8">
        {countries
          //   .slice(16, 25)
          .map(({ flags, name, population, region, capital }) => (
            <CountryListItem
              key={name}
              flag={flags.svg}
              name={name}
              population={population}
              region={region}
              capital={capital}
            />
          ))}
      </div>
    </main>
  );
};

export default Countries;
