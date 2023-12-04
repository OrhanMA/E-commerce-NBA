import { Link } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import CartProductCard from "./CartProductCard";

export default function ValidCart({
    clearCart,
    cartData,
    handleProductDeletion,
}) {
    return (
        <>
            <PrimaryButton
                className="mt-4 bg-gray-300 dark:bg-zinc-700 text-sm text-white px-2 py-1 rounded-md hover:bg-red-600"
                onClick={clearCart}
            >
                Clear Cart
            </PrimaryButton>
            <ul className=" dark:border-zinc-500 flex flex-col border w-[90%] lg:w-2/3 p-6 mx-6 sm:p-12 gap-6 my-6 rounded-md">
                {cartData.map((product) => (
                    <CartProductCard
                        product={product}
                        key={product.id}
                        handleProductDeletion={handleProductDeletion}
                    />
                ))}
            </ul>
            <Link
                className="border dark:bg-zinc-700 dark:text-gray-200 dark:border-none dark:hover:bg-zinc-400 hover:bg-black hover:text-white px-4 py-2 rounded-md bg-white text-black hover:border-black duration-200"
                href="/checkout"
            >
                Continue to checkout
            </Link>
        </>
    );
}
