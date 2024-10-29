import { ProductType } from "../lib/definitons";
import ProductCard from "./ProductCard";


export default function ProductBox({ productList, productDetails, currentDetail, setCurrentDetails }: { productList: ProductType[], productDetails: string[], currentDetail: string, setCurrentDetails: (product: string) => void }) {
    return (
        <section className="ml-8 mt-8 pb-16 flex justify-evenly flex-wrap gap-7 w-360">
            {productList.map((product) => (<ProductCard product={product} key={product.id} productDetails={productDetails} currentDetail={currentDetail} setCurrentDetails={setCurrentDetails} />))}
        </section>


    )
}