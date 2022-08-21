import React from 'react'
import CommonSection from '../UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../strore/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='Cart'>
      <CommonSection title='Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {
                cartItems.length === 0 ? <h5 className='text-center'>Cart is empty</h5> :
                  (
                    <table className='table table-bordered mt-3'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Title</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cartItems.map(item => (
                            <Tr item={item} key={item.id} />
                          ))
                        }
                      </tbody>
                    </table>
                  )
              }
              <div className='mt-4'>
                <h6>Subtotal: {''}
                  <span className='cart__subtotal'>${}</span>
                </h6>
              </div>
              <div className='cart__page-btn'>
                <button className='product__add product__btn me-4'>
                  <Link to={'/foods'}>
                    Continue to Shop
                  </Link>
                </button>
                <button className='product__add product__btn'>
                  <Link to={'/checkout'}>
                    Proceed to checkout
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return <tr>
    <td className='text-center cart__img-box'>
      <img src={image01} alt='image01' />
    </td>
    <td className='text-center'>{title}</td>
    <td className='text-center'>{price}</td>
    <td className='text-center'>{quantity}px</td>
    <td className='text-center cart__item-detele'>
      <i class='ri-delete-bin-line' onClick={removeItem}></i>
    </td>
  </tr>
}

export default Cart