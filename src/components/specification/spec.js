import React,{Component} from 'react';
import '../main.css'; 

export default  class Spec extends Component {  
  render() {      
    return(

        
        <div className='player-wrapper'>
            <div className={'subheads'}>
            <h2>Specification</h2></div>
            <div class="discDiv">
            <div class="disDiv">
                <h3>Description</h3>
                <p></p>
            </div>

            <div class="discDiv">
                <h3>Product specification</h3>
                <p><span>Input : </span><span>Micro USB</span></p>
                <p><span>Output : </span><span> Two USB ports</span></p>
                <p><span>Output values : </span><span>5v/ 2.1A</span></p>
                <p><span>Price : </span><span>Rs.700 per unit</span></p>
                <p><span>Input : </span><span>Micro</span></p>
            </div>

            <div class="discDiv">
                <h3>Package details</h3>
                <p><span>Renewable charger - </span><span>1 unit</span></p>
                <p><span>USB & micro USB connector - </span><span>1 unit</span></p>               
            </div>            

            </div>           
        </div>
         
    ) 
  }  
} 