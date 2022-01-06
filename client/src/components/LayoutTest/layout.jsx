
//this component is deprecated
import React, {Component} from 'react'
import "./layout.css"
class Layout extends Component{
state = {
    timingRunning: false,
    timeStamp: Date.now(),
    input: "",
    data: []
}

render(){
   return ( 
      <div className="layout-wrapper">
          <div className='layout-component'>1</div>
          <div className='layout-component'>2</div>
          <div className='layout-component'>3</div>
          <div className='layout-component'>4</div>
    </div>
    )
}
}
export default Layout