import { ProductType } from "../lib/definitons";
import ProductCard from "./ProductCard";

export default function ProductBox({ productList }: { productList: ProductType[] }) {
    return (
        <section className="mt-8 pb-16 flex justify-evenly flex-wrap gap-8">
            {productList.map((product) => (<ProductCard product={product} key={product.id} />))}
        </section>


    )
}