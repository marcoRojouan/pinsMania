import { ProductType } from "../lib/definitons";

export default function ProductFilter({ productList, productFilter, setProductFilter }: { productList: ProductType[], productFilter: ProductType[], setProductFilter: (product: ProductType[]) => void }) {
    const handleUsa = () => {
        setProductFilter(productList.filter((product) => product.category === "USA"))
    }
    const handleArt = () => {
        setProductFilter(productList.filter((product) => product.category === "ART"))
    }
    const handleFun = () => {
        setProductFilter(productList.filter((product) => product.category === "FUN"))
    }
    const handleAll = () => {
        setProductFilter(productList.filter((product) => product.id < 10))
    }
    console.log(productFilter)


    return (

        <section>
            <button type="button" onClick={handleUsa}>USA</button>
            <button type="button" onClick={handleArt}>ART</button>
            <button type="button" onClick={handleFun}>FUN</button>
            <button type="button" onClick={handleAll}>ALL</button>
        </section>
    )
}