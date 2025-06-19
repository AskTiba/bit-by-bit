import React from "react";
import Image from "next/image";
import checkmark from "../assets/images/icon-thank-you.svg";

const Appreciation = () => {
  return (
    <section className="flex flex-1 items-center justify-center w-full">
      <div className="p-6 flex flex-col items-center justify-center gap-6 text-center max-w-lg">
        <Image src={checkmark} alt="checkmark" priority />
        <h2 className="text-2xl font-semibold">Thank you!</h2>
        <p className="text-gray-600 text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default Appreciation;
