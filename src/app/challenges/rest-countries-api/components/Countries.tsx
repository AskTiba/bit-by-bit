import React from "react";
import CountryListItem from "./CountryListItem";
import { Country } from "~/types/country";

interface Props {
  countries?: Country[];
}

const Countries = ({ countries }: Props) => {
  if (!countries || countries.length === 0) {
    return (
      <p className="text-center text-gray-500">No countries to display.</p>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8">
      {countries.map(({ flags, name, population, region, capital }) => (
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
  );
};

export default Countries;
