import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
export default function SearchBar() {
    const [category, setCategory] = useState("jerseys");
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission, e.g., make an API request or update the state
        console.log("Category:", category);
        console.log("Query:", query);
    };

    return (
        <div className="w-full flex justify-center my-6 pt-6 sm:mb-6 sm:my-0">
            {/* <div className="flex justify-center  gap-4">
              <p>caté:{category}</p>
              <p>query:{query}</p>
          </div> */}
            <form className="flex items-center gap-4" onSubmit={handleSubmit}>
                <select
                    className="rounded-md bg-gray-100 text-sm p-2 lg:w-[150px]"
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
                <TextInput
                    className="w-[125px] sm:w-[250px] lg:w-[500px] text-sm md:text-md rounded-md border p-2"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link href={`/search?query=${query}&category=${category}`}>
                    <PrimaryButton
                        className="px-4 py-2 rounded-md disabled:bg-gray-50 disabled:text-gray-300 duration-200"
                        disabled={query === "" ? true : false}
                        type="submit"
                    >
                        Search
                    </PrimaryButton>
                </Link>
            </form>
        </div>
    );
}
