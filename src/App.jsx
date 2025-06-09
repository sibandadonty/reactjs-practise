import React, { useState } from "react";
import Dice from "./components/Dice";

function App() {
  const [items, setItems] = useState([
    { id: 1, isHeld: false, value: 3 },
    { id: 2, isHeld: false, value: 6 },
    { id: 3, isHeld: false, value: 2 },
    { id: 4, isHeld: false, value: 5 },
    { id: 5, isHeld: false, value: 1 },
    { id: 6, isHeld: false, value: 4 },
    { id: 7, isHeld: false, value: 2 },
    { id: 8, isHeld: false, value: 6 },
    { id: 9, isHeld: false, value: 3 },
    { id: 10, isHeld: false, value: 5 },
    { id: 11, isHeld: false, value: 1 },
    { id: 12, isHeld: false, value: 4 },
  ]);

  function throwDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function handleRow() {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.isHeld ? items : { ...item, value: throwDice() };
      });
    });
  }

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <div className="bg-gray-300 max-w-[300px] p-4 shadow-md flex items-center justify-center flex-col gap-2">
        <img src="./tenzies-2.jpg" alt="dice image" className="w-3/4" />
        <h3 className="text-center text-2xl font-bold">Tenzies</h3>
        <p className="text-center">
          Roll until all dices are the same. Click each dice to freeze its
          current value between each roll.
        </p>
        <div className="flex flex-wrap">
          {items.map((item, i) => {
            return <Dice key={item.id} {...item} />;
          })}
        </div>
        <button
          onClick={handleRow}
          className="bg-blue-800 px-8 py-2 rounded-sm text-white"
        >
          Roll
        </button>
      </div>
    </div>
  );
}

export default App;
