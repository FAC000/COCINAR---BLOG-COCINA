import Carousel from 'react-bootstrap/Carousel';

export function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
     <img src="./img/Comida3.webp" alt="" />
        <Carousel.Caption>
          <h3>Panes</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="./img/Comida2.jpg" alt="" />
        <Carousel.Caption>
          <h3>SALUDABLES</h3>

        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src="./img/Comida3.png" alt="" />  
        <Carousel.Caption>
          <h3>SALSAS</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
