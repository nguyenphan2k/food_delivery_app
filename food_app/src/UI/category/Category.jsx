import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import category_01 from '../../assets/images/category-01.png'
import category_02 from '../../assets/images/category-02.png'
import category_03 from '../../assets/images/category-03.png'
import category_04 from '../../assets/images/category-04.png'
import '../../styles/Category.css'

const categoryData = [
     {
          id: 1,
          display: 'Fast Food',
          img: 'category_01',
     },
     {
          id: 2,
          display: 'Pizza',
          img: 'category_02',
     },
     {
          id: 3,
          display: 'Asian Food',
          img: 'category_03',
     },
     {
          id: 4,
          display: 'Row Meat',
          img: 'category_04',
     },
]
const Category = () => {
     return (
          <Container>
               <Row>
                    {
                         categoryData.map(item => (
                              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                                   <div
                                        className='category__item d-flex align-items-center gap-3'
                                   >
                                        <div className='category__img'>
                                             <img src={item.img}/> 
                                        </div>
                                        <h6>{item.display}</h6>
                                   </div>
                              </Col>
                         ))
                    }
               </Row>
          </Container>
     )
}

export default Category