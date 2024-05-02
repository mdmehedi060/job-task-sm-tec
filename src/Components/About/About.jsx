import React from "react";
import Testimonials from "../Buy/Testimonials";
import FlatListed from "../Buy/FlatListed";
import Team from "./Team";
import Meet from "./Meet";

const About = () => {
  return (
    <div>
      <FlatListed></FlatListed>
      <Team></Team>
      <Meet></Meet>
      <Testimonials></Testimonials>
    </div>
  );
};

export default About;
