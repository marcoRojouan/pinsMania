import { ProductType } from "../lib/definitons";
import ProductCard from "./ProductCard";

export default function ProductBox({ productListBox }: { productListBox: ProductType[] }) {

    return (
        <>
            {productListBox.map((product) => (<ProductCard product={product} key={product.id} />))}
        </>


    )
}