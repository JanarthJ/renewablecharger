import React,{Component} from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default  class Carosel extends Component {  
        constructor(props){
            super();
            
        }
      
  render() {      
    return(
        <div>
        

    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={5}
        isPlaying={true}
        interval={3000}
        infinite={true}
      >
        <Slider>
          <Slide index={2}><img height={"100%"} width={"50%"} src={require("../assets/bag/1.jpeg")} alt="1"/></Slide>
          <Slide index={0}><img height={"100%"} width={"50%"} src={require("../assets/bag/2.jpeg")} alt="2"/></Slide>
          <Slide index={1}><img height={"100%"} width={"50%"} src={require("../assets/bag/3.jpeg")} alt="3"/></Slide>
          <Slide index={4}><img height={"100%"} width={"50%"} src={require("../assets/bag/4.jpeg")} alt="4"/></Slide>
          {/* <Slide index={5}><img height={"100%"} width={"50%"} src={require("../assets/bag/5.jpeg")} alt="5"/></Slide> */}
        </Slider>
      </CarouselProvider>
    </div>
    ) 
  }  
} 