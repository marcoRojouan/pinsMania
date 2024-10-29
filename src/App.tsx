
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


  const productDetails: string[] = productList.map((p) => p.details)
  const [currentDetail, setCurrentDetails] = useState(productDetails[0])




  return (
    <main className='bg-slate-300'>
      <NavBar />
      <ProductFilter productList={productList} productFilter={productFilter} setProductFilter={setProductFilter} />
      <article className="flex justify-between items-center ">
        <ProductBox productList={productFilter} productDetails={productDetails} currentDetail={currentDetail} setCurrentDetails={setCurrentDetails} />
        <ProductDetails currentDetail={currentDetail} />
      </article>
      <Footer />
    </main>
  )
}

export default App
