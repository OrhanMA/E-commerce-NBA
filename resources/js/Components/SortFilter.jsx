export default function SortFilter({ generateSortUrl }) {
    return (
        <div className="flex gap-6 p-6 bg-gray-50 w-full">
            <p className="font-semibold">Sort by:</p>
            <div className="flex gap-6">
                <a href={generateSortUrl("name", "asc")}>
                    <span className="hidden sm:flex">Name</span>
                    A-Z
                </a>
                <a href={generateSortUrl("name", "desc")}>
                    <span className="hidden sm:flex">Name</span>
                    Z-A
                </a>
                <a href={generateSortUrl("price", "asc")}>
                    <span className="hidden sm:flex">Price</span>- to +
                </a>
                <a href={generateSortUrl("price", "desc")}>
                    <span className="hidden sm:flex">Price</span>+ to -
                </a>
            </div>
        </div>
    );
}
