import React from "react";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Exprience from "../../components/Experience";
import Workconatact from "../../components/Workcontact";
import Work from "../../components/Work";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden flex flex-col gap-[80px]  lg:px-0 px-4">
      <Hero />
      <About />
      <Work />
      <Exprience />
      <Workconatact />
    </div>
  );
};

export default Home;
