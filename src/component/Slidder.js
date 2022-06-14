import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slidder() {
  return (
    <div className="carousel carousel-wrapper">
            <Carousel autoPlay={true}
          showArrows={true}
          infiniteLoop={true}
          interval={5000}
          stopOnHover={false}
          showThumbs={false}
          showStatus={true}
          showIndicators={true}>
                <div>
                    <img src="pic1.jpeg" alt="Loading Error"/>
                </div>
                <div>
                    <img src="pic2.jpeg" alt="Loading Error"/>
                </div>
                <div>
                    <img src="pic3.jpeg" alt="Loading Error"/>
                </div>
                <div>
                    <img src="pic4.jpeg" alt="Loading Error"/>
                </div>
                <div>
                    <img src="pic5.jpeg" alt="Loading Error"/>
                </div>
            </Carousel>
        </div>
  );
}

export default Slidder;
