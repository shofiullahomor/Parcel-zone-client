import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Blog from "../Components/Blog";
import ClientsSection from "../Components/ClientsSection";
import Faq from "../Components/Faq";

const Home = () => {
  return (
    <div className="md:px-10 mx-auto">
      <Hero />
      <Features />
      <Blog />
      <ClientsSection />
      <Faq></Faq>
      {/* <NewsletterForm/>
            <TopDeliveryMen/>
            <Faq/> */}
    </div>
  );
};

export default Home;
