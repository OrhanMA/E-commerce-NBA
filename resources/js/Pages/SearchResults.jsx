// Create a SearchResults component

const SearchResults = ({ products, query }) => {
    console.log(products.map((product) => typeof product.id));

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <div className="flex flex-wrap justify-center w-full m-2 p-2 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;

function ProductCard({ product }) {
    return (
        <div className="w-4/5 sm:w-2/5 lg:w-1/4 p-6 m-2 rounded-md border flex flex-col items-start gap-4 bg-slate-50">
            <div className="w-full flex justify-center bg-white rounded-md">
                <img
                    className="my-6"
                    width={200}
                    src={`/${product.image_path}`}
                    alt={product.name}
                />
            </div>
            <p className="text-xl font-bold">{product.name}</p>
            <p className="text-lg">{product.description}</p>
            <div className="flex items-center gap-4">
                <p className="bg-slate-200 text-sm text-gray-500 px-2 rounded-md">
                    {product.category_name}
                </p>
                <p className="bg-slate-200 text-sm text-gray-500 px-2 rounded-md">
                    {product.subcategory_name}
                </p>
            </div>

            <div className="mt-4 flex items-center w-full justify-around">
                <p className="text-2xl font-bold ">{product.price}€</p>
                <button className="bg-black text-white px-6 py-2 font-semibold">
                    Buy
                </button>
            </div>
        </div>
    );
}
