import React, { useState } from "react";

function Arrange({ charCount, wordCount, paragraphCount }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleContentClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="title_flex">
        <div
          className={`content ${
            selectedType === "Character Count" ? "selected" : ""
          }`}
          onClick={() => handleContentClick("Character Count")}
        >
          <h3>Word</h3>
          <p>{`Word Count: ${wordCount}`}</p>
        </div>
        <div
          className={`content ${
            selectedType === "Word Count" ? "selected" : ""
          }`}
          onClick={() => handleContentClick("Word Count")}
        >
          <h3>Letter</h3>
          <p>{`Character Count: ${charCount}`}</p>
        </div>
        <div
          className={`content ${
            selectedType === "Paragraph Count" ? "selected" : ""
          }`}
          onClick={() => handleContentClick("Paragraph Count")}
        >
          <h3>Paragraph</h3>
          <p>{`Paragraph Count: ${paragraphCount}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Arrange;
