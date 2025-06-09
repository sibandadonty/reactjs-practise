import React from "react";

function Dice(props) {
  return (
    <div className="w-11 h-11 shadow-lg rounded-md flex justify-center items-center">
      {props.value}
    </div>
  );
}

export default Dice;
