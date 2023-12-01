import { useState } from "react";

const Search = ({ onSearch, onFilter, onSort }) => {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSearch = () => {
        onSearch({ query, category, sortBy, sortOrder });
    };

    const handleSort = () => {
        onSort({ sortBy, sortOrder });
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="jerseys">Jerseys</option>
                {/* Add more options based on your categories */}
            </select>
            <button onClick={handleSearch}>Search</button>

            <label>
                Sort By:
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
            </label>

            <label>
                Sort Order:
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </label>

            <button onClick={handleSort}>Sort</button>
        </div>
    );
};

export default Search;
