import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😉": "Winking Face",
  "😀": "Grinning Face",
  "💘": " Heart with Arrow",
  "💝": " Heart with Ribbon",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "🥝": " Kiwi Fruit",
  "🥑": "Avocado",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🐒 ": "Monkey",
  "🦍": " Gorilla",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",

  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "we dont have it in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside out !</h1>
      <input onChange={emojiEventHandler}></input>
      <h2> {meaning}</h2>
      <h3>Emoji we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
