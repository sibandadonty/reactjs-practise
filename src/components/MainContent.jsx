import React from "react";
import NewCards from "./NewCard";
import ProductsCard from "./ProductsCard";
import HeroSection from "./HeroSection";

function MainContent() {
  return (
    <div className="px-4 flex flex-col gap-12 items-start">
      <HeroSection />
      <NewCards />
      <ProductsCard />
    </div>
  );
}

export default MainContent;
