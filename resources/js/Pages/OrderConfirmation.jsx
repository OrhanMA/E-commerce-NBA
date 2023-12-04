import Header from "@/Layouts/Header";
import React, { useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import OrderPlacedRecap from "@/Components/order-confirmation/OrderPlacedRecap";

export default function OrderConfirmation({
    auth,
    order,
    paiementMethodName,
    deliveryMethodName,
}) {
    useEffect(() => {
        localStorage.removeItem("cart");
    }, []);

    return (
        <div className="dark:bg-zinc-900 dark:text-gray-200">
            <Header auth={auth} />
            <Head>
                <title>Order confirmed!</title>
                <meta
                    name={`Your order has been confirmed`}
                    content={`Page that shows the confirmation of your order in JerseyShop!`}
                />
            </Head>
            <div className="flex flex-col items-center mt-6 min-h-screen">
                <h1 className="my-6 font-bold text-2xl">Order Confirmation</h1>
                <div className="flex flex-col items-center my-6 w-full">
                    <h1 className="max-w-xl text-2xl font-bold mb-6">
                        Your placed order
                    </h1>
                    <Link
                        href="/contact"
                        className="hover:text-blue-500 underline"
                    >
                        Click here to contact the support.
                    </Link>
                    <OrderPlacedRecap
                        {...{ order, paiementMethodName, deliveryMethodName }}
                    />
                </div>
            </div>
            <Footer auth={auth} />
        </div>
    );
}
