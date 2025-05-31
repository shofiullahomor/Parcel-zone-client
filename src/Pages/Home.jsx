import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";

const Home = () => {
  return (
    <div className="md:px-10 mx-auto">
      <Hero />
      <Features />
      {/* <NewsletterForm/>
            <Blog/>
            <TopDeliveryMen/>
            <ClientsSection/>
            <Faq/> */}
    </div>
  );
};

export default Home;
