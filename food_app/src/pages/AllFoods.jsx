import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import products from '../assets/fake-data/products'
import ProductCard from '../UI/product-card/ProductCard'
import '../styles/AllFoods.css'
import '../styles/Pagination.css'

const AllFoods = () => {

  const [searchItem, setSearchItem] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

  const searchProduct = products.filter(item => {
    if (searchItem.value === '')
      return item
    if (item.title.toLowerCase().includes(searchItem.toLocaleLowerCase()))
      return item
  })

  const productPerPage = 6
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchProduct.slice(visitedPage, visitedPage + productPerPage)

  const pageCount = Math.ceil(searchProduct.length / productPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12' className=''>
              <div className="search__widget d-flex align-items-center justify-content-between w-50 mt-3">
                <input
                  type='text'
                  placeholder='Search what...!'
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <span><i class='ri-search-line'></i></span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' xs='12' className='mb-5 text-end mt-3'>
              <div className='sorting__widget'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value='ascending'>A-Z</option>
                  <option value='descending'>Z-A</option>
                  <option value='high-price'>High-price</option>
                  <option value='low-price'>Low-price</option>
                </select>
              </div>
            </Col>

            {
              displayPage
                .map((item) => (
                  <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                    {""}
                    <ProductCard item={item} />
                  </Col>
                ))
            }
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel='Prev'
                nextLabel='Next'
                containerClassName='paginationBttns'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods