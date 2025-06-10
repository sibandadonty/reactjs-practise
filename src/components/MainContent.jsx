import React from "react";
import NewCards from "./NewCard";
import ProductsCard from "./ProductsCard";

function MainContent() {
  return (
    <div className="px-4 flex flex-col gap-4 items-start">
      <img src="./image-web-3-mobile.jpg" alt="web 3 mobile" />
      <p className="font-bold text-4xl">The Bright Future of Web 3.0?</p>
      <p className="leading-8 text-xl">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="bg-red-500 font-bold tracking-wider px-4 py-2">READ MORE</button>
      <NewCards />
      <ProductsCard />
    </div>
  );
}

export default MainContent;
