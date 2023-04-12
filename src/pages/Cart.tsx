import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { CommonSection } from '../components/UI/CommonSection'
import {products} from "../assets/fake-data/products";

import imgProduct from "../assets/images/fruta(1).png"
import "../styles/cart-page.css";

export function Cart() {
  const cartItems = products;
  return (
    <>
      <CommonSection title="O meu carrinho" />
      <section className='cart'>
        <Container>
          <Row>
            <Col lg="7" sm="12" md="12" xs="12" xl="7">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Carrinho está vazio</h5>
              ) : (
                <div className="tableCart">
                  <table >
                    <thead></thead>

                    <tbody>
                      {cartItems.map((product) => (
                        <tr key={product.id}>
                          <td className="text-center">
                            <img src={imgProduct} alt="" className=''/>
                          </td>
                          <td className="text-center">Goiaba</td>

                          <td className="text-center">
                            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
                              <span className="increase__btn" >
                                <i className="ri-subtract-line"></i>
                              </span>
                              <span className="quantity">2</span>
                              <span className="decrease__btn" >
                                <i className="ri-add-line"></i>
                              </span>
                            </div>
                          </td>
                          <td className="text-center amout">100,000,000kz</td>
                          
                          <td className="text-center cart__item-del">
                            <i className="ri-delete-bin-line"></i>
                          </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              </Col>

            <Col lg="5" sm="12" md="12" xs="12" xl="5">
              <div className="mt-2 subtotalcard">
                <h6 className='mb-3'>
                  Subtotal: $
                  <span className="cart__subtotal">233</span>
                </h6>
                <p className='mb-3'>Impostos e frete serão calculados na finalização da compra</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/products">Continue comprando</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Fazer o check-out</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

