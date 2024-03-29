import React,{Component} from 'react';
import './header.css'; 
import { Link } from "react-router-dom";

export default  class Header extends Component {  
  render() {      
    return(
      <div className={'heads'}>
        <img className='headingslogo' src={require("../assets/bag/slogo.png")} alt=""/>
        <h3 className='headingsname'>SpecHive</h3>
        <div style={{margin:"auto",marginRight:"0px"}}>
        <nav className='navBar'>
          <Link to="/home">Home</Link> |{" "}
          <Link to="about">About</Link> |{" "}
          <Link to="about">Product</Link> |{" "}
          <Link to="about">Partners</Link> |{" "}
          <Link to="contact">Contact Us</Link>
        </nav>
        </div>       
      </div>
    ) 
  }  
} 