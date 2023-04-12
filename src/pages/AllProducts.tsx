
import { Col, Container, Row } from 'reactstrap'
import { CommonSection } from '../components/UI/CommonSection'
import { ProductCard } from '../components/UI/ProductCard'
import ReactPaginate from 'react-paginate'

import "../styles/all-foods.css";
import "../styles/pagination.css";

import {products} from '../assets/fake-data/products';

export function AllProducts() {
  return (
    <>
      <CommonSection  title='Todos produtos'/>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="Estou procurando por...."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            
            {products.map((product) => (
              <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                <ProductCard id={product.id} price={product.price} title={product.title} imgUrl={product.image01}/>
              </Col>
            ))}


            <div>
              <ReactPaginate
                pageCount={2}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>

          </Row>
        </Container>
      </section>
    </>
  )
}
