import React from "react";
import OpenAI from "openai";

function Translator() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter text"
          aria-label="Text input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}

export default Translator;
