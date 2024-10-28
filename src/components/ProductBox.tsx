import { ProductType } from "../lib/definitons";
import ProductCard from "./ProductCard";

export default function ProductBox({ productList }: { productList: ProductType[] }) {

    return (
        <article>
            {productList.map((product) => (
                <ProductCard product={product} key={product.id} />)
            )}
        </article>


    )
}