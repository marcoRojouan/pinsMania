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
        <>
            <article className="flex flex-col items-center gap-4">
                <h2 className="text-xl mt-4 ">Filters</h2>

                <section className="flex gap-16 text-lg justify-center">
                    <button className="shadow-md text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={handleUsa}>USA</button>
                    <button className="shadow-md text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={handleArt}>ART</button>
                    <button className="shadow-md text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={handleFun}>FUN</button>
                    <button className="shadow-md text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={handleAll}>ALL</button>
                </section>
            </article>
        </>
    )
}