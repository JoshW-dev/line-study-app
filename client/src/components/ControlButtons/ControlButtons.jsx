import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start"
      onClick={props.handleStart}>
      Start
    </div>

  );
  const StartButtons = (
    <div className="btn-grp">
      <div className="btn btn-one btn-start"
        onClick={props.handleStart}>
        Start
      </div>
      <div className="btn btn-two"
        onClick={props.handleReset}>
        Reset
      </div>
    </div>
  )

  const UnpausedButtons = (
    <div className="btn-grp">
      <div className="btn btn-one"
        onClick={props.handlePauseResume}>
        Stop
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