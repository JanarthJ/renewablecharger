import React,{Component} from 'react';
import Carosel from '../carosel/carosel';
import Videos from '../videos/videos';
import Spec from '../specification/spec';
// import Contact from '../contactus/contact';

import './home.css'; 
import Fotter from '../footer/fotter';

export default class Home extends Component {  
  render() {      
    return(
      <div className={'outergrid'}>        
         <Carosel/>
         <Spec/>
         <Videos/>
         {/* <Contact/> */}
         <Fotter/>
      </div>
    ) 
  }  
} 