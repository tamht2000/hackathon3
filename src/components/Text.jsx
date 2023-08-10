import React, { useState } from "react";

function Text({ onTextChange }) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <div>
      <div className="text">
        <textarea
          placeholder="Enter your text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
}

export default Text;
