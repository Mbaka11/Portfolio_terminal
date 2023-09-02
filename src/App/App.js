import "./App.css";
import { useState, useEffect, useRef } from "react";
import { manageCommands } from "../CommandManager/commandManager.tsx";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();
  const [promptVisible, setPromptVisible] = useState(true);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEnterKey = () => {
    if (input.trim() === "") {
      // Do nothing if input is empty
      return;
    } else if (input === "clear") {
      setOutput("");
    } else {
      const newOutput = [
        ...output,
        <div key={output.length}>
          <p>
            <span id="terminal-name">{"Mbaka~ >> "}</span>
            {input}
          </p>
          {manageCommands(input)}
        </div>,
      ];

      // Update the output state with the new content
      setOutput(newOutput);
    }

    // Clear the input field
    setInput("");
  };

  const handlePromptVisibility = (e) => {
    setInput(e.target.value);

    setPromptVisible(false);
  };

  return (
    <div
      className="App"
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <div className="centered-container">
        <div className="terminal">{output}</div>
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder="type 'help' for a list of commands"
          onChange={handlePromptVisibility}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEnterKey();
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
