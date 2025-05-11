import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="grid sm:grid-cols-3 gap-4 p-4 text-white font-semibold">
        <Link
          className="bg-green-600 text-center p-2 rounded-sm"
          href="./challenges/ecommerce-product-page"
        >
          Ecommerce Product Page
        </Link>
        <Link
          className="bg-purple-600 text-center p-2 rounded-sm"
          href="./challenges/expense-tracker"
        >
          Expense Tracker
        </Link>
        <Link
          className="bg-indigo-600 text-center p-2 rounded-sm"
          href="./challenges/testing"
        >
          Testing
        </Link>
        <Link
          className="bg-[#3d405b] text-center p-2 rounded-sm"
          href="./challenges/multi-step-form"
        >
          Multi Step Form
        </Link>
      </div>
    </>
  );
};

export default Home;
