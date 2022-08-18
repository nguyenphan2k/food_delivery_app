import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import Category from '../UI/category/Category'
import heroImg from '../assets/images/hero.png'
import ProductCard from '../UI/product-card/ProductCard'

import products from '../assets/fake-data/products.js'

import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import whyImg from '../assets/images/location.png'

import networkImg from '../assets/images/network.png'

import TestimonialSlider from '../UI/slider/TestimonialSlider'

const homeData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: 'Fast Service about 15 minutes',
  },
  {
    title: 'Normal',
    imgUrl: featureImg02,
    desc: 'Normal Service about 25 minutes',
  },
  {
    title: 'Eco',
    imgUrl: featureImg03,
    desc: 'At Restaurant',
  },
]

const Home = () => {
  const [category, setCategory] = useState('ALL')
  const [allproducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products)
    }

    if (category === 'BURGER') {
      const filteredProducts = products.filter(n => n.category === 'Burger')
      setAllProducts(filteredProducts)
    }

    if (category === 'PIZZA') {
      const filteredProducts = products.filter(n => n.category === 'Pizza')
      setAllProducts(filteredProducts)
    }

    if (category === 'BREAD') {
      const filteredProducts = products.filter(n => n.category === 'Bread')
      setAllProducts(filteredProducts)
    }
  }, [category])
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <h5 className='mb-3 hero__food'>Food Delivery</h5>
                <h1 className='mb-4 hero__title'>
                  <span>HUNGRY?</span> Just wait flew <br /> minutes<span> at your home</span>
                </h1>
              </div>

              <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                <button className='hero__order d-flex align-items-center 
                justify-content-between'>
                  Order Now
                  <i className='ri-arrow-right-s-line'></i>
                </button>
                <button className='hero__link'>
                  <Link to=''>See all foods</Link>
                </button>
              </div>

              <div className='hero__service d-flex align-items-center gap-5 mt-3'>
                <p className='d-flex align-items-center gap-2'>
                  <span className='here__ship'>
                    <i className='ri-bike-line'></i>
                  </span>
                  Free ship about 5km
                </p>

                <p className='d-flex align-items-center gap-2'>
                  <span className='here__ship'>
                    <i className='ri-shield-check-line'></i>
                  </span>
                  100% secure checkout
                </p>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Category />
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='home__subtitle mb-4 mt-4 fw-bold'>WHAT WE SERVE</h5>
              <h2 className='home__title'>Your just sit at home</h2>
              <h2 className='home__title'>We wil <span> TAKE CARE</span></h2>
            </Col>
            {
              homeData.map((n, index) => (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                  <div className='home__items text-center px-5 py-3'>
                    <img src={n.imgUrl} className='w-25' />
                    <h3 className='fw-bold mb-3'>{n.title}</h3>
                    <p>{n.desc}</p>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>

            <Col lg='12'>
              <div className="home__category d-flex align-items-center justify-content-center gap-3">
                <button
                  className={`all__btn ${category === 'ALL' ? 'homeBtnActive' : ''}`}
                  onClick={() => setCategory('ALL')}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${category === 'BURGER'
                    ? 'homeBtnActive' : ''}`}
                  onClick={() => setCategory('BURGER')}
                >
                  <img src={foodCategoryImg01} alt='' />Buger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${category === 'PIZZA'
                    ? 'homeBtnActive' : ''}`}
                  onClick={() => setCategory('PIZZA')}
                >
                  <img src={foodCategoryImg02} alt='' />Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${category === 'BREAD'
                    ? 'homeBtnActive' : ''}`}
                  onClick={() => setCategory('BREAD')}
                >
                  <img src={foodCategoryImg03} alt='' />Bread
                </button>
              </div>
            </Col>

            {
              allproducts.map((item) => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='' className='w-100' />
            </Col>
            <Col lg='6' md='6'>
              <div className="home__why">
                <h2 className='home__why-title mb-2 mt-2'>The best Choice</h2>
                <p className='home__why-paragraph'>Delicious Food and Fantasty Restaurant</p>

                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='home__fresh d-flex align-items-center gap-2'>
                      <i class='ri-checkbox-circle-line'></i>
                      Fresh and Convinient Food
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='home__fresh d-flex align-items-center gap-2'>
                      <i class='ri-checkbox-circle-line'></i>
                      Quality number ONE
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='home__fresh d-flex align-items-center gap-2'>
                      <i class='ri-checkbox-circle-line'></i>
                      Order Now
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map((item) => (
                <Col lg='3' md='4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="home__testimonial mt-4">
                <h5 className="home__testimonial-subtitle mb-4">Testimonial</h5>
                <h2 className="home__testimonial-title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home