import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import Footer from "@/Components/Footer";
import CheckoutForm from "@/Components/checkout/CheckoutForm";
import CheckoutOrderRecap from "@/Components/checkout/CheckoutOrderRecap";

export default function Checkout({ auth }) {
    const { register, handleSubmit } = useForm();
    const [cartData, setCartData] = useState([]);
    const [orderInProcess, setOrderInProcess] = useState(false);

    useEffect(() => {
        const localStorageData = localStorage.getItem("cart");
        const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
        setCartData(parsedData);
    }, []);

    const calculateTotalPrice = () => {
        return cartData.reduce(
            (total, product) => total + product.quantity * product.price,
            0
        );
    };
    const onSubmit = async (data) => {
        setOrderInProcess(true);
        await router.post("/checkout", { ...data, products: cartData });
    };

    return (
        <div className="dark:bg-zinc-900 dark:text-gray-200 min-h-screen">
            <Header auth={auth} />
            <Head>
                <title>Checkout</title>
                <meta
                    name={`Checkout page`}
                    content={`Checkout page to submit your order!`}
                />
            </Head>
            <div className="flex flex-col min-h-screen items-center m-12">
                <h1 className="text-2xl lg:text-4xl font-bold mb-12">
                    Checkout
                </h1>

                {cartData.length > 0 ? (
                    <div className="w-full flex flex-col items-center gap-12 sm:gap-0 sm:flex-row justify-evenly">
                        <CheckoutOrderRecap
                            {...{ cartData, calculateTotalPrice }}
                        />
                        <CheckoutForm
                            {...{
                                register,
                                handleSubmit,
                                onSubmit,
                                orderInProcess,
                            }}
                        />
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold">
                            You don't have any products to pay for yet.
                        </h2>
                        <Link
                            href="/"
                            className="text-sm underline mt-6 duration-200 dark:text-gray-200 dark:hover:text-zinc-400 text-blue-500"
                        >
                            Back to home page
                        </Link>
                    </>
                )}
            </div>
            <Footer auth={auth} />
        </div>
    );
}
