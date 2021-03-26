import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
  const [index: Number, setIndex: Function] = useState(0);

  const handleSelect = (selectedIndex: Number, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="alert-important">
      <Carousel.Item>
        <span>Delano</span>
      </Carousel.Item>
      <Carousel.Item>
        <span>Roosvelt</span>
      </Carousel.Item>
      <Carousel.Item>
        <span>tydr</span>
      </Carousel.Item>
      <Carousel.Item>
        <span>berlin pro</span>
      </Carousel.Item>
      <Carousel.Item>
        <span>El professor</span>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
