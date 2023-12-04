import React from "react";
import CheckoutProductCard from "./CheckoutProductCard";
import { Link } from "@inertiajs/react";

function CheckoutOrderRecap({ cartData, calculateTotalPrice }) {
    return (
        <div className="w-full sm:w-1/2 flex flex-col items-center">
            <h2 className="text-xl">Order Summary:</h2>
            <ul className="flex flex-col gap-6 my-6">
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
                className="w-2/3 text-center text-md px-4 py-2 duration-200 dark:bg-zinc-700 text-white bg-blue-500 hover:bg-gray-400 hover:text-white "
            >
                Edit order?
            </Link>
        </div>
    );
}

export default CheckoutOrderRecap;
