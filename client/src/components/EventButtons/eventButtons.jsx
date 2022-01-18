import React, { useState } from "react";
import "./eventButtons.css";
import { Input, Button } from 'antd';

function EventButtons(params) {
    const [newSpeed, setNewSpeed] = useState(params.currentStatus.speed);
    const handleUpdateStatus = (e) => {
        let type = e.target.innerHTML //ideally change to use button id here instead of button text
        if (type !== "Speed Change") {
            console.log(type)
            setNewSpeed(params.currentStatus.speed)
            params.sendProcessStatus({ state: type, speed: params.currentStatus.speed })
            //if process is marked down or idle, speed is effectively 0
            //ensure this is accounted for in logic later on
            createEvent(type, params.currentStatus.speed)
        } else {        
            createEvent(type, newSpeed)
            console.log(type)
            console.log(newSpeed)
            params.sendProcessStatus({ state: "Up", speed: newSpeed})
        }
    }
    const updateSpeed = (e) => {
        let { value } = e.target
        setNewSpeed(value)
    }
    const createEvent =(type, newSpeed)=>{
        params.addEvent(type, newSpeed)
    }

    return (
        <div className="event-buttons-wrapper">
            {params.lastEvent.type}
            {params.lastEvent.speed}
            <Button onClick={handleUpdateStatus} >Up</Button>
            <Button onClick={handleUpdateStatus} >Down</Button>
            <Button onClick={handleUpdateStatus} >Idle</Button>
            <Button onClick={handleUpdateStatus}>Speed Change</Button>
            <Input style={{ width: 'calc(100% - 200px)' }} value={newSpeed} onChange={updateSpeed} />

        </div>
    );
}

export default EventButtons;