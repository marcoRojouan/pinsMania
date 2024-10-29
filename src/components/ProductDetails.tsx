export default function ProductDetails({ currentDetail }: { currentDetail: string }) {


    return (
        <section className="rounded-md min-h-80 mx-8 px-8 max-w-64 px-24 bg-slate-200 flex flex-col items-center gap-8">
            <h2 className="text-2xl">Description :</h2>
            <p className="text-xl">{currentDetail}</p>
        </section>
    )

}