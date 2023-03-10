import React,{Component} from 'react';
import '../main.css'; 

export default  class Contact extends Component {  
  render() {      
    return(

        
        <div className='player-wrapper'>
            <div className={'contactheads'}>
            <h2>Contact us</h2>
            <div class="contactDiv1">

            <div class="discDiv">
                

                <p><span>Brand name : </span><span>Trekking shiled</span></p>
                <p><span>Manager - Marketing Team : </span><span>Bhuvanendran</span></p>
                <p><span>Phone : </span><span>7339661091</span></p>     
                {/* <p><span>Email : </span><span>sudhersenkavi@gmail.com</span></p>            */}
            </div>  

            {/* <div class="discDiv">
                <h3>Shipping details:</h3>
                <p>Products will be delivered within 8-10 business days. </p>
                <p>Shipping charges free for first order.</p>
                <p>Amount to be paid while checkout. </p>
                <p>COD currently unavailable.</p>
                <p>7 days return policy available.</p>
            </div> */}

                      

             </div>  
             </div>         
        </div>
         
    ) 
  }  
} 