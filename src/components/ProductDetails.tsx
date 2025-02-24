export default function ProductDetails({ currentDetail }: { currentDetail: string }) {


    return (
        <section className="rounded-md min-h-80 mx-12 px-8 max-w-64 px-24 bg-slate-200 flex flex-col items-center gap-8">
            <h2 className="text-2xl  mx-8 px-8">Description</h2>
            <h3> Pouette </h3>
            <p className="text-xl">{currentDetail}</p>
        </section>
    )

}