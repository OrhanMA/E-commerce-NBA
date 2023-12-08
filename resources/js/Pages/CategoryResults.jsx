import SearchBar from "@/Components/SearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import SortFilter from "@/Components/SortFilter";
import Footer from "@/Components/Footer";

const CategoryResults = ({ auth, products, category }) => {
    const generateSortUrl = (newSortBy, newSortOrder) => {
        return `/products/${category}?sort_by=${newSortBy}&sort_order=${newSortOrder}`;
    };
    return (
        <div className="dark:bg-zinc-900">
            <Header auth={auth} />
            <Head>
                <title>{category}</title>
                <meta
                    name={`Category results for ${category} products`}
                    content={`Buy every ${category} items you have on our website.`}
                />
            </Head>
            <div className="mb-24">
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

                            <div className="flex items-center sm:flex-row flex-wrap justify-center w-full sm:m-2 p-2 ">
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

export default CategoryResults;
