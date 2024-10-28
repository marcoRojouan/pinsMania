
import ProductBox from './components/ProductBox'
import ProductDetails from './components/ProductDetails'
import ProductFilter from './components/ProductFilter'
import data from "./assets/data/data.json"
import type { ProductType } from './lib/definitons'


function App() {

  const productList: ProductType[] = data;



  return (
    <>
      <ProductFilter />
      <ProductBox productList={productList} />
      <ProductDetails />

    </>
  )
}

export default App
