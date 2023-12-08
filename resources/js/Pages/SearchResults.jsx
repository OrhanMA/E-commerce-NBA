import SearchBar from "@/Components/SearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import SortFilter from "@/Components/SortFilter";
import Footer from "@/Components/Footer";
import SearchBackup from "@/Components/search-results/SearchBackup";

const SearchResults = ({ auth, products, query, category }) => {
    const generateSortUrl = (newSortBy, newSortOrder) => {
        if (query === null || category === null) {
            return `/search?sort_by=${newSortBy}&sort_order${newSortOrder}`;
        }
        return `/search?query=${query}&category=${category}&sort_by=${newSortBy}&sort_order=${newSortOrder}`;
    };

    return (
        <div className="dark:bg-zinc-900">
            <Header auth={auth} />
            <Head>
                <title>Search results page</title>
                <meta
                    name={`Search results page`}
                    content={`Search results page for any items you might be looking for in the website!`}
                />
            </Head>
            <div>
                <SearchBar />
                {products.length <= 0 ? (
                    <SearchBackup />
                ) : (
                    <>
                        <div className="pb-[250px] sm:mb-0 justify-between flex flex-col flex-nowrap">
                            <SortFilter generateSortUrl={generateSortUrl} />
                            <h1 className="text-xl m-6 dark:text-gray-200">
                                Search Results for "{query}"
                            </h1>
                            <div className="flex items-center sm:flex-row flex-wrap justify-center w-full m-2 p-2">
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
            <Footer auth={auth} />
        </div>
    );
};

export default SearchResults;
