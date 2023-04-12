import { Link } from 'react-router-dom'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Category } from '../components/UI/Category';

import heroImg from "../assets/images/hero-1.png";


import whyImg from "../assets/images/carrinho.png";
import networkImg from "../assets/images/ch.jpg";

import { products } from "../assets/fake-data/products";

import {BsArrowRight} from 'react-icons/bs'

import "../styles/hero-section.css";
import "../styles/home.css";

import { ProductCard } from '../components/UI/ProductCard';
import { useEffect, useState } from 'react';
import { TestimonialSlider } from '../components/UI/Slider/TestimonialSlider';
import { Services } from '../components/Services';
import { AdvertisingBanner } from '../components/UI/AdvertisingBanner';

export function Home() {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);

  const [relatedProduct, setRelatedProduct] = useState(products);

  useEffect(() => {
    const filteredProduct = products.filter((item) => item.category === "Frutas");
    const sliceProduct = filteredProduct.slice(0, 4);
    setRelatedProduct(sliceProduct);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "VEGETAIS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Vegetais"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "TOBERCULO") {
      const filteredProducts = products.filter(
        (item) => item.category === "Toberculo"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "CEREAIS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cereais"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "FRUTAS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Frutas"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <>
      <section className='banner'>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h1 className="mb-4 hero__title">
                  Obtenha a melhor mercearia 
                  
                  <span className='px-1'>fresca</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <Link to="/products" className="order__btn d-flex align-items-center justify-content-between gap-2">
                    Ver todos os produtos
                    <BsArrowRight size={22}/>
                  </Link>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    Sem taxa de envio
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% compras segura
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>  

      <section>
        <Services />
      </section>
      
      <section className='pt-0'>
        <Category />
      </section> 

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Produtos</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Todos
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "FRUTAS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("FRUTAS")}
                >
                  Frutas
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "VEGETAIS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("VEGETAIS")}
                >
                  Vegetais
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CEREAIS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CEREAIS")}
                >
                  Cereais
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "TOBERCULO" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("TOBERCULO")}
                >
                  Tubérculo
                </button>

              </div>
            </Col>

            {allProducts.map((product) => (
              <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mt-5">
                <ProductCard imgUrl={product.image01} id={product.id} price={product.price} title={product.title} key={product.id} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                Por que <span>Fazenda-Muximangola?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Alimentos frescos e saborosos
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Suporte de qualidade
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i>Preço baixo{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <AdvertisingBanner />
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Frutas freca</h2>
            </Col>

            {relatedProduct.map((product) => (
              <Col lg="3" md="4" sm="6" xs="6" key={product.id} className='mb-4'>
                <ProductCard imgUrl={product.image01} id={product.id} price={product.price} title={product.title} key={product.id} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" xs="12">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testemunho</h5>
                <h2 className="testimonial__title mb-4">
                O que nossos <span>clientes</span> estão dizendo
                </h2>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6" className='testimonial__img'>
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
