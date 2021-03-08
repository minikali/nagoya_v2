import Layout from '@/Layout'
import React from 'react'
import { Carousel, Jumbotron } from 'react-bootstrap'
import styles from '../styles/Home.module.scss'

const Home: React.FC = () => {
  return (
    <Layout>
      <Jumbotron className={styles.jumbotron}>
        <Carousel className={styles.carousel} interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/img/sushi_on_rolling_mat.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="assets/img/ramen.jpg" alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/img/sushi_maki_combo.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="assets/img/torikatsu.jpg" alt="Fourth slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
    </Layout>
  )
}

export default Home
