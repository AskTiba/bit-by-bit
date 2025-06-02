import React from "react";
import Image from "next/image";
import checkmark from "../assets/images/icon-thank-you.svg";

type Props = {};

const apreciation = (props: Props) => {
  return (
    <main className="relative z-20 -mt-[75px] mb-10 bg-white text-black rounded-xl shadow-md flex-1">
      <div className="p-6 flex flex-col items-center justify-center gap-6 w-full">
        <Image src={checkmark} alt="checkmark" />
        <h2 className="text-2xl font-semibold">Thank you!</h2>
        <p className="text-center text-gray-600 text-lg">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </main>
  );
};

export default apreciation;
