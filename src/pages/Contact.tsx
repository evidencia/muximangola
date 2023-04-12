import React from 'react'
import { CommonSection } from '../components/UI/CommonSection'
import '../styles/contact.css';
import { Container } from 'reactstrap';
import {EnvelopeSimple, MapPin, Phone } from 'phosphor-react';

export function Contact() {
  return (
    <div>
      <CommonSection title="Contactos" />

      <Container> 
        <div className="contact my-5">
          <div className='text-center'>
            <Phone size={34}/>

            <h5>Telefone</h5>
            <p>Sinta-se livre para contactar.</p>
            <a href='tel:944113252'>+244 944113252</a>
          </div>

          <div className='text-center'>
            <EnvelopeSimple size={34}/>
            <h5>Email</h5>
            <p>Respondemos o mais breve possivel.</p>
            <a href='mailto:'>example@gmail.com</a>
          </div>

          <div className='text-center'>
            <MapPin size={34} />
            <h5>Cidade do Kilamba</h5>
            <p>Edifício P-17, 8º Andar, Apartamento 82</p>
            <a href='#'>Ver no Google Maps</a>
          </div>
        </div>
      </Container>
      
    </div>
  )
}
