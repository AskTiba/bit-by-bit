import React from "react";
import Image from "next/image";
import checkmark from "../assets/images/icon-thank-you.svg";

const apreciation = () => {
  return (
    <main className="">
      <div className="p-6 flex flex-1 h-full flex-col items-center justify-center gap-6">
        <Image src={checkmark} alt="checkmark" />
        <h2 className="text-2xl font-semibold">Thank you!</h2>
        <p className="text-center text-gray-600 text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </main>
  );
};

export default apreciation;
