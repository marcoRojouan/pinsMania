import { useState } from "react";
import { ProductType } from "../lib/definitons";


export default function ProductCard({ product }: { product: ProductType }) {

    const { name, image, price, category, details, detailsboo, added } = product

    const [cartAdd, setCartAdd] = useState(added)


    const handleAddcart = () => {
        setCartAdd(!cartAdd)
    }

    console.log(cartAdd)

    const [showDetails, setShowDetails] = useState(detailsboo)

    const handleDetails = () => {
        setShowDetails(!showDetails)
    }



    return (
        <section className="flex flex-col items-center bg-slate-200 rounded-md shadow-md ">
            <img className="rounded-md mx-2 my-2 w-80 " src={image} alt={`Photo d'un pin's ${name}`} />
            <h2 className="text-xl">{name}</h2>
            <p className="py-2">{category}</p>
            <span className="text-lg pb-2">{price}</span>
            <button className="max-w-32 pb-2" type="button" onClick={handleDetails}>{showDetails ? `${details}` : "More"}</button>
            <button className=" shadow-md text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600" type="button" onClick={handleAddcart}>Add to cart {cartAdd ? "✅" : "❌"} </button>

        </section>
    )
}