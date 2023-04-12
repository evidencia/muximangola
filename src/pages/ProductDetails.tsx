
import { Container, Row, Col } from "reactstrap";
import { CommonSection } from "../components/UI/CommonSection";
import productImg from "../assets/images/fruta(4).png";

import {products} from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/UI/ProductCard";

import "../styles/common-section.css";
import "../styles/product-details.css";



export function ProductDetails() {

  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product?.image01);
  
  const category = product?.category;
  const relatedProduct = products.filter((item) => item.category === category);

  useEffect(() => {
    setPreviewImg(product?.image01);
  }, [product]);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
    <CommonSection  title="Produto"/>
      <section>
      <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images ">
                <div className="img__item mb-3" onClick={()=> setPreviewImg(product?.image01)}>
                  <img src={product?.image01} alt="" className="w-50" />
                </div>

                <div className="img__item mb-3" onClick={()=> setPreviewImg(product?.image02)}>
                  <img src={product?.image02} alt="" className="w-50" />
                </div>

                <div className="img__item" onClick={()=> setPreviewImg(product?.image03)}>
                  <img src={product?.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt=""  className="w-100"/>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="sigle_product-content">
                <h2 className="product__title">Banana</h2>
                <p className="product__price">{" "}
                 Preço: <span>$34</span>
                </p>

                <p className="categoryProduct mb-3">
                  Categoria: <span>Fruta</span>
                </p>

                <div className="d-flex align-content-center gap-3 mb-4 text-black">
                  Quantidade: 

                  <div className=" d-flex align-items-center justify-content-between increase__decrease">
                    <span className="increase__btn" >
                      <i className="ri-add-line"></i>
                    </span>
                    <span className="quantity">2</span>
                    <span className="decrease__btn" >
                      <i className="ri-subtract-line"></i>
                    </span>
                  </div>
                </div>

                <button className="addTOCart__btn">Adicionar no carrinho</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6 className="desc">
                  Descrição
                </h6>
              </div>

                <div className="tab__content">
                  <p>{product?.desc }</p>
                </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">você pode gostar também</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard imgUrl={item.image01} price={item.price} title={item.title} id={item.id} />
              </Col>
            ))}
          </Row>
        </Container>

      </section>
    </>
  )
}
