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
                <p> A smart band that makes the wearer to feel safe from the threat of snakes</p>
            </div>

            <div class="discDiv">
                <h3>Product specification</h3>
                <p><span>It consists of a signal generating circuit.</span></p>
                <p><span>It is attached with a wearable elastic band.</span></p>
                <p><span>Total voltage requirement: Up to 15v</span></p>
                <p><span>It has inbuilt Lithium ion battery with USB port to recharge it.</span></p>
             
            </div>

            <div class="discDiv">
                <h3>Package details</h3>
                <p><span>Snake repellent  - </span><span>1 unit</span></p>
                <p><span>USB & micro USB connector - </span><span>1 unit</span></p>               
            </div>            

            </div>           
        </div>
         
    ) 
  }  
} 