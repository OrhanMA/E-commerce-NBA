// Create a SearchResults component

const SearchResults = ({ products, query }) => {
    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            {products.map((product) => (
                <p key={product.id}>{product.name}</p>
            ))}
        </div>
    );
};

export default SearchResults;
