import { Link } from "@inertiajs/react";

export default function CartBackup() {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">
                Your cart is empty...
            </h2>
            <Link
                className="border dark:bg-zinc-700 dark:text-gray-200 dark:border-none dark:hover:bg-zinc-400 hover:bg-black hover:text-white px-4 py-2 rounded-md bg-white text-black hover:border-black duration-200"
                href="/products"
            >
                Go to the products page
            </Link>
        </>
    );
}
