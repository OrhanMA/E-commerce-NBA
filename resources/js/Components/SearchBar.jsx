import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
export default function SearchBar() {
    const [category, setCategory] = useState("jerseys");
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Category:", category);
        // console.log("Query:", query);
    };

    return (
        <div className="w-full flex justify-center my-4 sm:my-6 pt-6 sm:mb-6">
            {/* <div className="flex justify-center  gap-4">
              <p>caté:{category}</p>
              <p>query:{query}</p>
          </div> */}
            <form
                className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap sm:m-6 items-center gap-4"
                onSubmit={handleSubmit}
            >
                <div className="w-full sm:w-1/3">
                    <select
                        className="rounded-md w-full bg-gray-100 dark:bg-white dark:text-black text-sm p-2 lg:w-[150px]"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        name="category"
                        id="category"
                    >
                        <option value="Jerseys">Jerseys</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Basketballs">Basketballs</option>
                        <option value="Goodies">Goodies</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="flex gap-6">
                    <TextInput
                        className="w-[125px] sm:w-[250px] lg:w-[500px] text-sm md:text-md rounded-md border p-2 dark:text-black"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Link href={`/search?query=${query}&category=${category}`}>
                        <PrimaryButton
                            className="px-4 py-2 rounded-md disabled:bg-gray-200 dark:bg-zinc-700 disabled:text-black dark:disabled:text-gray-500 duration-200"
                            disabled={query === "" ? true : false}
                            type="submit"
                        >
                            Search
                        </PrimaryButton>
                    </Link>
                </div>
            </form>
        </div>
    );
}
