import React from "react";
import { Link } from "@inertiajs/react";

function SearchBackup() {
    const routes = ["Jerseys", "Basketballs", "Clothing", "Goodies", "Other"];

    return (
        <div className="p-6">
            <h1 className="text-2xl dark:text-gray-200 font-semibold mb-6 text-center">
                No product found. Please make a new search or select a new
                product category.
            </h1>
            <div className="flex flex-col text-2xl gap-2">
                <Link
                    className="duration-200 text-gray-400 dark:text-gray-400 dark:hover:text-white hover:text-gray-900"
                    href="/"
                >
                    Accueil
                </Link>
                {routes.map((route, index) => {
                    return (
                        <>
                            <Link
                                className="duration-200 text-gray-400 dark:text-gray-400 dark:hover:text-white hover:text-gray-900"
                                key={index}
                                href={`/products/${route}`}
                            >
                                {route}
                            </Link>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default SearchBackup;
