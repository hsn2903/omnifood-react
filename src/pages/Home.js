import React from "react";

import {
  CallToAction,
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
      <CallToAction />
    </div>
  );
};

export default Home;
