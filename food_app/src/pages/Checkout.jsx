import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/common-section/CommonSection'
import '../styles/Checkout.css'

const Checkout = () => {
  const [enterName, setEnterName] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterNumber, setEnterNumber] = useState('')
  const [enterCountry, setEnterCountry] = useState('')
  const [enterCity, setEnterCity] = useState('')
  const [enterCode, setEnterCode] = useState('')
  const cartAmount = useSelector((state) => state.cart.totalAmount)
  const shippingCost = 30
  const shippingInfo = []

  const totalAmount = cartAmount + Number(shippingCost)


  const sumbitHandler = (e) => {
    e.preventDefault()
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      number: enterNumber,
      country: enterCountry,
      city: enterCity,
      code: enterCode,
    }
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo)
  }
  return (
    <Helmet title='CheckOut'>
      <CommonSection title='CheckOut' />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mb-4'>Shipping Adress</h6>
              <form onSubmit={sumbitHandler} className='checkout__form'>
                <div className="form__group">
                  <input
                    type='text'
                    placeholder='Enter your name'
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type='text'
                    placeholder='Enter your email'
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type='text'
                    required
                    placeholder='Enter your country'
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type='number'
                    placeholder='Enter your number'
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type='text'
                    placeholder='Enter your city'
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type='number'
                    placeholder='Enter your code'
                    onChange={(e) => setEnterCode(e.target.value)}
                    required />
                </div>
                <button className='product__add'>
                  Payment
                </button>
              </form>
            </Col>

            <Col lg='4' md='6'>
              <div className='checkout__bill mt-3'>
                <h6
                  className='checkout__price d-flex align-item-center justify-content-between'
                >Subtotal: <span>${cartAmount}</span>
                </h6>
                <h6 className='mb-3 checkout__price d-flex align-item-center justify-content-between
                '>Shipping cost: <span>${shippingCost}</span></h6>
                <div className='checkout__total pt-3'>
                  <h5 className='d-flex align-item-center justify-content-between'>
                    Total: <span>${totalAmount}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout