import React from "react";
import {
  FeaturedIn,
  Hero,
  How,
  Meals,
  Pricing,
  Testimonial,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedIn />
      <How />
      <Meals />
      <Testimonial />
      <Pricing />
    </div>
  );
};

export default Home;
