
import ProductBox from './components/ProductBox'
import ProductDetails from './components/ProductDetails'
import ProductFilter from './components/ProductFilter'
import data from "./assets/data/data.json"
import type { ProductType } from './lib/definitons'


function App() {

  const productList: ProductType[] = data;

  return (
    <>
      <ProductFilter productListFilter={productList} />
      <ProductBox productListBox={productList} />
      <ProductDetails productListCart={productList} />
    </>
  )
}

export default App
