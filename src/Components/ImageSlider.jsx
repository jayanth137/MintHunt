import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImageSlider() {
  return (
    <Carousel
      style={{ display: 'flex', justifyContent: 'center', aligItems: 'center' }}
    >
      <Carousel.Item interval={0}>
        <img
          src={require('../images/monkey.jpeg')}
          alt="First slide"
          style={{
            height: '90vh',
            width: '190vh',
            objectfit: 'cover',
            position: 'relative',
          }}
        />
        <Carousel.Caption>
          <h3>Top#1</h3>
          <h2>Bored Ape Yatch Club</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src={require('../images/123.jpeg')}
          alt="Second slide"
          style={{
            height: '90vh',
            width: '182vh',
            objectfit: 'cover',
            position: 'relative',
          }}
        />
        <Carousel.Caption>
          <h3>Top#2</h3>
          <h2>Queen of bewitch</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require('../images/173.jpeg')}
          alt="Third slide"
          style={{
            height: '90vh',
            width: '182vh',
            objectfit: 'cover',
          }}
        />
        <Carousel.Caption>
          <h3>Top#3 </h3>
          <h2>Narrow infinity</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
