import { Col, Container, Row } from "reactstrap";
import { CommonSection } from "../components/UI/CommonSection";
import { Eye, X } from "phosphor-react";

import {products} from "../assets/fake-data/products";

import imgProduct from "../assets/images/fruta(1).png"


import "../styles/history.css";
import * as Dialog from '@radix-ui/react-dialog';

export function History() {
  return (
    <div>
      <CommonSection title="Histórico de compra" />
      <section className="history">
        <Container>
          <Row>
            <Col lg="12">
              {products.length === 0 ? (
                <h5 className="text-center">Nenhuma compra efetuada</h5>
              ) : (
                <table className="">
                  <thead>
                    <tr>
                      <th>Referência</th>
                      <th>Data</th>
                      <th>Item</th>
                      <th>Total</th>
                      <th>ver</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="text-center cart__img-box">012344</td>
                        <td className="text-center justify-content-center d-flex align-items-center">03-04-2023</td>
                        <td className="text-center">4</td>
                        <td className="text-center">10.000,00kz</td>
                        <td className="text-center">
                          <Dialog.Root>
                            <Dialog.Trigger asChild>
                              <button className="button">
                                <Eye size={20}/>
                              </button>
                            </Dialog.Trigger>
                  
                            <Dialog.Portal>
                              <Dialog.Overlay className="DialogOverlay" />
                  
                              <Dialog.Content className="DialogContent">
                                <Dialog.Title className="DialogTitle">Compra efetuada</Dialog.Title>
                                <table className="table table-bordered mt-4">
                                    <thead>
                                      <tr>
                                        <th>Imagem</th>
                                        <th>Produto</th>
                                        <th>Quantidade</th>
                                        <th>Preço</th>
                                      </tr>
                                    </thead>
                                    
                                    <tbody>
                                      <tr>
                                        <td><img src={imgProduct} alt="" /></td>
                                        <td className="text-center">Goiaba</td>
                                        <td className="text-center">2</td>
                                        <td className="text-center">200 kz</td>
                                      </tr>
                                    </tbody>
                                </table>
                  
                                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                  <Dialog.Close asChild>
                                    <button className="Button green">Sair</button>
                                  </Dialog.Close>
                                </div>
                                <Dialog.Close asChild>
                                  <button className="IconButton" aria-label="Close">
                                    <X />
                                  </button>
                                </Dialog.Close>
                              </Dialog.Content>
                            </Dialog.Portal>
                          </Dialog.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </section>      
    </div>
  )
}

