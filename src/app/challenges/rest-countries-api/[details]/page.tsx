"use client";

import { useParams } from "next/navigation";
import React from "react";
import countriesData from "../lib/data.json";
import { Country } from "~/types/country";
import Image from "next/image";
import Link from "next/link";
import Back from "~/components/icons/Back";

const countries = countriesData as Country[];

const CountryDetailsPage = () => {
  const params = useParams() as { details: string };
  const details = decodeURIComponent(params.details).toLowerCase();

  const country = countries.find((c) => c.name.toLowerCase() === details);

  if (!country) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl font-semibold">
          Oops! Couldn’t find “{params.details}” 🤔
        </p>
      </main>
    );
  }

  const {
    name,
    nativeName,
    flags,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    languages,
    currencies,
    borders,
  } = country;

  const borderCountries = borders?.map((code) => {
    const neighbor = countries.find((c) => c.alpha3Code === code);
    return neighbor?.name ?? code;
  });

  return (
    <main className="w-full dark:bg-[#202D36] min-h-[calc(100vh-64px)]">
      <section className="max-w-7xl mx-auto px-4 py-6 sm:px-6 md:px-10 lg:px-20 font-semibold">
        <div className="md:my-8">
          <Link
            className="py-3 px-5 w-fit md:mt-8 bg dark:bg-[#2B3945] rounded-sm text-sm flex items-center gap-4"
            href="/challenges/rest-countries-api"
          >
            <Back className="size-6 text-blue-950 dark:text-white" />
            Back
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start md:grid md:grid-cols-2 md:gap-8 md:my-10">
          <div className="w-full aspect-video relative">
            <Image
              src={flags.svg}
              alt={`${name} flag`}
              fill
              className="w-full md:w-1/2 rounded shadow-md my-6"
              sizes="(max-width: 768px) 100vw, 25vw"
              priority
            />
          </div>

          <div className="flex-1 space-y-4 text-gray-800 dark:text-gray-100 text-base">
            <div className="flex flex-col gap-6">
              <article className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <section className="flex flex-col gap-2">
                  <h1 className="md:text-3xl text-2xl font-bold ml-1 mt-6 mb-2">
                    {name}
                  </h1>
                  <p>
                    <span className="font-semibold">Native Name:</span>
                    <span className="text-[#7f8b97]  ml-1">{nativeName}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Population:</span>
                    <span className="text-[#7f8b97]  ml-1">
                      {population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region:</span>
                    <span className="text-[#7f8b97]  ml-1">{region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Subregion:</span>
                    <span className="text-[#7f8b97]  ml-1">{subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span>
                    <span className="text-[#7f8b97]  ml-1">{capital}</span>
                  </p>
                </section>
                <section className="flex flex-col gap-2">
                  <p>
                    <span className="font-semibold">Top Level Domain:</span>
                    <span className="text-[#7f8b97]  ml-1">
                      {topLevelDomain.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies:</span>
                    <span className="text-[#7f8b97]  ml-1">
                      {currencies
                        .map((c) => `${c.name} (${c.symbol})`)
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages:</span>
                    <span className="text-[#7f8b97]  ml-1">
                      {languages.map((l) => l.name).join(", ")}
                    </span>
                  </p>
                </section>
              </article>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-x-4">
                {/* Label: stays on top for mobile, inline for md+ */}
                <p className="font-semibold whitespace-nowrap">
                  Border Countries:
                </p>

                {/* Country Chips */}
                <div className="flex flex-wrap gap-2">
                  {borderCountries && borderCountries.length > 0 ? (
                    borderCountries.map((country, idx) => (
                      <span
                        key={idx}
                        className="px-5 py-2 rounded-sm bg-gray-200 dark:bg-[#2B3945] text-sm text-gray-800 dark:text-gray-100 shadow-sm"
                      >
                        {country}
                      </span>
                    ))
                  ) : (
                    <span className="text-[#7f8b97]">None</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryDetailsPage;
