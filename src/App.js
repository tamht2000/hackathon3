import "./App.css"
import React, { useState } from "react";
import Arrange from "./components/Arrange";
import Text from "./components/Text";
import Button from "./components/Button";

function App() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [renderedText, setRenderedText] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);

  const handleTextChange = (newText) => {
    setText(newText);
    setCharCount(newText.length);
    setWordCount(newText.split(" ").filter((word) => word !== "").length);
    setParagraphCount(newText.split("\n").filter((paragraph) => paragraph !== "").length);
  };

  const handleUppercaseClick = () => {
    setRenderedText(text.toUpperCase());
  };

  const handleLowercaseClick = () => {
    setRenderedText(text.toLowerCase());
  };

  const handleResultClick = (resultType) => {
    setSelectedResult(resultType);
  };

  const handleContentClick = (resultType) => {
    setSelectedResult(resultType);
  };  

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>
            <i className="fa-solid fa-house">Word Counter</i>
          </h1>
        </div>

        <Arrange charCount={charCount}
          wordCount={wordCount}
          paragraphCount={paragraphCount}
          handleContentClick={handleContentClick}
          selectedType={selectedResult}/>

        <Text onTextChange={handleTextChange} />

        <Button
          onUppercaseClick={handleUppercaseClick}
          onLowercaseClick={handleLowercaseClick}
        />

        <div className="result-box">
          <div className="content" onClick={() => handleResultClick("Rendered Text")}>{`Rendered Text:\n${renderedText}`}</div>
        </div>

        {selectedResult && (
          <div className="selected-result">
            <h2>{selectedResult}</h2>
            {selectedResult === "Rendered Text" ? (
              <pre>{renderedText}</pre>
            ) : (
              <p>{selectedResult === "Character Count" ? charCount : selectedResult === "Word Count" ? wordCount : paragraphCount}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
