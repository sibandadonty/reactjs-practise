import React from "react";

function NewCards() {
  const items = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to the EVs?",
    },
    {
      id: 2,
      title: "The Downsided of AI Artistry",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <div className="bg-purple-950 p-2 text-white flex flex-col gap-6">
      <h1 className="text-orange-400 text-3xl font-bold">New</h1>
      {items.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="leading-6">{item.content}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default NewCards;
