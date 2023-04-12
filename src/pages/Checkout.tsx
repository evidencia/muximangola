import { Col, Container, Row } from 'reactstrap';
import { CommonSection } from '../components/UI/CommonSection';

import "../styles/checkout.css";

export function Checkout() {
  return (
    <div>
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Endereço para envio</h6>
              <form className="checkout__form">
                <div className="">
                  <input
                    type="text"
                    placeholder="Nome completo"
                  />
                </div>

                <div className="">
                  <input
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <div className="">
                  <input
                    type="number"
                    placeholder="Telefone"
                  />
                </div>

                <div className="">
                  <input
                    type="text"
                    placeholder="Municipio"
                  />
                </div>

                <div className="">
                  <input
                    type="text"
                    placeholder="Cidade"
                  />
                </div>

                <button type="submit" className="addTOCart__btn">
                  Pagamento
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>$203</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Frete: <span>$203</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>$340</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

