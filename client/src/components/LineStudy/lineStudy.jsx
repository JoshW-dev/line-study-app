import React, { useState } from 'react'
import './lineStudy.css'
import { Button, Input, Statistic, notification } from 'antd';
import Stopwatch from '../StopWatch/StopWatch';
import Download from '../Download/Download';
import EventButtons from '../EventButtons/eventButtons'

function LineStudy() {
    const [stopwatchTime, setStopwatchTime] = useState(0)
    const [inputs, setInputs] = useState({
        user: "test user",
        project: "test project name",
        location: "test location",
        newEvent: "",
        newTag: "Other"
    })

    const [data, setData] = useState([])
    const [status, setStatus] = useState({ state: "Up", speed: 20 })
    //status includes current state of process (up/down/idle) and current speed
    const [tags, setTags] = useState([])
    const [fileName, setFileName] = useState("testExcelFile")
    const [apiData, setApiData] = useState([{ userId: "test id", title: "test title" }])

    var onAddEvent = () => {
        var newData = { id: 0, value: inputs.newEvent }
        setInputs(prevState => ({
            ...prevState,
            newEvent: ""
        }))
        setData([...data, newData]);
    }
    var onClickTags = () => {
        setTags([...tags, inputs.newTag]);
    }

    const getStopWatchTime = (time) => {
        console.log("Get stopwatch data")
        console.log(time)
        setStopwatchTime(time)
    }
    const getProcessStatus = (data) => {
        console.log(data)
    }

    var timerToggle = (e) => {
        console.log(this.state)
        this.setState({ timerToggle: !this.state.timerToggle })
        this.openNotification()
    }
    var updateInputState = (e) => {
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
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
                <Input className="input" bordered={false} name="user" placeholder="User Name" onChange={updateInputState} />
                <Input className="input" bordered={false} name="project" placeholder="Project Name" onChange={updateInputState} />
                <Input className="input" bordered={false} name="location" placeholder="Location" onChange={updateInputState} />
            </div>
            <div className='line-study-component'>Line Study Info
                <Input className="input" bordered={false} name="lineStudyTitle" placeholder="Line Study title" onChange={updateInputState} />
                <Input className="input" bordered={false} name="processName" placeholder="Process Name" onChange={updateInputState} />
                <Input className="input" bordered={false} name="product" placeholder="Product run" onChange={updateInputState} />
                <Input className="input" bordered={false} name="lineStudyStartTime" placeholder="Line Study Start Time" onChange={updateInputState} />
                <Input className="input" bordered={false} name="lineStudyEndTime" placeholder="Line Study End Time" onChange={updateInputState} />
                <Input className="input" bordered={false} name="startingSpeed" placeholder="Starting Speed" onChange={updateInputState} />
                <Input className="input" bordered={false} name="maxSpeed" placeholder="Max Speed" onChange={updateInputState} />
                <Input className="input" bordered={false} name="unitStartCount" placeholder="Unit Start Count" onChange={updateInputState} />
                <Input className="input" bordered={false} name="unitEndCount" placeholder="Unit End Count" onChange={updateInputState} />
                <Input className="input" bordered={false} name="unitWaste" placeholder="Unit Waste" onChange={updateInputState} />

            </div>

            {/* event tag entry */}
            <div className='line-study-component'>
                <Input className="input" bordered={false} name="newTag" placeholder="New event tag" value={inputs.newTag} onChange={updateInputState} />
                <Button onClick={onClickTags} type="primary">Add</Button>
                {/* data list */}
                <div className='data-list-wrapper'>
                    {tags.map(function (d) {
                        return (<li>{d}</li>)
                    })}
                </div>
            </div>
            <Stopwatch sendTime={getStopWatchTime} />
            <div className='line-study-component'>
                <EventButtons currentStatus ={status} sendProcessStatus = {getProcessStatus}/>
            </div>

            {/* data entry */}
            <div className='line-study-component'>
                <Input className="input" bordered={false} placeholder="New Event" name="newEvent" value={inputs.newEvent} onChange={updateInputState} />
                <Button onClick={onAddEvent} type="primary">Add Data</Button>
                {/* data list */}
                <div className='data-list-wrapper'>
                    {data.map(function (d, idx) {
                        return (<li key={idx}>{d.value}</li>)
                    })}
                </div>
            </div>
            <div className='line-study-component'>
                <p>{stopwatchTime}</p>
            </div>
            <Download apiData={apiData} inputs={inputs} fileName={fileName} />
        </div>
    )
}
export default LineStudy