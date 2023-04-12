import { Link } from "react-router-dom";

import "../../../styles/product-card.css";
import { New } from "../StateProduct/New";
import { Promotion } from "../StateProduct/Promotion";
import { SoldOff } from "../StateProduct/SoldOff";

interface ProductProps {
  id: string;
  title: string;
  imgUrl: string;
  price: number; 
}

export function ProductCard({id, title, imgUrl, price}: ProductProps) {

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={imgUrl} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/products/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between mb-2">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn">
            Adicionar
          </button>
        </div>
      </div>

      <Promotion />
    </div>
  );
}
