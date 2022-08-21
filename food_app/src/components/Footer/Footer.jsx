import React, { useState } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/Footer.css'

import { Link } from 'react-router-dom'

const Footer = () => {
  const [enterName, setEnterName] = useState('')
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img
                src={logo}
                alt=''
              />
              <h5>Tasty Treat</h5>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Monday - Friday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Saturday - Sunday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Location</span>
                <p>England</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone</span>
                <p>0909123456</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email</span>
                <p>example@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Social Network</h5>
            <p className='footer__paragraph'>Subscribe your Social Network</p>
            <div className='newsletter'>
              <input
                type='email'
                placeholder='Enter your Email'
                onChange={(e) => setEnterName(e.target.value)}
                required
              />
              <span><i className='ri-send-plane-line'></i></span>
            </div>
          </Col>
        </Row>

        <Row className='mt-3 d-flex align-items-center justify-content-center'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
              Copyright - 2020, website made by Boom
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-item-center justify-content-end gap-4'>
              <p className='m-0 follow'>Follow:</p>

              <span className=''>
                <Link to='https://www.facebook.com'>
                  <i className='ri-facebook-line'></i>
                </Link>
              </span>

              <span className=''>
                <Link to='https://www.github.com'>
                  <i className='ri-github-line'></i>
                </Link>
              </span>

              <span className=''>
                <Link to='https://www.youtube.com'>
                  <i className='ri-youtube-line'></i>
                </Link>
              </span>

              <span className=''>
                <Link to='https://www.linkedin.com'>
                  <i className='ri-linkedin-line'></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer