import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import '../../styles/Carts.css'
import { useDispatch, useSelector } from 'react-redux'

import { cartUiActions } from '../../strore/shopping-cart/cartUiSlice'



const Cart = () => {


     const cartProducts = useSelector((state) => state.cart.cartItems)

     const dispatch = useDispatch()

     

     const toggleCart = () => {
          dispatch(cartUiActions.toggle())
     }


     return (
          <div className='cart__container'>
               <ListGroup className='cart'>
                    <div className='cart__close' onClick={toggleCart}>
                         <span><i class='ri-close-fill'></i></span>
                    </div>
                    <div className='cart__item-list'>
                         {
                              cartProducts.length === 0
                                   ? (<h6 className='text-center'>No item add to list</h6>)
                                   : (cartProducts.map((item, index) => (
                                        <CartItem key={index} item={item} />
                                   )))
                         }

                    </div>
                    <div className='cart__bottom align-items-center d-flex justify-content-between'>
                         <h6>Subtotal amount: <span></span></h6>
                         <button><Link to='/checkout' onClick={toggleCart}>CheckOut</Link></button>
                    </div>
               </ListGroup>
          </div>
     )
}

export default Cart