import { ProductType } from "../lib/definitons";


export default function ProductCard({ product }: { product: ProductType }) {

    const { name, image, price, category } = product

    return (
        <section>
            <img src={image} alt={`Photo d'un pin's ${name}`} />
            <h2>{name}</h2>
            <p>{category}</p>
            <span>{price}</span>
            <button type="button">Add to cart</button>

        </section>
    )
}