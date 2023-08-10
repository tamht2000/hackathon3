import React from "react";

function Button({ onUppercaseClick, onLowercaseClick }) {
  return (
    <div>
      <div className="footer">
        <button onClick={onUppercaseClick}>Click to Uppercase</button>
        <button onClick={onLowercaseClick}>Click to Lowercase</button>
      </div>
    </div>
  );
}

export default Button;
