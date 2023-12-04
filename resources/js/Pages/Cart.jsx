import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import Footer from "@/Components/Footer";
import CartBackup from "@/Components/cart/CartBackup";
import ValidCart from "@/Components/cart/ValidCart";

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
            <Head>
                <title>Cart</title>
                <meta
                    name="Your Cart"
                    content={`There is currently ${cartData.length} products in your cart.`}
                />
            </Head>
            <div className="flex flex-col min-h-screen items-center py-12">
                <h1 className="text-2xl font-bold mb-6 dark:text-gray-200">
                    {" "}
                    Cart:
                </h1>
                {cartData.length > 0 ? (
                    <ValidCart
                        {...{ clearCart, cartData, handleProductDeletion }}
                    />
                ) : (
                    <CartBackup />
                )}
            </div>
            <Footer auth={auth} />
        </div>
    );
}
