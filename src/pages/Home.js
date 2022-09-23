import React from "react";
import { FeaturedIn, Hero, How, Meals, Testimonial } from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedIn />
      <How />
      <Meals />
      <Testimonial />
    </div>
  );
};

export default Home;
