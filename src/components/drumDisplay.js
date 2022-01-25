/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

// import BankSwitchesCustom from "./actionUi/bankSwitch";
// import PowerSwitchesCustom from "./actionUi/powerSwitch";

import { Slider, Stack } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useTheme } from "@mui/material/styles";
import { bankOne } from "../sound-Data";

import "./drumDisplay.css";
import APad from "./drumPad/A-pad";
import CPad from "./drumPad/C-pad";
import DPad from "./drumPad/D-pad";
import EPad from "./drumPad/E-pad";
import QPad from "./drumPad/Q-pad";
import SPad from "./drumPad/S-pad";
import WPad from "./drumPad/W-pad";
import XPad from "./drumPad/X-pad";
import ZPad from "./drumPad/Z-pad";

import image from "../images/logo.ico";

const Drumdisplay = () => {
  const [volume, setVolume] = useState(1);
  const [displayText, setDisplayText] = useState("");
  const [recording, setRecording] = useState("");

  const clip = bankOne;
  const theme = useTheme();
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  const handleChange = (e) => {
    setVolume(e.target.value);
  };

  const playRecording = () => {
    let index = 0;
    let recordArray = recording.split(" ");
    const interval = setInterval(() => {
      const audio = document.getElementById(recordArray[index]);
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      index++;
    }, 300);
    setTimeout(() => clearInterval(interval), 300 * recordArray.length - 1);
  };

  return (
    <div id="drum-machine" className="container-fluid">
      <div className="logo">
        <div className="inner-logo">Kilroy&nbsp;</div>
        <img src={image} alt="image" />
      </div>

      <div className="col-md-6 Drum-pad">
        <div className="row">
          <div className="col drum-pad" id="drum-0">
            <APad
              clip={clip[3]}
              clipId={clip[3].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
          <div className="col drum-pad" id="drum-1">
            <CPad
              clip={clip[8]}
              clipId={clip[8].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
          <div className="col drum-pad" id="drum-2">
            <DPad
              clip={clip[5]}
              clipId={clip[5].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
        </div>
        <div className="row">
          <div className="col drum-pad" id="drum-3">
            <EPad
              clip={clip[2]}
              clipId={clip[2].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
          <div className="col drum-pad" id="drum-4">
            <QPad
              clip={clip[0]}
              clipId={clip[0].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
          <div className="col drum-pad" id="drum-5">
            <SPad
              clip={clip[4]}
              clipId={clip[4].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
        </div>
        <div className="row">
          <div className="col drum-pad" id="drum-6">
            <WPad
              clip={clip[1]}
              clipId={clip[1].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
          <div className="col drum-pad" id="drum-7">
            <XPad
              clip={clip[7]}
              clipId={clip[7].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
          <div className="col drum-pad" id="drum-8">
            <ZPad
              clip={clip[6]}
              clipId={clip[6].keyTrigger}
              volume={volume}
              setDisplayText={setDisplayText}
              setRecording={setRecording}
            />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div>
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1, px: 1 }}
            alignItems="center"
          >
            <VolumeDownIcon htmlColor={lightIconColor} />
            <Slider
              step={0.1}
              max={1}
              min={0}
              value={volume}
              onChange={handleChange}
              sx={{
                color:
                  theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-thumb": {
                  width: 15,
                  height: 15,
                  backgroundColor: "#fff",
                  "&:before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                  },
                },
              }}
            />
            <VolumeUpIcon htmlColor={lightIconColor} />
          </Stack>
        </div>
        <p id="display">{displayText}</p>
        <h3>Recording</h3>
        <p id="display">{recording}</p>
        <button onClick={playRecording} className="btn btn-success recButton">
          PLAY
        </button>
        <button
          onClick={() => setRecording("")}
          className="btn btn-danger recButton"
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Drumdisplay;
