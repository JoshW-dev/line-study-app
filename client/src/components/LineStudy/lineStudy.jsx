import React, {Component} from 'react'
import './lineStudy.css'
import {  Button, Input, Statistic, notification } from 'antd';
import Stopwatch from '../StopWatch/StopWatch';
import DataEntry from '../DataEntry/DataEntry';

  
class lineStudy extends Component{
state = {
    timingRunning: false,
    timeStamp: Date.now(),
    input: "",
    data: []
}
onClick = () => {
    var newData = {id: 0, value: this.state.input}
    this.setState({input: ""})    
    this.setState({data: [...this.state.data, newData]});
}
timerToggle = (e) => {
    console.log(this.state)
    this.setState({timerToggle: !this.state.timerToggle})
    this.openNotification()
}
updateInputField = (e)=>{
    this.setState({input: e.target.value})
}
openNotification = ()=>{
    notification.open({
        message: 'State',
        description:
        Date.now(),
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
}

render(data){
   return ( 
      <div className="line-study-wrapper">
        <div className='line-study-component'>
            <h3>Project Details</h3>
            <Input className = "input" placeholder="User" />
            <Input className = "input" placeholder="Project" />
            <Input className = "input" placeholder="Location" />

        </div>
        <div className='line-study-component'>Line Study Info</div>   
        <Stopwatch/>
          <p>{data}</p>
        {/* <DataEntry/> */}
        {/* data entry */}
        <div className='line-study-component'>
            <Input placeholder="Input Form" onChange={this.updateInputField} />
            <Button onClick = {this.onClick} type="primary">Add Data</Button>  
        </div>
        {/* data list */}
        <div>
            {this.state.data.map(function(d, idx){
                 return (<li key={idx}>{d.value}</li>)
            })}
        </div>

    </div>
    )
}
}
export default lineStudy