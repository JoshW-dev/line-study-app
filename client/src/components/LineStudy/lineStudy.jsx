import React, { useState } from 'react'
import './lineStudy.css'
import { Button, Input, Statistic, notification } from 'antd';
import Stopwatch from '../StopWatch/StopWatch';
import Download from '../Download/Download';

function LineStudy() {
    const [stopwatchTime, setStopwatchTime] = useState(0)
    const [inputs, setInputs] = useState({
        user: "test user",
        project: "test project name",
        location: "test location",
        newEvent: ""
    })
    
    const [data, setData] = useState([])
    const [inputTag, setInputTag] = useState("")
    const [tags, setTags] = useState([])
    const [fileName, setFileName] = useState("testExcelFile")
    const [apiData, setApiData] = useState([{ userId: "test id", title: "test title"}])

    var onAddEvent = () => {
        var newData = { id: 0, value: inputs.newEvent }
        setInputs(prevState =>({
            ...prevState,
            newEvent: ""
        }))
        setData([...data, newData]);
    }
    var onClickTags = () => {
        var newTag = { id: 0, value: inputTag }
        setInputTag("")
        setTags([...tags, newTag]);
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
    var updateInputState = (e) => {
        const {name,value} = e.target
        setInputs(prevState =>({
            ...prevState,
            [name]: value
        }))
    }

    var updateTagField = (e) => {
        setInputTag(e.target.value)
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
                <Input className="input" name ="user" placeholder="User Name" onChange={updateInputState} />
                <Input className="input" name ="project" placeholder="Project Name" onChange={updateInputState}/>
                <Input className="input" name ="location" placeholder="Location" onChange={updateInputState}/>
            </div>
            <div className='line-study-component'>Line Study Info
                <p>{stopwatchTime}</p>
            </div>
            <Stopwatch sendTime={getStopWatchTime} />
            {/* data entry */}
            <div className='line-study-component'>
                <Input placeholder="New Event" name ="newEvent" value = {inputs.newEvent} onChange={updateInputState} />
                <Button onClick={onAddEvent} type="primary">Add Data</Button>
                {/* data list */}
                <div className='data-list-wrapper'>
                    {data.map(function (d, idx) {
                        return (<li key={idx}>{d.value}</li>)
                    })}
                </div>
            </div>
            {/* event tag entry */}
            <div className='line-study-component'>
                <Input placeholder="New event tag" onChange={updateTagField} />
                <Button onClick={onClickTags} type="primary">Add</Button>
                {/* data list */}
                <div className='data-list-wrapper'>
                    {tags.map(function (d, idx) {
                        return (<li key={idx}>{d.value}</li>)
                    })}
                </div>
            </div>
            <Download apiData={apiData} inputs={inputs} fileName={fileName} />
        </div>
    )
}
export default LineStudy