import React from "react";

function Dice(props) {
  return (
    <div onClick={() => props.handleHold(props.id)} className={`${props.isHeld ? "bg-red-200": undefined} w-11 h-11 shadow-lg rounded-md flex justify-center items-center`}>
      {props.value}
    </div>
  );
}

export default Dice;
