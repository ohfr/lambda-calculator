import React from "react";

export const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={props.numberChange} className="numbers-button">{props.number}</button>
    </>
  );
};
