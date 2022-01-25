/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./E-pad.scss";

const EPad = ({ clip, volume, setDisplayText, setRecording }) => {
  const [active, setActive] = useState({
    backgroundColor: "grey",
    marginTop: 10,
    boxShadow: "3px 3px 5px black",
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", upHandler);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  // const handleKeyPress = (e) => {
  //   if (e.keyCode === clip.keyCode) {
  //     playSound();
  //     setActive({
  //       backgroundColor: "#ff0081",
  //       boxShadow: "0 2px 25px rgba(255, 0, 130, 0.2)",
  //       height: 77,
  //       marginTop: 13,
  //     });
  //   }
  // };

  const handleKeyPress = (event) => {
    let keystroke = event.key;
    if (keystroke === "e" || keystroke === "E") {
      playSound();
      setActive({
        backgroundColor: "#ff0081",
        boxShadow: "0 2px 25px rgba(255, 0, 130, 0.2)",
        height: 77,
        marginTop: 13,
      });
    }
  };

  const upHandler = (e) => {
    if (e.keyCode === clip.keyCode) {
      setActive({
        backgroundColor: "grey",
        marginTop: 10,
        boxShadow: "3px 3px 5px black",
      });
    }
  };

  const playSound = () => {
    const audio = document.getElementById(clip.keyTrigger);
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play();
    setRecording((prev) => prev + clip.keyTrigger + " ");
    setDisplayText(clip.id.replace(/-/g, " "));
  };

  return (
    <button
      onClick={playSound}
      className="Zpad-Select"
      style={active}
      id={clip.id}
    >
      {clip.keyTrigger}
      <audio src={clip.url} className="clip" id={clip.keyTrigger} />
    </button>
  );
};

export default EPad;
