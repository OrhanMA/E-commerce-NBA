import React from "react";
import CheckoutProductCard from "./CheckoutProductCard";
import { Link } from "@inertiajs/react";

function CheckoutOrderRecap({ cartData, calculateTotalPrice }) {
    return (
        <div className="w-full sm:w-1/2 flex flex-col items-center">
            <h2 className="text-xl">Order Summary:</h2>
            <ul className="dark:bg-zinc-700 rounded-md flex flex-col justify-center gap-6 p-6 my-6">
                {cartData.map((product) => (
                    <CheckoutProductCard product={product} key={product.id} />
                ))}
            </ul>
            <p className="text-xl  mb-6">
                Total Price:{" "}
                <span className="font-bold">{calculateTotalPrice()}$</span>
            </p>

            <Link
                href="/cart"
                className="w-2/3 lg:w-1/2 xl:w-1/4 text-center text-md px-4 py-2 duration-200 dark:bg-zinc-700 text-white bg-black hover:bg-gray-500 hover:text-white "
            >
                Edit order?
            </Link>
        </div>
    );
}

export default CheckoutOrderRecap;
