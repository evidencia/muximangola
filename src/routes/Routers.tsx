import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ProductDetails } from '../pages/ProductDetails';
import { Contact } from '../pages/Contact';
import { AllProducts } from '../pages/AllProducts';
import { History } from '../pages/history';
import { Profile } from '../pages/Profile';

export function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/products' element={<AllProducts/>} />
      <Route path='/products/:id' element={<ProductDetails/>} />

      <Route path='/cart' element={<Cart/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/history' element={<History/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  )
}
