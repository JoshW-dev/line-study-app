import React, {Component} from 'react'
import {  Button, Input, Statistic  } from 'antd';
import { Components } from 'antd/lib/date-picker/generatePicker';

const { Countdown } = Statistic;    
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

class lineStudy extends Component{
state = {
    input: "",
    data: []
}
onClick = () => {
    console.log("button clicked")
    var newData = {id: 0, value: this.state.input}
    this.setState({input: ""})    
    this.setState({data: [...this.state.data, newData]});
}
updateInputField = (e)=>{
    this.setState({input: e.target.value})
}
render(data){
   return ( 
      <div className="line-study-wrapper">
        
           <div className = "white">
           <Countdown className = "white" title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
          
            </div> 
          Test wrapper componenent
          <p>{data}</p>
          <Input placeholder="Input Form" onChange={this.updateInputField} />
          <Button onClick = {this.onClick} type="primary">Do Line Study</Button>
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