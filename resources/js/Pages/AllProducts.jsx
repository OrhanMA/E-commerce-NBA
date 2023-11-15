// Create a SearchResults component

import { useState } from "react";
import SearchBar from "@/Components/SearchBar";
import SecondaryButton from "@/Components/SecondaryButton";
import { ProductCard } from "@/Components/ProductCard";
import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
const SearchResults = ({ auth, products }) => {
    return (
        <>
            <Header auth={auth} />
            <Head title="All products" />
            <SearchBar />
            <div>
                {products.links.map((link) => {
                    <div key={link}>
                        <p>{link.url}</p>
                    </div>;
                })}
            </div>
            {products.data.length <= 0 ? (
                <>
                    <p>
                        No product found. Please make a new search or select a
                        new product category.
                    </p>
                </>
            ) : (
                <>
                    <div className="flex flex-wrap justify-center w-full m-2 p-2 gap-6">
                        {products.data.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default SearchResults;
