
import ProductBox from './components/ProductBox'
import ProductFilter from './components/ProductFilter'
import data from "./assets/data/data.json"
import type { ProductType } from './lib/definitons'
import { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'


function App() {

  const productList: ProductType[] = data;
  const [productFilter, setProductFilter] = useState(productList)


  return (
    <main className='bg-slate-300'>
      <NavBar />
      <ProductFilter productList={productList} productFilter={productFilter} setProductFilter={setProductFilter} />
      <ProductBox productList={productFilter} />
      <Footer />
    </main>
  )
}

export default App
