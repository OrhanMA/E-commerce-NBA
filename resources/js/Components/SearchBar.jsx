import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import { Loader2 } from "lucide-react";
export default function SearchBar() {
    const { url } = usePage();
    const activeCategory = url.slice(10);

    const [category, setCategory] = useState(activeCategory || "Jerseys");
    const [query, setQuery] = useState("");
    const [isLoading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full flex justify-center my-4 py-6 sm:py-0 sm:my-6 sm:mb-6">
            <form
                role="search"
                aria-labelledby="searchBarLabel"
                className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap sm:m-6 items-center gap-4"
                onSubmit={handleSubmit}
            >
                <div className="w-full sm:h-full sm:w-1/3">
                    <label htmlFor="categorySelect" className="sr-only">
                        Select Category
                    </label>
                    <select
                        id="categorySelect"
                        aria-label="Select Category"
                        className="rounded-md w-full bg-gray-100 sm:h-full dark:bg-zinc-500 dark:text-white text-sm  p-3 sm:p-2 lg:w-[150px] hover:cursor-pointer"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        name="category"
                    >
                        <option value="Jerseys">Jerseys</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Basketballs">Basketballs</option>
                        <option value="Goodies">Goodies</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="flex gap-6">
                    <label htmlFor="searchInput" className="sr-only">
                        Search
                    </label>
                    <TextInput
                        id="searchInput"
                        className="w-[125px] sm:w-[250px] lg:w-[500px] sm:h-full text-sm md:text-md rounded-md border dark:border-2 p-2 dark:text-white dark:bg-zinc-500 dark:border-zinc-500 dark:focus:border-gray-400 duration-200"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Link
                        onClick={() => {
                            setLoading(true);
                        }}
                        href={`/search?query=${query}&category=${category}`}
                    >
                        {" "}
                        {isLoading ? (
                            <PrimaryButton className="flex gap-4 items-center">
                                <Loader2 />
                                <>Wait...</>
                            </PrimaryButton>
                        ) : (
                            <PrimaryButton
                                className="h-full px-4 py-2 rounded-md sm:h-full disabled:bg-gray-200 dark:bg-zinc-700 disabled:text-black dark:disabled:text-gray-500 disabled:cursor-not-allowed duration-200"
                                disabled={
                                    query === "" || isLoading == true
                                        ? true
                                        : false
                                }
                                type="submit"
                            >
                                Search
                            </PrimaryButton>
                        )}
                    </Link>
                </div>
            </form>
        </div>
    );
}
