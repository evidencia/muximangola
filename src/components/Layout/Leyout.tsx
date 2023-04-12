import React from 'react'
import { Header } from '../Header'
import { Routers } from '../../routes/Routers'
import { Footer } from '../Footer'

export function Leyout() {
  return (
    <div>
      <Header />

      <div>
        <Routers />
      </div>

      <Footer />
    </div>
  )
}
