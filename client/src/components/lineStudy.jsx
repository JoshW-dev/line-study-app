import React, {Component} from 'react'
import {  Button  } from 'antd';
import { Components } from 'antd/lib/date-picker/generatePicker';
import lineStudyImage from '../images/lineStudyTemplate.png'

class lineStudy extends Component{
onClick = () => {
    console.log("button clicked")
}
render(data){
   return ( 
      <div className="line-study-wrapper">
        
          Test wrapper componenent
          <p>{data}</p>
          <Button onClick = {this.onClick} type="primary">Do Line Study</Button>
    </div>
    )
}
}
export default lineStudy