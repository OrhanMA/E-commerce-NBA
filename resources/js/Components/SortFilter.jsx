import {
    TbSortAscendingNumbers,
    TbSortDescendingNumbers,
    TbSortAscendingLetters,
    TbSortDescendingLetters,
} from "react-icons/tb";

export default function SortFilter({ generateSortUrl }) {
    return (
        <div className="flex items-center gap-6 p-6 bg-gray-100 dark:bg-zinc-700  dark:text-white w-full">
            <p className="text-sm">Sort by:</p>
            <div className="flex gap-6">
                <a href={generateSortUrl("name", "asc")}>
                    <TbSortAscendingLetters />
                </a>
                <a href={generateSortUrl("name", "desc")}>
                    <TbSortDescendingLetters />
                </a>
                <a href={generateSortUrl("price", "asc")}>
                    <TbSortAscendingNumbers />
                </a>
                <a href={generateSortUrl("price", "desc")}>
                    <TbSortDescendingNumbers />
                </a>
            </div>
        </div>
    );
}
