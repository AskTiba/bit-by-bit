import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string | undefined;
}

const CountryListItem = ({
  flag,
  name,
  population,
  region,
  capital,
}: Props) => {
  return (
    <Link href="#" className="w-full dark:bg-[#2B3945] rounded-sm">
      <div className="w-full relative aspect-[4/3]">
        <Image
          src={flag}
          alt={`${name} flag`}
          fill
          className="object-cover rounded-t-sm"
        />
      </div>

      <h1 className="text-bold mt-5 px-6 text-xl">{name}</h1>
      <div className="text-semibold flex flex-col gap-2 p-6 text-sm">
        <p className="">
          Population:<span className="text-[#7f8b97] ml-1">{population}</span>
        </p>
        <p className="">
          Region:<span className="text-[#7f8b97] ml-1">{region}</span>
        </p>
        <p className="">
          Capital:<span className="text-[#7f8b97] ml-1">{capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryListItem;
