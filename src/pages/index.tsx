import Layout from '@/Layout'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Home: React.FC = () => {
  return (
    <Layout>
      <Jumbotron className="presentation-block">
        <Carousel interval={null}>
          <Carousel.Item>
            <div className="overlay"></div>
            <img src="images/sushi_on_rolling_mat.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay"></div>

            <img src="images/ramen.jpg" alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay"></div>

            <img src="images/sushi_maki_combo.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay"></div>

            <img src="images/torikatsu.jpg" alt="Fourth slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
      <style jsx global>
        {`
          .presentation-block {
            padding: 0;
            margin: 0;
            height: calc(100vh - 70px);
          }
          .presentation-block .carousel,
          .presentation-block .carousel .carousel-inner,
          .presentation-block .carousel .carousel-inner .carousel-item {
            height: 100%;
          }
          .presentation-block .carousel .carousel-inner .carousel-item {
            position: relative;
          }
          .presentation-block .carousel .carousel-inner .carousel-item .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(50, 50, 50, 0.3);
          }
          .presentation-block .carousel .carousel-inner .carousel-item img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </Layout>
  )
}

export default Home
