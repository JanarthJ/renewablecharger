import React,{Component} from 'react';

import './about.css'; 

export default class About extends Component {  
  render() {      
    return(
      <div className={'outergrid'}>        
        
         <div classname='abdiv'> 
            <div className='abindiv'>
              <img className='ablogo' src={require("../assets/slogo.png")} alt=""/>
              <div className='abspe'><h1><b style={{color:"black"}}>Protego</b></h1><h2> is a company that purely serves people.</h2> <h3>Our mission is to provide people with high quality products.</h3><h4> Our tagline is <b>SAFE AND PROTECT</b></h4></div>
            </div>     
            <hr/>       
            <div className='abinndiv'>

              <div className='abgriddiv'>
                <div><h2>Our Director & CEO</h2></div>
                <div className='abimgdiv'><img className='abimgtag' src={require("../assets/jj.jpeg")} alt="JAN"></img></div>
                <div><h3>JANARTHANAN J</h3></div>
              </div>
              
              <div className='abgridboarddiv'>
                <div><h2>Our Board of Directors</h2></div>
                <div className='abboarddiv'>
                  <div className='abboardindiv'>
                    {/* <div><div className='abimgdiv'><img className='abimgtag' src={require("../assets/jj.jpeg")} alt="JAN"></img></div></div> */}
                    <div><h3>SUDERSUN D</h3></div>
                  </div>
                  <div className='abboardindiv'>
                    {/* <div><div className='abimgdiv'><img className='abimgtag' src={require("../assets/jj.jpeg")} alt="JAN"></img></div></div> */}
                    <div><h3>PRIYA VISHNU A S</h3></div>
                  </div>
                </div>
                
              </div>
            </div>
         </div>
      </div>
    ) 
  }  
} 