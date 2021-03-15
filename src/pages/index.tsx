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
      title: 'Un poisson ultra frais',
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
      <Container className="overflow-hidden p-0" fluid>
        <Container className="presentation-block">
          <Row>
            <Col xs={12} sm={6} className="presentation-txt">
              <h2>Bienvenue chez Nagoya</h2>
              <p>
                Venez goûter une cuisine japonaise traditionnelle et contemporaine dans un cadre
                chaleureux. Dégustez nos savoureux makis, sushis, sashimis, brochettes et tempuras.
              </p>
              <img className="bamboo" src="/images/bamboo.png" alt="Bamboo" />
            </Col>
            <Col xs={12} sm={6} className="presentation-img">
              <div className="wrapper">
                <img src="images/sushi-chef.jpg" alt="Chef sushi" />
              </div>
            </Col>
            <Col xs={12} sm={{ order: 2, span: 6 }} className="presentation-txt">
              <h2>La fraicheur au rendez-vous</h2>
              <p>
                Soucieux de la qualité de nos produits, nous sélectionnons des poissons ultra-frais
                et assurons un contrôle rigoureux des livraisons et des produits afin de vous
                satisfaire.
              </p>
              <img className="sakura" src="/images/sakura.png" alt="Bamboo" />
            </Col>
            <Col xs={12} sm={{ order: 1, span: 6 }} className="presentation-img">
              <div className="wrapper">
                <img src="images/sushi-chef.jpg" alt="Chef sushi" />
              </div>
            </Col>
          </Row>
        </Container>
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
          .intro-block .carousel .carousel-inner .carousel-item {
            position: relative;
          }
          .intro-block .carousel .carousel-inner .carousel-item .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
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
            font-family: 'Montserrat Alternates';
            text-shadow: 3px 2px 5px #000000;
          }
          .intro-block .carousel .carousel-inner .carousel-item .carousel-caption h3 {
            font-size: 28px;
            font-weight: 600;
          }
          .intro-block .carousel .carousel-inner .carousel-item .carousel-caption p {
            font-size: 20px;
          }
          @media (min-width: 768px) {
            .intro-block .carousel .carousel-inner .carousel-item .carousel-caption h3 {
              font-size: 32px;
            }
            .intro-block .carousel .carousel-inner .carousel-item .carousel-caption p {
              font-size: 24px;
            }
          }
          .presentation-block {
          }
          .presentation-block .presentation-img {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0;
          }
          .presentation-block .presentation-img .wrapper {
            height: 300px;
          }
          .presentation-block .presentation-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .presentation-block .presentation-txt {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            text-shadow: 3px 3px 10px #ffffff;
            padding: 60px 15px;
            overflow: hidden;
          }
          .presentation-block .presentation-txt h2 {
            font-size: 28px;
            font-family: 'Yeon Sung';
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 20px;
          }
          .presentation-block .presentation-txt p {
            font-size: 16px;
            font-family: 'Montserrat Alternates';
            font-weight: 600;
            text-align: center;
          }
          .presentation-block .presentation-txt img {
            position: absolute;
            z-index: -1;
          }
          .presentation-block .presentation-txt img.bamboo {
            right: 62%;
            top: -5%;
          }
          .presentation-block .presentation-txt img.sakura {
            right: -67%;
            top: -11%;
          }
          @media (min-width: 567px) {
            .presentation-block {
              padding: 0px 15px;
              max-width: unset;
            }
            .presentation-block .presentation-img .wrapper {
              height: 100%;
            }
            .presentation-block .presentation-txt {
              padding: 30px 15px;
            }
            .presentation-block .presentation-txt h2 {
              font-size: 32px;
            }
          }
          @media (min-width: 768px) {
          }
        `}
      </style>
    </Layout>
  )
}

export default Home
