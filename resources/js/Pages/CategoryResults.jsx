import SearchBar from "@/Components/SearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import SortFilter from "@/Components/SortFilter";
const SearchResults = ({ auth, products, category, sort_by, sort_order }) => {
    const generateSortUrl = (newSortBy, newSortOrder) => {
        return `/products/${category}?sort_by=${newSortBy}&sort_order=${newSortOrder}`;
    };

    return (
        <>
            <Header auth={auth} />
            <Head title={`${category}`} />
            <div>
                <SearchBar />

                {products.length <= 0 ? (
                    <>
                        <p>
                            No product found. Please make a new search or select
                            a new product category.
                        </p>
                    </>
                ) : (
                    <>
                        <div className="mb-[250px] sm:mb-0 h-full justify-between flex flex-col flex-nowrap">
                            <SortFilter generateSortUrl={generateSortUrl} />

                            <div className="flex flex-wrap justify-center w-full m-2 p-2 gap-6">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default SearchResults;
