import React, { useState, useEffect } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

function StopWatch(params) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([0]);//first lap always starts at 0
  useEffect(() => {
    params.sendStopWatchTime.current = handleSendTime
    params.childFunc.current = handleStart
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  //effect hook for sending stopwatch data to parent linestudy on eventCreate
  const handleSendTime = () => {
    var curTime = time
    console.log(curTime)
    params.sendTime(time)    
  };
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    if (!isActive) {
      setIsActive(true)
    }
    setIsPaused(!isPaused);
    params.sendTime(time)    
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setLaps([0])
  };
  const handleLap = () => {
    const lapsSum = laps.reduce((result, number) => result + number);
    let newLap = time - lapsSum
    console.log(newLap)
    setLaps([...laps, newLap]);
  };
  const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds + "." + millis % 1000;
  };

  return (
    <div className="stop-watch">
      <div className="white">
        {params.active ? "active" : "not active"}

      </div>
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleLap={handleLap}
      />
      <div className="laps">
        {laps.map(function (time, index) {
          return (<div key={index}>Lap {index} : {millisToMinutesAndSeconds(time)}</div>)
        })}
      </div>
    </div>
  );
}

export default StopWatch;