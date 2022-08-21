import React, {useRef} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Register = () => {
  const signupNameRef = useRef()
  const signupEmailRef = useRef()
  const signupPasswordRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <Helmet title='SignUp Page'>
      <CommonSection title='SignUp' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' className='m-auto text-center'>
              <form className='form mb-5 mt-4' onSubmit={submitHandler} >
                <div className="form__group">
                  <input type='text' placeholder='Full Name' required ref={signupNameRef} />
                </div>
                <div className="form__group">
                  <input type='email' placeholder='Email' required ref={signupEmailRef} />
                </div>
                <div className="form__group">
                  <input type='password' placeholder='Password' required ref={signupPasswordRef} />
                </div>
                <div className="form__group">
                  <input type='password' placeholder='Password Again' required ref={signupPasswordRef} />
                </div>
                <button type='submit' className='product__add'>
                  Register
                </button>
              </form>
              <Link
                className='login__reg'
                to={'/login'}>
                Don't have an account? <br /> <span>Login</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register