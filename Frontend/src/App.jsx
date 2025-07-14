import './App.css'
import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/SignupPage'
import Support from './landing_page/support/SupportPage'
import Products from './landing_page/products/ProductPage'
import Pricing from './landing_page/pricing/PricingPage'
import About from './landing_page/about/AboutPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />}> </Route>
          <Route path='/signup' element={<Signup />}> </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/support' element={<Support />}> </Route>
          <Route path='/products' element={<Products/>}> </Route>
          <Route path='/pricing' element={<Pricing/>}> </Route>
          <Route path='/*' element={<NotFound/>}> </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
