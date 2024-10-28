
import ProductBox from './components/ProductBox'
import ProductDetails from './components/ProductDetails'
import ProductFilter from './components/ProductFilter'
import data from "./assets/data/data.json"
import type { ProductType } from './lib/definitons'
import { useState } from 'react'


function App() {

  const productList: ProductType[] = data;
  const [productFilter, setProductFilter] = useState(productList)
  const [cartAdd, setCartAdd] = useState(productList)

  return (
    <main className='bg-slate-400'>
      <ProductFilter productList={productList} productFilter={productFilter} setProductFilter={setProductFilter} />
      <ProductBox productList={productFilter} />
      <ProductDetails productList={productList} />
    </main>
  )
}

export default App
