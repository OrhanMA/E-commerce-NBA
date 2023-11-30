// Assuming you're using React
import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import PrimaryButton from "@/Components/PrimaryButton";
export default function CartPage({ auth }) {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem("cart");
        const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
        setCartData(parsedData);
    }, []);

    const clearCart = () => {
        localStorage.removeItem("cart");
        setCartData([]);
    };

    function handleProductDeletion(product) {
        const newProductArray = cartData.filter(
            (element) => element.id !== product.id
        );
        localStorage.setItem("cart", JSON.stringify(newProductArray));
        setCartData(newProductArray);
    }
    return (
        <div className="dark:bg-zinc-900 min-h-screen">
            <Header auth={auth} />
            <Head title="Cart" />
            <div className="flex flex-col items-center py-12">
                <h1 className="text-2xl font-bold mb-6 dark:text-gray-200">
                    {" "}
                    Cart:
                </h1>
                {cartData.length <= 0 && (
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
                )}
                {cartData.length > 0 && (
                    <>
                        <PrimaryButton
                            className="mt-4 bg-gray-300 dark:bg-zinc-700 text-sm text-white px-2 py-1 rounded-md hover:bg-red-600"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </PrimaryButton>
                        <ul className=" dark:border-zinc-500 flex flex-col border p-6 sm:p-12 gap-6 my-6 rounded-md">
                            {cartData.map((product) => (
                                <CartProductCard
                                    product={product}
                                    key={product.id}
                                    handleProductDeletion={
                                        handleProductDeletion
                                    }
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
                )}
            </div>
        </div>
    );
}
export function CartProductCard({ product, handleProductDeletion }) {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        updateCart(product.id, quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            updateCart(product.id, quantity - 1);
        } else if (quantity === 1) {
            handleProductDeletion(product);
        }
    };

    const handleDeletion = () => {
        handleProductDeletion(product);
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
        <div className="dark:text-gray-200 flex flex-col sm:flex-row items-center last:border-none border-b dark:border-zinc-500 pb-6 gap-6">
            <img
                className="max-h-[100px] rounded-md"
                src={`/${product.image_path}`}
                alt="product image"
            />
            <p className="font-semibold">{product.name}</p>
            <div className="flex gap-4">
                <p className="flex items-center gap-2">
                    quantity:{" "}
                    <span className="font-semibold dark:text-white">
                        {quantity}
                    </span>
                </p>
                {" - "}
                <p className="flex items-center gap-2">
                    price:
                    <span className="font-semibold dark:text-white">
                        {quantity * product.price}$
                    </span>
                </p>
            </div>
            <div className="flex items-center gap-6">
                <PrimaryButton
                    className="flex justify-center items-center dark:hover:bg-green-500 dark:bg-green-700 bg-green-500 p-1 w-[25px] h-[25px] rounded text-white"
                    onClick={handleIncrement}
                >
                    +
                </PrimaryButton>
                <PrimaryButton
                    className="flex justify-center items-center hover:bg-red-500 bg-red-700 dark:hover:bg-red-500 dark:bg-red-700 p-1 w-[25px] h-[25px] rounded text-white"
                    onClick={handleDecrement}
                >
                    -
                </PrimaryButton>
                <PrimaryButton
                    className="flex justify-center items-center dark:hover:bg-zinc-500 dark:bg-zinc-700 bg-black p-1 w-[25px] h-[25px] rounded text-white"
                    onClick={handleDeletion}
                >
                    X
                </PrimaryButton>
            </div>
        </div>
    );
}
