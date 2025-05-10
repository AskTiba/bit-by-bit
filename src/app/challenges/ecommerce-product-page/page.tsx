import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
