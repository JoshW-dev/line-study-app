import React, { useState } from 'react'
import './lineStudy.css'
import { Button, Input, Statistic, notification } from 'antd';
import Stopwatch from '../StopWatch/StopWatch';

function LineStudy() {
    const [stopwatchTime, setStopwatchTime] = useState(0)
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    
    var onClick = () => {
        var newData = { id: 0, value: input }
        setInput("")
        setData([...data, newData]);
    }
    const setStopWatchTime = (time) => {
        console.log("Get stopwatch data")
        console.log(time)
    }
    var timerToggle = (e) => {
        console.log(this.state)
        this.setState({ timerToggle: !this.state.timerToggle })
        this.openNotification()
    }
    var updateInputField = (e) => {
        setInput(e.target.value)
    }
    var openNotification = () => {
        notification.open({
            message: 'State',
            description:
                Date.now(),
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    }
    return (
        <div className="line-study-wrapper">
            <div className='line-study-component'>
                <h3>Project Details</h3>
                <Input className="input" placeholder="User" />
                <Input className="input" placeholder="Project" />
                <Input className="input" placeholder="Location" />
            </div>
            <div className='line-study-component'>Line Study Info</div>
            <Stopwatch sendTime={setStopWatchTime} />
            {/* data entry */}
            <div className='line-study-component'>
                <Input placeholder="Input Form" onChange={updateInputField} />
                <Button onClick={onClick} type="primary">Add Data</Button>
            </div>
            {/* data list */}
            <div className='data-list-wrapper'>
                {data.map(function (d, idx) {
                    return (<li key={idx}>{d.value}</li>)
                })}
            </div>
        </div>
    )
}
export default LineStudy