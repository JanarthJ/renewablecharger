import React,{Component} from 'react';
import Carosel from './carosel/carosel';
import Header from './header/header';
// import Videos from './videos/videos';
import Spec from './specification/spec';
import Contact from './contactus/contact';

import './main.css'; 

export default  class Main extends Component {  
  render() {      
    return(
      <div className={'outergrid'}>
         <Header/>
         <Carosel/>
         {/* <Spec/> */}
         {/* <Videos/> */}
         {/* <Contact/> */}
      </div>
    ) 
  }  
} 