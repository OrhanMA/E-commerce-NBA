import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";
import Header from "@/Layouts/Header";
export default function Checkout({ auth }) {
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
            <Header auth={auth} />
            <Head title="Checkout" />
            <div className="flex flex-col items-center m-12">
                <h1 className="text-2xl lg:text-4xl font-bold mb-12">
                    Checkout
                </h1>

                {cartData.length > 0 ? (
                    <div className="w-full flex flex-col gap-12 sm:gap-0 sm:flex-row justify-evenly">
                        <div className="w-full sm:w-1/2 flex flex-col items-center">
                            <h2 className="text-xl">Order Summary:</h2>
                            <ul className="flex flex-col gap-6 my-6">
                                {cartData.map((product) => (
                                    <CheckoutProductCard
                                        product={product}
                                        key={product.id}
                                    />
                                ))}
                            </ul>
                            <Link
                                href="/cart"
                                className="w-2/3 text-center text-md px-4 py-2 duration-200 text-white bg-blue-500 hover:bg-gray-400 hover:text-white "
                            >
                                Edit order?
                            </Link>
                        </div>
                        <div className="w-full sm:w-1/2 flex flex-col items-center">
                            <p className="text-xl  mb-6">
                                Total Price:{" "}
                                <span className="font-bold">
                                    {calculateTotalPrice()}$
                                </span>
                            </p>

                            <div className=" w-full">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="flex flex-col items-center gap-4 text-center"
                                >
                                    {/* Add form elements for payment and delivery methods */}
                                    {/* Example: */}
                                    <label
                                        required
                                        className="flex w-full flex-col items-center gap-2"
                                    >
                                        Payment Method:
                                        <select
                                            name="paimentMethod"
                                            {...register("paiementMethod")}
                                            className="p-2 w-2/3 lg:w-2/3  bg-gray-100 rounded-sm"
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
                                    <label
                                        required
                                        className="flex w-full flex-col items-center gap-2"
                                    >
                                        Delivery Method:
                                        <select
                                            name="deliveryMethod"
                                            {...register("deliveryMethod")}
                                            className="p-2 w-2/3 lg:w-2/3  bg-gray-100 rounded-sm"
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
                                    <button
                                        type="submit"
                                        className="w-2/3 bg-black text-white py-2"
                                    >
                                        Place Order
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
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
        <div className="flex items-center gap-6  border-b pb-6 last:border-none">
            <p className="font-bold w-2/3">{product.name}</p>
            <p>x{product.quantity}</p>
            <p>{product.quantity * product.price}$</p>
        </div>
    );
}
