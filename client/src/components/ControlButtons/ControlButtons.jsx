import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
  const UnpausedButtons = (
    <div className="btn-grp">
      <div className="btn btn-one"
        onClick={props.handlePauseResume}>
        Pause
      </div>
      <div className="btn btn-two"
        onClick={props.handleLap}>
        Lap 
      </div>

    </div>
  );
  const PausedButtons = (
    <div className="btn-grp">
      <div className="btn btn-one"
        onClick={props.handlePauseResume}>
        Start
      </div>
      <div className="btn btn-two"
        onClick={props.handleReset}>
        Reset
      </div>

    </div>
  );



  return (
    <div className="Control-Buttons">
      <div>{props.isPaused ? PausedButtons : UnpausedButtons}</div>
    </div>
  );
}