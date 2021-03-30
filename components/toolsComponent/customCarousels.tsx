import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';

export function AlertMessage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="alert-important">
      <Carousel.Item>
        <marquee>
          <span>Delano</span>
        </marquee>
      </Carousel.Item>
      <Carousel.Item>
        <marquee>
          <span>Roosvelt</span>
        </marquee>

      </Carousel.Item>
      <Carousel.Item>
        <marquee>
          <span>tydr</span>
        </marquee>
      </Carousel.Item>
      <Carousel.Item>
        <marquee>
          <span>berlin pro</span>
        </marquee>
      </Carousel.Item>
      <Carousel.Item>
        <marquee>
          <span>El professor</span>
        </marquee>
      </Carousel.Item>
    </Carousel>
  );
}

export function ImportantImage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="image-important">
      <Carousel.Item className="img-entity">
        <div className="card w-100" style={{ margin: "20px 0px" }}>
          <img src="/static/home.png" className="d-block card-img-top image-important-picture" alt="..." />
          <div className="text-information">
            <h5 className="card-title fs-10">Université de Yaoundé I</h5>
            <h3 className="fs-15">Departement d’Informatique</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-entity">
        <div className="card w-100" style={{ margin: "20px 0px" }}>
          <img src="/static/home.png" className="d-block card-img-top image-important-picture" alt="..." />
          <div className="text-information">
            <h5 className="card-title fs-10">Université de Yaoundé I</h5>
            <h3 className="fs-15">Departement d’Informatique</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-entity">
        <div className="card w-100" style={{ margin: "20px 0px" }}>
          <img src="/static/home.png" className="d-block card-img-top image-important-picture" alt="..." />
          <div className="text-information">
            <h5 className="card-title fs-10">Université de Yaoundé I</h5>
            <h3 className="fs-15">Departement d’Informatique</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-entity">
        <div className="card w-100" style={{ margin: "20px 0px" }}>
          <img src="/static/home.png" className="d-block card-img-top image-important-picture" alt="..." />
          <div className="text-information">
            <h5 className="card-title fs-10">Université de Yaoundé I</h5>
            <h3 className="fs-15">Departement d’Informatique</h3>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
