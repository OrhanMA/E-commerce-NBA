import {
    TbSortAscendingNumbers,
    TbSortDescendingNumbers,
    TbSortAscendingLetters,
    TbSortDescendingLetters,
} from "react-icons/tb";

export default function SortFilter({ generateSortUrl }) {
    return (
        <div className="flex items-center gap-6 p-6 bg-gray-100 dark:bg-zinc-700  dark:text-white w-full">
            <p className="text-sm md:text-md lg:text-lg">Sort by:</p>
            <div className="flex gap-6">
                <a href={generateSortUrl("name", "asc")}>
                    <TbSortAscendingLetters size={25} />
                </a>
                <a href={generateSortUrl("name", "desc")}>
                    <TbSortDescendingLetters size={25} />
                </a>
                <a href={generateSortUrl("price", "asc")}>
                    <TbSortAscendingNumbers size={25} />
                </a>
                <a href={generateSortUrl("price", "desc")}>
                    <TbSortDescendingNumbers size={25} />
                </a>
            </div>
        </div>
    );
}
