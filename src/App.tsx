
import ProductBox from './components/ProductBox'
import ProductFilter from './components/ProductFilter'
import data from "./assets/data/data.json"
import type { ProductType } from './lib/definitons'
import { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import ProductDetails from './components/ProductDetails'



function App() {

  const productList: ProductType[] = data;
  const [productFilter, setProductFilter] = useState(productList)
  const [detailsMenu, setDetailsMenu] = useState(productList.filter((item) => item.description)


  return (
    <main className='bg-slate-300'>
      <NavBar />
      <ProductFilter productList={productList} productFilter={productFilter} setProductFilter={setProductFilter} />
      <article>
        <ProductBox productList={productFilter} />
        <ProductDetails />
      </article>
      <Footer />
    </main>
  )
}

export default App
