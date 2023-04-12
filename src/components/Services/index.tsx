import { Col, Container, Row } from 'reactstrap';
import { Storefront, ShoppingCart, Headphones, Car} from 'phosphor-react'

import { TiShoppingCart } from 'react-icons/ti';
import { GiPaperBagOpen } from 'react-icons/gi';
import { FaCarSide } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';


import '../../styles/services.css';

const servicesData = [
  {
    display: "Productos",
    title: "Produtos de qualidade",
    icon: GiPaperBagOpen,
  },

  {
    display: "Valor do carrinho",
    title: "Revise seu carrinho",
    icon: TiShoppingCart,
  },

  {
    display: "Entrega rápida",
    icon: FaCarSide,
    title: "Dentro de 2-3 horas após o pedido",
  },

  {
    display: "Support",
    title: "Preocupações e dúvidas",
    icon: BiSupport,
  },
];

export function Services() {
  return (
    <Container>
      <div className="mb-5 d-flex justify-content-between align-content-center  services" >

        {servicesData.map((service) =>{
          return (
            <div key={service.display} className=" services-card d-flex align-content-center gap-3" >
              <service.icon size={40} />
                
              <div className='service-datails' >
                <h4>{service.display}</h4>
                <p>{service.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Container>

  )
}
