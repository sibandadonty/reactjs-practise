import React from "react";

function ProductsCard() {
  const items = [
    {
      id: "01",
      imgUrl: "./image-retro-pcs.jpg",
      title: "Reviving Petro PCs",
      content: "What happends when old PCs are given modern upgrades?",
    },
    {
      id: "02",
      imgUrl: "./image-top-laptops.jpg",
      title: "Top 10 Laptops of 2022",
      content: "Our best pick for varous needs and budgets.",
    },
    {
      id: "03",
      imgUrl: "./image-gaming-growth.jpg",
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        return (
          <div key={item.id} className="flex gap-2">
            <img src={item.imgUrl} alt={item.imgUrl} className="w-1/3" />
            <div className="flex flex-col gap-2 justify-between">
              <h1 className="text-4xl text-red-500 font-bold">{item.id}</h1>
              <h2 className="text-2xl font-bold leading-3">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsCard;
