import React, { useState, useEffect } from 'react'
import products from '../assets/fake-data/products'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import ProductCard from '../UI/product-card/ProductCard'
import '../styles/FoodDetails.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../strore/shopping-cart/cartSlice'

const FoodDetails = () => {

  const [tab, setTab] = useState('desc')

  const { id } = useParams()

  const product = products.find(product => product.id === id)
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')

  const [previewImg, setPreviewImg] = useState(product.image01)

  const { title, price, category, desc, image01 } = product

  const relatedProduct = products.filter(item => category === item.category)

  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01,
    }))
  }

  const submitHandler = (e) =>{
    e.prevenDefault()
    console.log(enteredName, enteredEmail, reviewMsg)
  }

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return (
    <Helmet title='Product-details'>
      <CommonSection title={title} />
      <section>
        <Container className='mt-3'>
          <Row>
            <Col lg='2' md='2'>
              <div className='product__images'>
                <div
                  className='img__item mb-2'
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt='productImg' className='w-50' />
                </div>
                <div
                  className='img__item mb-2'
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt='productImg' className='w-50' />
                </div>
                <div
                  className='img__item'
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt='productImg' className='w-50' />
                </div>
              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className='product__main-img'>
                <img src={previewImg} alt='' className='w-100' />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='single__product-content'>
                <h2 className='product__title mb-3'>{title}</h2>
                <p className='product__price'>
                  {''}
                  Price : <span>{price}</span>
                </p>
                <p className='product__category mb-5'>Category : <span>{category}</span></p>
                <button className='product__add' onClick={addItem}>Add to Cart</button>
              </div>
            </Col>

            <Col lg='12' md='12'>
              <div className='tabs d-flex align-items-center gap-5 py-3'>
                <h6
                  className={`${tab === 'desc' ? 'tab__active' : ''}`}
                  onClick={() => setTab('desc')}
                >Description</h6>
                <h6
                  className={`${tab === 'rev' ? 'tab__active' : ''}`}
                  onClick={() => setTab('rev')}
                >Review</h6>
              </div>
              {
                tab === 'desc' ?
                  (<div className='tab__content'>
                    <p>
                      {desc}
                    </p>
                  </div>) : (
                    <div className='tab__form mb-3 pt-3'>
                      <div className='review'>
                        <p
                          className='review__name mb-0'
                        >John Doe</p>
                        <p
                          className='review__email'
                        >John@gmail.com</p>
                        <p
                          className='feedback__text'
                        >Great Product</p>
                      </div>

                      <form className='form' onSubmit={submitHandler}>
                        <div className='form__group'>
                          <input
                            onChange={(e) => setEnteredName(e.target.value)}
                            type='text'
                            placeholder='Enter your name'
                            required
                          />
                        </div>
                        <div className='form__group'>
                          <input
                            type='text'
                            placeholder='Enter your email'
                            onChange={(e) => setEnteredEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className='form__group'>
                          <textarea
                            rows={5}
                            type='text'
                            placeholder='Enter your feedback'
                            onChange={(e) => setReviewMsg(e.target.value)}
                            required
                          />
                        </div>
                        <button type='submit' className='product__add'>Submit</button>
                      </form>
                    </div>
                  )
              }
            </Col>

            <Col lg='12' className='mb-5 mt-4'>
              <h2 className='related__product-title'>Regular look like</h2>
            </Col>
            {
              relatedProduct.map(item => (
                <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet >
  )
}

export default FoodDetails