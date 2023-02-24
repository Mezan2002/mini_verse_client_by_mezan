import React, { useState, useRef } from "react";

function ReactionPalette({ onReactionSelect }) {
  return (
    <div className="reaction-palette">
      <button
        className="reaction-button"
        onClick={() => onReactionSelect("like")}
      >
        👍
      </button>
      <button
        className="reaction-button"
        onClick={() => onReactionSelect("love")}
      >
        ❤️
      </button>
      <button
        className="reaction-button"
        onClick={() => onReactionSelect("haha")}
      >
        😂
      </button>
      <button
        className="reaction-button"
        onClick={() => onReactionSelect("wow")}
      >
        😮
      </button>
      <button
        className="reaction-button"
        onClick={() => onReactionSelect("sad")}
      >
        😢
      </button>
      <button
        className="reaction-button"
        onClick={() => onReactionSelect("angry")}
      >
        😡
      </button>
    </div>
  );
}

function ReactionButton() {
  const [showPalette, setShowPalette] = useState(false);
  const timeoutRef = useRef(null);

  function handleMouseEnter() {
    timeoutRef.current = setTimeout(() => {
      setShowPalette(true);
    }, 1000);
  }

  function handleMouseLeave() {
    clearTimeout(timeoutRef.current);
    setShowPalette(false);
  }

  function handleReactionSelect(reaction) {
    console.log(`Selected reaction: ${reaction}`);
    // Your code to handle the selected reaction goes here.
  }

  return (
    <div className="reaction-button-container">
      <button
        className="reaction-button-main"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        React
      </button>
      {showPalette && (
        <ReactionPalette onReactionSelect={handleReactionSelect} />
      )}
    </div>
  );
}

function Test() {
  return (
    <div className="">
      <ReactionButton />
    </div>
  );
}

export default Test;
