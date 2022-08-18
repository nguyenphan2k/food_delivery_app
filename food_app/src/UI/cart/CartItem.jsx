import React from 'react'
import { ListGroupItem } from 'reactstrap'
import '../../styles/CartItem.css'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../strore/shopping-cart/cartSlice'



const CartItem = ({ item }) => {

     

     const dispatch = useDispatch()

     const upItem = () => {
          dispatch(cartActions.addItem(
               {
                    id,
                    title,
                    price,
                    image01,
               }
          ))
     }

     const deleteItem = () => {
          dispatch(cartActions.removeItem(id))
     }

     const removeProduct = () =>{
          dispatch(cartActions.deleteItem(id))
     }

     const { id, title, price, image01, quantity, totalPrice } = item
     return (
          <ListGroupItem
               className='border-0 cart__item'>
               <div className='cart__item-info d-flex gap-2'>
                    <img src={image01} alt='' />
                    <div className="cart__product-info d-flex align-items-center 
                    justify-content-between gap-4 w-100">
                         <div>
                              <h6 className='cart__product-name'>{title}</h6>
                              <p className='d-flex align-items-center gap-4 cart__product-price'>
                                   {quantity}x <span>${totalPrice}</span>
                              </p>
                              <div className='d-flex align-items-center gap-3 justify-content-between 
                              cart__product-item'>
                                   <span
                                        className='cart__circle'
                                        onClick={upItem}>
                                        <i class='ri-add-line'></i>
                                   </span>
                                   <span className='cart__price'>{quantity}</span>
                                   <span
                                        className='cart__circle'
                                        onClick={deleteItem}>
                                        <i class='ri-subtract-line'></i>
                                   </span>
                              </div>
                         </div>
                         <span
                              className='delete__btn'
                              onClick={removeProduct}
                         >
                              <i class='ri-close-line'></i>
                         </span>
                    </div>
               </div>
          </ListGroupItem>
     )
}

export default CartItem