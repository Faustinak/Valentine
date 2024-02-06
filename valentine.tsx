import { useState } from "react";
import "./App.css";

const phrase = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Wrong answer",
  "Try again...",
  "Have a heart",
  "Don't be so cold!",
  "Are you serious??",
  "last chance",
  "You might regret this...",
  "Pookie Please",
  "Fr? on Black History Month???!",
  "I'm gonna cry...",
];

function App() {
  const [NoCount, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = NoCount * 20 + 16;

  function handleNoClick() {
    setCount(NoCount + 1);
  }

  function getNoButtonText() {
    return phrase[Math.min(NoCount, phrase.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media1.tenor.com/m/jQ6kJtz92hsAAAAC/romantic-couple-of-teddy-bears-kissing-romantic-couple.gif"
          />
          <div className="text">YAY!!!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            style={{ width: "400x", height: "240px" }}
            alt="bears with hearts"
            src="https://media1.tenor.com/m/FZfcPyYj1r4AAAAC/peach-goma-goma-peach.gif"
          />
          <h1 className="text-container">Will you be my Valentine?</h1>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
