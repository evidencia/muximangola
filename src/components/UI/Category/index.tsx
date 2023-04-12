import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import { BsArrowRight } from 'react-icons/bs';

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Frutas",
    imgUrl: categoryImg01,
  },
  {
    display: "Vegetais",
    imgUrl: categoryImg02,
  },

  {
    display: "Cereais",
    imgUrl: categoryImg03,
  },

  {
    display: "Tubérculo",
    imgUrl: categoryImg04,
  },
];

export function Category(){
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="6" sm="12" xs="12" className="category" key={index}>
            <div className="category__item" >
              <div className="category__details">
                <h6>{item.display}</h6>
                <button className="d-flex align-items-center gap-2 mt-4">
                  Ver
                  <BsArrowRight size={20}/>
                </button>
              </div>
              
              <div className="category__img d-flex">
                <div>
                  <img src={item.imgUrl} alt="category__item" />
                </div>
                <span></span>
              </div>
            </div>
          </Col>
            
        ))}
      </Row>
    </Container>
  );
}
