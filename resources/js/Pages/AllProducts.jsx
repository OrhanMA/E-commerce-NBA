// Create a SearchResults component

import { useState } from "react";
import { SearchBar } from "./Welcome";
import SecondaryButton from "@/Components/SecondaryButton";
import { ProductCard } from "@/Components/ProductCard";
const SearchResults = ({ products }) => {
    return (
        <div>
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
        </div>
    );
};

export default SearchResults;
