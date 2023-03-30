import React,{Component} from 'react';
import '../main.css'; 

export default  class Contact extends Component {  
  render() {      
    return(

        
        <div className='outergrid'>
            <div className={'contactheads'}>
            <h2>Contact us</h2>
            <div class="contactDiv">

            <div class="discDiv">
                <h3>Seller Details</h3>
                <p><span>Seller name : </span><span>Marketing and sales team - Protego</span></p>
                <p><span>Phone : </span><span>9994599585 or 9944579774<b style={{color:"white"}}>ncjdwjjbjwvj</b>           </span></p>     
                <p><span>Email : </span><span>janarthananjegadesan@gmail.com</span></p>           
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