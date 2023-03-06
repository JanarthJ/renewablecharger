import React,{Component} from 'react';
import '../main.css'; 

export default  class Videos extends Component {  
  render() {      
    return(

        
        <div className='player-wrapper'>
            <div className={'subheads'}>
            <h2>Working Demo</h2></div>
            <video autoPlay loop muted src={require("../assets/1.mp4")}  width={"600px"} height={"600px"} alt="no"/>            
        </div>
         
    ) 
  }  
} 