import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  flag: string;
  name: string;
  population?: number;
  region?: string;
  capital?: string;
}

const CountryListItem = ({
  flag,
  name,
  population,
  region,
  capital,
}: Props) => {
  return (
    <Link
      href={`/challenges/rest-countries-api/${encodeURIComponent(name)}`}
      className="w-full dark:bg-[#2B3945] rounded-sm shadow hover:scale-[1.01] transition-transform"
    >
      {/* 🖼️ Flag image fills top portion */}
      <div className="w-full aspect-video relative">
        <Image
          src={flag}
          alt={`${name} flag`}
          fill
          className="object-cover rounded-t-sm"
          sizes="(max-width: 768px) 100vw, 25vw"
          priority
        />
      </div>

      <h2 className="font-bold mt-5 px-6 text-xl">{name}</h2>
      <div className="font-semibold flex flex-col gap-2 p-6 text-sm">
        <p>
          Population:
          <span className="text-[#7f8b97] ml-1">
            {population?.toLocaleString() ?? "N/A"}
          </span>
        </p>
        <p>
          Region:
          <span className="text-[#7f8b97] ml-1">{region ?? "N/A"}</span>
        </p>
        <p>
          Capital:
          <span className="text-[#7f8b97] ml-1">{capital ?? "N/A"}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryListItem;
