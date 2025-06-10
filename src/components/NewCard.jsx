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
    <div>
      <h1>New</h1>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewCards;
