export default function SortFilter({ generateSortUrl }) {
    return (
        <div className="flex gap-6 p-6 bg-gray-50 w-full">
            <p className="font-semibold">Sort by:</p>
            <div className="flex gap-6">
                <a href={generateSortUrl("name", "asc")}>A-Z</a>
                <a href={generateSortUrl("name", "desc")}>Z-A</a>
                <a href={generateSortUrl("price", "asc")}>- to +</a>
                <a href={generateSortUrl("price", "desc")}>+ to -</a>
            </div>
        </div>
    );
}
