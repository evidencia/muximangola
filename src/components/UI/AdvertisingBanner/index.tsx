import { Container } from "reactstrap";
import "../../../styles/advertising-banner.css";

import bannerImg from '../../../assets/images/banner.png'

export function AdvertisingBanner() {
  return (
    <Container>
      <div className='bannerPublic'>
        
          <img src={bannerImg} alt="" />

          <div className="conteudo">
            <p>PROMOÇÃO NOS PRODUTOS ASSINALADOS DE 5 A 10 DE ABR</p>
            <h5>Até 30% desconto direto</h5>
          </div>

          <button>Ver produtos</button>
      </div>
    </Container>

  )
}
