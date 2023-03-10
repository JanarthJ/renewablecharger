import React,{Component} from 'react';
import '../main.css'; 

export default  class Header extends Component {  
  render() {      
    return(
      <div className={'heads'}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 5fr"}}>
        <img src={require("../assets/logo.png")} alt="logo" height={"90px"}></img>
         <div style={{margin:"auto",marginRight:"2rem"}}>Welcome to our Trekking shiled!</div>  
        </div>
               
      </div>
    ) 
  }  
} 