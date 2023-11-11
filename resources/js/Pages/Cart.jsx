// Assuming you're using React
import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
export default function CartPage() {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        // Retrieve products from local storage using the key "cart"
        const localStorageData = localStorage.getItem("cart");
        const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
        setCartData(parsedData);
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="flex flex-col items-center m-12">
            <Head title="Cart" />
            <h1 className="text-2xl font-bold ">Your Cart</h1>
            <h2 className="text-xl font-semibold">Product list:</h2>
            <ul className="flex flex-col gap-6 my-6">
                {cartData.map((product) => (
                    <CartProductCard product={product} key={product.id} />
                ))}
            </ul>
            <Link href="/checkout">Continue to checkout</Link>
        </div>
    );
}
function CartProductCard({ product }) {
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
        <div className="flex items-center gap-6">
            <p>name: {product.name}</p>
            <p>quantity: {quantity}</p>
            <p>price: {quantity * product.price}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}
