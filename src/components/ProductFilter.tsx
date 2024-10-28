import { ProductType } from "../lib/definitons";

export default function ProductFilter({ productListFilter }: { productListFilter: ProductType[] }) {

    return (

        <section>
            <button type="submit">USA</button>
            <button type="submit">ART</button>
            <button type="submit">FUN</button>
        </section>
    )
}