import React, { useState } from 'react'
import './lineStudy.css'
import { Button, Input, Statistic, notification } from 'antd';
import Stopwatch from '../StopWatch/StopWatch';
import Download from '../Download/Download';
import EventButtons from '../EventButtons/eventButtons'
import EventsTable from '../eventsTable/eventsTable'

function LineStudy() {
    const [isActive, setIsActive] = useState(false)
    const [inputs, setInputs] = useState({
        user: "test user",
        project: "test project name",
        location: "test location",
        newEvent: "",
        newTag: "Other",
        lineStudyStartTime: 0
    })
    const [status, setStatus] = useState({ state: "Up", speed: 20 })
    //status includes current state of process (up/down/idle) and current speed
    const [tags, setTags] = useState([])
    const [events, setEvents] = useState([{
        type: "Up",
        start: 0,
        end: 0,
        duration: 0,
        speed: 20,
        tag: "init",
        notes: "lorem ipsum"
    }])
    const [fileName, setFileName] = useState("testExcelFile")
    const [apiData, setApiData] = useState([{ userId: "test id", title: "test title" }])
    var onClickTags = () => {
        setTags([...tags, inputs.newTag]);
    }
    const getTime = React.useRef(null)

    var addEvent = (type, newSpeed) => {
        console.log(type)
        console.log(newSpeed)

        let newEvent = {
            type: type,
            //get start time from stopwatch
            start: 0,
            //get end time and duration from previous event 
            end: 0,
            duration: 0,
            //update with newspeed every time (should be unchanged if speed doesnt change)
            speed: newSpeed,
            //allow this to be editable when listed
            tag: "init",
            notes: "lorem ipsum"
        }
        setEvents(oldArray => [...oldArray, newEvent]);

    }
    const getStopWatchTime = (time) => {
        console.log("Get stopwatch data")
        console.log(time)
    }
    const testFunction = () => {
        console.log("test button")
        getTime.current()
    }
    var updateInputState = (e) => {
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    var openNotification = (message) => {
        notification.open({
            message: message,
            description:
                Date.now(),
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    }
    const startLineStudy = React.useRef(null)

    const startStudy = () => {
        console.log("start line study")
        startLineStudy.current()
        setIsActive(!isActive)
        openNotification("Line Study Started")
        setInputs(prevState => ({
            ...prevState,
            lineStudyStartTime: Date.now()
        }))
        //start timer
        //set isActive to true
        //auto set timestamps
    }
    const endStudy = () => {
        console.log("end line study")
        //todo: add logic
    }
    return (
        <div className="line-study-wrapper">

            <div className="line-study-grid-wrapper">

                <div className='line-study-component'>
                    <h3>Project Details</h3>
                    <Input className="input" bordered={false} name="user" placeholder="User Name" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="project" placeholder="Project Name" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="location" placeholder="Location" onChange={updateInputState} />

                    <Button onClick={startStudy} disabled={isActive}>Start Line Study</Button>
                    {/* todo: add logic to prevent start without valid input for project/line study */}
                    {isActive ?
                        <Button onClick={endStudy}>End Line Study</Button> : null
                    }

                </div>
                <div className='line-study-component'>
                    <h3>Line Study Info</h3>
                    <Input className="input" bordered={false} name="lineStudyTitle" placeholder="Line Study title" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="processName" placeholder="Process Name" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="product" placeholder="Product run" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="lineStudyStartTime" placeholder="Line Study Start Time" onChange={updateInputState} value={inputs.lineStudyStartTime} />
                    <Input className="input" bordered={false} name="lineStudyEndTime" placeholder="Line Study End Time" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="startingSpeed" placeholder="Starting Speed" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="maxSpeed" placeholder="Max Speed" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="unitStartCount" placeholder="Unit Start Count" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="unitEndCount" placeholder="Unit End Count" onChange={updateInputState} />
                    <Input className="input" bordered={false} name="unitWaste" placeholder="Unit Waste" onChange={updateInputState} />
                </div>

                {/* event tag entry */}
                <div className='line-study-component'>
                    <h3>Event Tags</h3>
                    <Input className="input" bordered={false} name="newTag" placeholder="New event tag" value={inputs.newTag} onChange={updateInputState} />
                    <Button onClick={onClickTags} type="primary">Add</Button>
                    {/* data list */}
                    <div className='data-list-wrapper'>
                        {tags.map(function (d) {
                            return (<li>{d}</li>)
                        })}
                    </div>
                </div>
                <Stopwatch
                    sendTime={getStopWatchTime}
                    active={isActive}
                    childFunc={startLineStudy}
                    sendStopWatchTime={getTime}
                />
                <div className='line-study-component'>
                    <EventButtons
                        lastEvent={events[events.length - 1]}
                        currentStatus={status}
                        addEvent={addEvent} />
                </div>

                <div>
                    <Button onClick={testFunction}>Do thing</Button>
                </div>

            </div>
            <EventsTable events={events} />
            <Download apiData={apiData} inputs={inputs} fileName={fileName} />

        </div>

    )
}
export default LineStudy