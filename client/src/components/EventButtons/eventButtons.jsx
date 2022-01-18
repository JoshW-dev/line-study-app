import React, { useState } from "react";
import "./eventButtons.css";
import { Input, Button } from 'antd';

function EventButtons(params) {
    const [newSpeed, setNewSpeed] = useState(params.lastEvent.speed);
    const handleUpdateStatus = (e) => {
        let type = e.target.innerText //ideally change to use button id here instead of button text
        if (type !== "Speed Change") {
            console.log(type)
            setNewSpeed(params.lastEvent.speed)
            //if process is marked down or idle, speed is effectively 0
            //ensure this is accounted for in logic later on
            createEvent(type, params.lastEvent.speed)
        } else {
            createEvent(type, newSpeed)
            console.log(type)
            console.log(newSpeed)
        }
    }
    const updateSpeed = (e) => {
        let { value } = e.target
        setNewSpeed(value)
    }
    const createEvent = (type, newSpeed) => {
        params.addEvent(type, newSpeed)
    }

    return (
        <div className="event-buttons-wrapper">

            <div>
                {params.lastEvent.type}
                {params.lastEvent.speed}
            </div>
            <Button id="Up" onClick={handleUpdateStatus} >Up</Button>
            <Button id="Down" onClick={handleUpdateStatus} >Down</Button>
            <Button id="Idle" onClick={handleUpdateStatus} >Idle</Button>
            <div>
                <Button id="Speed Change"
                    onClick={handleUpdateStatus}>Speed Change</Button>
                <Input style={{ width: 'calc(100% - 200px)' }} value={newSpeed} onChange={updateSpeed} />
            </div>

        </div>
    );
}

export default EventButtons;