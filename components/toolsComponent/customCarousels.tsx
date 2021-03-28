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

export function ImportantImage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="image-important">
      <Carousel.Item className="img-entity">
        <img src="/static/home.png" className="d-block card-img w-100 image-important-picture" alt="..." />
        <div className="text-information">
          <h5 className="card-title fs-10">Université de Yaoundé I</h5>
          <h3 className="fs-15">Departement d’Informatique</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-entity">
        <img src="/static/home.png" className="d-block card-img w-100 image-important-picture" alt="..." />
        <div className="text-information">
          <h5 className="card-title fs-10">Université de Yaoundé I</h5>
          <h3 className="fs-15">Departement d’Informatique</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-entity">
        <img src="/static/home.png" className="d-block card-img w-100 image-important-picture" alt="..." />
        <div className="text-information">
          <h5 className="card-title fs-10">Université de Yaoundé I</h5>
          <h3 className="fs-15">Departement d’Informatique</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-entity">
        <img src="/static/home.png" className="d-block card-img w-100 image-important-picture" alt="..." />
        <div className="text-information">
          <h5 className="card-title fs-10">Université de Yaoundé I</h5>
          <h3 className="fs-15">Departement d’Informatique</h3>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
