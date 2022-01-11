import React, { useState } from 'react'
import './lineStudy.css'
import { Button, Input, Statistic, notification } from 'antd';
import Stopwatch from '../StopWatch/StopWatch';
import Download from '../Download/Download';

function LineStudy() {
    const [stopwatchTime, setStopwatchTime] = useState(0)
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [fileName, setFileName] = useState("testExcelFile")
    const [apiData, setApiData] = useState([{ userId: "test id", title: "test title" }])
    
    
    var onClick = () => {
        var newData = { id: 0, value: input }
        setInput("")
        setData([...data, newData]);
    }

    const getStopWatchTime = (time) => {
        console.log("Get stopwatch data")
        console.log(time)
        setStopwatchTime(time)
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
            <div className='line-study-component'>Line Study Info
            <p>{stopwatchTime}</p>
            </div>
            <Stopwatch sendTime={getStopWatchTime} />
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
            <Download apiData={apiData} fileName={fileName} />
        </div>
    )
}
export default LineStudy