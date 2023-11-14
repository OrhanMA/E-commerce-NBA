import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";
export default function Checkout() {
    const { register, handleSubmit } = useForm();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        // Retrieve products from local storage using the key "cart"
        const localStorageData = localStorage.getItem("cart");
        const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
        setCartData(parsedData);
    }, []); // Empty dependency array to run the effect only once

    const calculateTotalPrice = () => {
        return cartData.reduce(
            (total, product) => total + product.quantity * product.price,
            0
        );
    };
    const onSubmit = async (data) => {
        // Send the form data along with the product data to the backend to place the order
        await router.post("/checkout", { ...data, products: cartData });
        // Redirect or show a success message as needed
        // You can use Inertia's page() or visit() to redirect
    };
    return (
        <>
            <Head title="Checkout" />
            <div className="flex flex-col items-center m-12">
                <h1 className="text-2xl font-bold">Checkout</h1>

                {cartData.length > 0 ? (
                    <>
                        <h2 className="text-xl font-semibold">
                            Order Summary:
                        </h2>
                        <ul className="flex flex-col gap-6 my-6">
                            {cartData.map((product) => (
                                <CheckoutProductCard
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </ul>
                        <div className="mt-6">
                            <p className="text-lg font-semibold">
                                Total Price: {calculateTotalPrice()}€
                            </p>
                        </div>
                        <Link
                            href="/cart"
                            className="text-sm underline text-blue-500"
                        >
                            Edit order?
                        </Link>
                        <div className="mt-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Add form elements for payment and delivery methods */}
                                {/* Example: */}
                                <label>
                                    Payment Method:
                                    <select
                                        name="paimentMethod"
                                        {...register("paiementMethod")}
                                    >
                                        <option value="Card">Card</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Transfert">
                                            Transfert
                                        </option>
                                        {/* Add more payment methods as needed */}
                                    </select>
                                </label>
                                <br />
                                <label>
                                    Delivery Method:
                                    <select
                                        name="deliveryMethod"
                                        {...register("deliveryMethod")}
                                    >
                                        <option value="standard">
                                            Standard shipping
                                        </option>
                                        <option value="express">
                                            Express shipping
                                        </option>
                                        <option value="click&collect">
                                            Click&collect
                                        </option>
                                        {/* Add more delivery methods as needed */}
                                    </select>
                                </label>
                                <br />
                                <button type="submit">Place Order</button>
                            </form>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold">
                            You don't have any products to pay for yet.
                        </h2>
                        <Link
                            href="/"
                            className="text-sm underline text-blue-500"
                        >
                            Back to home page
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}

function CheckoutProductCard({ product }) {
    return (
        <div className="flex items-center gap-6">
            <p>name: {product.name}</p>
            <p>quantity: {product.quantity}</p>
            <p>price: {product.quantity * product.price}</p>
        </div>
    );
}
