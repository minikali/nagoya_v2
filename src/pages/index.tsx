import Layout from '@/Layout'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
      <Jumbotron className="intro-block">
        <Carousel controls={false} pause={false}>
          {data.map((item) => {
            return (
              <Carousel.Item key={uuid()}>
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
      <Container className="presentation-block">
        <Row>
          <Col xs={12} md={6} className="presentation-img">
            <img src="images/sushi-chef.jpg" alt="Chef sushi" />
          </Col>
          <Col xs={12} md={6} className="presentation-txt">
            <h2>Bienvenue chez Nagoya</h2>
            <p>
              Nous vous proposons une cuisine japonaise traditionnelle et contemporaine dans un
              cadre chaleureux. Sur place, à emporter ou en livraison, dégustez nos savoureux makis,
              sushis, sashimis, brochettes et tempuras.
            </p>
            <p>
              Soucieux de la qualité de nos produits, nous sélectionnons des poissons ultra-frais et
              assurons un contrôle rigoureux des livraisons et des produits afin de vous satisfaire.
            </p>
          </Col>
        </Row>
      </Container>
      <style jsx global>
        {`
          .intro-block {
            padding: 0;
            margin: 0;
            height: calc(100vh - 70px);
          }
          .intro-block .carousel,
          .intro-block .carousel .carousel-inner,
          .intro-block .carousel .carousel-inner .carousel-item {
            height: 100%;
          }
          .intro-block .carousel .carousel-inner .carousel-item img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          .intro-block .carousel .carousel-inner .carousel-item .carousel-caption {
            width: 100%;
            padding: 20px 15px;
            top: 50%;
            left: 50%;
            right: unset;
            bottom: unset;
            transform: translate(-50%, -50%);
            font-family: 'ZillaSlab', serif;
          }
          .intro-block .carousel .carousel-inner .carousel-item .carousel-caption h3 {
            font-size: 28px;
            font-weight: 600;
          }
          .intro-block .carousel .carousel-inner .carousel-item .carousel-caption p {
            font-size: 20px;
          }
          .presentation-block {
            padding: 40px;
          }
          .presentation-block .presentation-img {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          .presentation-block .presentation-txt {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: 'ZillaSlab';
          }
          .presentation-block .presentation-txt h2 {
            font-size: 32px;
          }
          .presentation-block .presentation-txt p {
            font-size: 18px;
            line-height: 24px;
          }
          @media (min-width: 768px) {
            .intro-block .carousel .carousel-inner .carousel-item .carousel-caption h3 {
              font-size: 32px;
            }
            .intro-block .carousel .carousel-inner .carousel-item .carousel-caption p {
              font-size: 24px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default Home
