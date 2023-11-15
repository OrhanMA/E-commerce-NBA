// Assuming you're using React
import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Layouts/Header";
export default function CartPage({ auth }) {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        // Retrieve products from local storage using the key "cart"
        const localStorageData = localStorage.getItem("cart");
        const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
        setCartData(parsedData);
    }, []); // Empty dependency array to run the effect only once

    const clearCart = () => {
        // Clear all products from local storage
        localStorage.removeItem("cart");
        setCartData([]);
    };

    return (
        <>
            <Header auth={auth} />
            <Head title="Cart" />
            <div className="flex flex-col items-center m-12">
                <h1 className="text-2xl font-bold mb-6"> Cart:</h1>
                {cartData.length <= 0 && (
                    <>
                        <h2 className="text-xl font-semibold mb-4">
                            Your cart is empty...
                        </h2>
                        <Link
                            className="border hover:bg-black hover:text-white px-4 py-2 rounded-md bg-white text-black hover:border-black duration-200"
                            href="/products"
                        >
                            Go to the products page
                        </Link>
                    </>
                )}
                {cartData.length > 0 && (
                    <button
                        className="mt-4 bg-yellow-500 text-sm text-white px-2 py-1 rounded-md hover:bg-red-600"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                )}
                <ul className="flex flex-col border-2 p-6 sm:p-12 gap-6 my-6 rounded-md">
                    {cartData.map((product) => (
                        <CartProductCard product={product} key={product.id} />
                    ))}
                </ul>
                {cartData.length > 0 && (
                    <Link
                        className="border hover:bg-black hover:text-white px-4 py-2 rounded-md bg-white text-black hover:border-black duration-200"
                        href="/checkout"
                    >
                        Continue to checkout
                    </Link>
                )}
            </div>
        </>
    );
}
export function CartProductCard({ product }) {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        updateCart(product.id, quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            updateCart(product.id, quantity - 1);
        }
    };

    const updateCart = (productId, updatedQuantity) => {
        const updatedCart = JSON.parse(localStorage.getItem("cart")).map(
            (item) =>
                item.id === productId
                    ? { ...item, quantity: updatedQuantity }
                    : item
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="flex flex-col sm:flex-row items-center last:border-none border-b pb-6 gap-6">
            <img
                className="max-h-[100px]"
                src={`/${product.image_path}`}
                alt="product image"
            />
            <p className="font-semibold">{product.name}</p>
            <div className="flex gap-4">
                <p className="flex items-center gap-2">
                    quantity: <span className="font-semibold">{quantity}</span>
                </p>
                {" - "}
                <p className="flex items-center gap-2">
                    price:
                    <span className="font-semibold">
                        {quantity * product.price}$
                    </span>
                </p>
            </div>
            <div className="flex items-center gap-6">
                <button
                    className="flex justify-center items-center bg-green-500 p-1 w-[25px] h-[25px] rounded text-white"
                    onClick={handleIncrement}
                >
                    +
                </button>
                <button
                    className="flex justify-center items-center bg-red-500 p-1 w-[25px] h-[25px] rounded text-white"
                    onClick={handleDecrement}
                >
                    -
                </button>
            </div>
        </div>
    );
}
