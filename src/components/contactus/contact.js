import React,{Component} from 'react';
import '../main.css'; 

export default  class Contact extends Component {  
  render() {      
    return(

        
        <div className='player-wrapper'>
            <div className={'contactheads'}>
            <h2>Contact us</h2>
            <div class="contactDiv">

            <div class="discDiv">
                <h3>Seller Details</h3>
                <p><span>Seller name : </span><span>Sudhersun</span></p>
                <p><span>Founder , snake repallent startup</span></p>
                <p><span>Phone : </span><span>9994599585</span></p>     
                <p><span>Email : </span><span>sudhersenkavi@gmail.com</span></p>           
            </div>  

            <div class="discDiv">
                <h3>Shipping details:</h3>
                <p>Products will be delivered within 8-10 business days. </p>
                <p>Shipping charges free for first order.</p>
                <p>Amount to be paid while checkout. </p>
                <p>COD currently unavailable.</p>
                <p>7 days return policy available.</p>
            </div>                     

             </div>  
             </div>         
        </div>
         
    ) 
  }  
} 