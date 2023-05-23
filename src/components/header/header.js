import React,{Component} from 'react';
import './header.css'; 
import { Link } from "react-router-dom";
import axios from 'axios';

export default  class Header extends Component {  

  async funct(e){
    e.preventDefault();
    try {
      const response = await axios.get('http://3.109.203.162:8080/api/getenquiry');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  render() {      
    return(
      <div className={'heads'}>
        <img className='headingslogo' src={require("../assets/sslogo.jpeg")} alt=""/>
        <h3 className='headingsname'>Protego</h3>
        <div style={{margin:"auto",marginRight:"0px",marginTop:"35px"}}>
        <nav className='navBar'>
          <Link to="/home">Home</Link> |{" "}
          <Link to="about">About</Link> |{" "}
          {/* <Link to="about">Product</Link> |{" "} */}
          <Link to="partners">Partners</Link> |{" "}
          {/* <Link to="contact">Contact Us</Link> */}
        </nav>
        <button onClick={(e)=>this.funct(e)}>click me</button>
        </div>       
      </div>
    ) 
  }  
} 