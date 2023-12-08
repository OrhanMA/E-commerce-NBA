export default function SortFilter({ generateSortUrl }) {
    return (
        <div className="flex items-center gap-6 p-6 bg-gray-100 dark:bg-zinc-800  dark:text-white w-full">
            <p className="font-light text-md lg:text-lg">Sort by:</p>
            <div className="flex gap-6">
                <a
                    className="hover:border-b text-md lg:text-lg"
                    href={generateSortUrl("name", "asc")}
                >
                    A-Z
                </a>
                <a
                    className="hover:border-b text-md lg:text-lg"
                    href={generateSortUrl("name", "desc")}
                >
                    Z-A
                </a>
                <a
                    className="hover:border-b text-md lg:text-lg"
                    href={generateSortUrl("price", "asc")}
                >
                    0-9
                </a>
                <a
                    className="hover:border-b text-md lg:text-lg"
                    href={generateSortUrl("price", "desc")}
                >
                    9-0
                </a>
            </div>
        </div>
    );
}
