
import { createRoot } from 'react-dom/client'
import './index.css'
//import components
import Navbar from './assets/components/Navbar'
import Categories from './assets/components/Categories'
import Saleimg from './assets/components/Saleimg'
import Recommended from './assets/components/Recommended'
import Topics from './assets/components/Topics'
import Popular from './assets/components/Popular'
import Footer from './assets/components/Footer'


createRoot(document.getElementById('root')).render(
  <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Saleimg></Saleimg>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
  </div>
)
