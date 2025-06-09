import React from "react";

function App() {
  const numbers = Array(12).fill(1);
  console.log([...numbers]);

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <div className="bg-gray-300 max-w-[300px] p-4 shadow-md flex items-center justify-center flex-col gap-2">
        <img src="./tenzies-2.jpg" alt="dice image" className="w-3/4"/>
        <h3 className="text-center text-2xl font-bold">Tenzies</h3>
        <p className="text-center">
          Roll until all dices are the same. Click each dice to freeze its
          current value between each roll.
        </p>
        <div className="flex flex-wrap"> 
          {numbers.map((item, i) => {
            return <div key={i} className="w-11 h-11 shadow-lg rounded-md flex justify-center items-center">{i}</div>;
          })}
        </div>
        <button className="bg-blue-800 px-8 py-2 rounded-sm text-white">Roll</button>
      </div>
    </div>
  );
}

export default App;
