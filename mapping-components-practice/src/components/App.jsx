/** @format */

import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";
function App() {
  const getEmoji = (emojis) => {
    return (
      <Emoji emoji={emojis.emoji} name={emojis.name} meaning={emojis.meaning} />
    );
  };
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
