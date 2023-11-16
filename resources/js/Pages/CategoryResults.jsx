// Create a SearchResults component

import { useState } from "react";
import SearchBar from "@/Components/SearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import SortFilter from "@/Components/SortFilter";
const SearchResults = ({ auth, products, category, sort_by, sort_order }) => {
    // console.log(products);
    function setSorting(value) {
        if (value === "name_asc") {
            setSortBy("name");
            setSortOrder("asc");
        } else if (value === "name_desc") {
            setSortBy("name");
            setSortOrder("desc");
        } else if (value === "price_asc") {
            setSortBy("price");
            setSortOrder("asc");
        } else if (value === "price_desc") {
            setSortBy("price");
            setSortOrder("desc");
        }
    }

    const generateSortUrl = (newSortBy, newSortOrder) => {
        return `/products/${category}?sort_by=${newSortBy}&sort_order=${newSortOrder}`;
    };

    return (
        <>
            <Header auth={auth} />
            <Head title={`${category}`} />
            <div>
                {/* <h1>Search Results for "{query}"</h1> */}
                {/* <p>cat:{category}</p>
                <p>{category}</p>
                <p>{sort_by}</p>
            <p>{sort_order}</p> */}
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
                        <div className="h-full justify-between flex flex-col flex-nowrap">
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
