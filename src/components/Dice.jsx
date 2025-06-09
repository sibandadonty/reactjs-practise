import React from "react";

function Dice(props) {
  return (
    <button onClick={() => props.handleHold(props.id)}>
      <p
        className={`${
          props.isHeld ? "bg-green-400" : "bg-white"
        } w-11 h-11 shadow-lg flex justify-center items-center rounded-xl`}
      >
        {props.value}
      </p>
    </button>
  );
}

export default Dice;
