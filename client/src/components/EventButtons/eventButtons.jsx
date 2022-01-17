import React, { useState } from "react";
import "./eventButtons.css";
import { Input, Button } from 'antd';

function EventButtons(params) {
    const [status, setStatus] = useState("Up");
    const [newSpeed, setNewSpeed] = useState(params.currentStatus.speed);
    const handleUpdateStatus = (e) => {
        let type = e.target.innerHTML //ideally change to use button id here instead of button text
        if (type !== "Speed Change") {
            console.log(type)
            setNewSpeed(params.currentStatus.speed)
        } else {
            console.log(type)
            console.log(newSpeed)
        }
        params.sendProcessStatus(status)
    }
    const updateSpeed = (e) => {
        let { value } = e.target
        setNewSpeed(value)
    }

    return (
        <div className="event-buttons-wrapper">
            {status}
            {newSpeed}

            <Button onClick={handleUpdateStatus} >Up</Button>
            <Button onClick={handleUpdateStatus} >Down</Button>
            <Button onClick={handleUpdateStatus} >Idle</Button>
            <Button onClick={handleUpdateStatus}>Speed Change</Button>
            <Input style={{ width: 'calc(100% - 200px)' }} defaultValue={newSpeed} onChange={updateSpeed} />

        </div>
    );
}

export default EventButtons;