import Layout from '@/Layout'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { v4 as uuid } from 'uuid'
const Home: React.FC = () => {
  const data = [
    {
      image: 'images/sushi_on_rolling_mat.jpg',
      alt: undefined,
      title: 'Un poisson frais',
      subtitle: 'préparer tous les matins',
      button: {
        link: undefined,
        label: 'Commander',
      },
    },
    {
      image: 'images/ramen.jpg',
      title: 'Des soupes traditionelles',
      subtitle: 'à vous réchauffer le coeur',
      button: {
        link: undefined,
        label: 'Commander',
      },
    },
    {
      image: 'images/sushi_maki_combo.jpg',
      title: 'Un chef passionné',
      subtitle: 'pour vous servir ses meilleurs plats',
      button: {
        link: undefined,
        label: 'Commander',
      },
    },
    {
      image: 'images/torikatsu.jpg',
      title: 'Un poulet croquant',
      subtitle: 'pour vous en mettre plein la bouche',
      button: {
        link: undefined,
        label: 'Commander',
      },
    },
  ]
  return (
    <Layout>
      <Jumbotron className="presentation-block">
        <Carousel controls={false} pause={false}>
          {data.map((item) => {
            return (
              <Carousel.Item key={uuid()}>
                <div className="overlay"></div>
                <img src={item.image} alt={item.alt} />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
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
          .presentation-block .carousel .carousel-inner .carousel-item .carousel-caption {
            width: 100%;
            padding: 20px 15px;
            top: 50%;
            left: 50%;
            right: unset;
            bottom: unset;
            transform: translate(-50%, -50%);
            font-family: 'ZillaSlab', serif;
          }
          .presentation-block .carousel .carousel-inner .carousel-item .carousel-caption h3 {
            font-size: 28px;
            font-weight: 600;
          }
          .presentation-block .carousel .carousel-inner .carousel-item .carousel-caption p {
            font-size: 20px;
          }

          @media (min-width: 768px) {
            .presentation-block .carousel .carousel-inner .carousel-item .carousel-caption h3 {
              font-size: 32px;
            }
            .presentation-block .carousel .carousel-inner .carousel-item .carousel-caption p {
              font-size: 24px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default Home
