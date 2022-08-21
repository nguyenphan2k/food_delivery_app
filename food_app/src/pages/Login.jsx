import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {

  const LoginNameRef = useRef()
  const LoginPasswordRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <Helmet title='Login Page'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' className='m-auto text-center'>
              <form className='form mb-5 mt-4' onSubmit={submitHandler} >
                <div className="form__group">
                  <input type='email' placeholder='Email' required ref={LoginNameRef} />
                </div>
                <div className="form__group">
                  <input type='password' placeholder='Password' required ref={LoginPasswordRef} />
                </div>
                <button type='submit' className='product__add'>
                  Login
                </button>
              </form>
              <Link
                className='login__reg'
                to={'/register'}>
                Already have an account? <br /> <span>Create an account</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login