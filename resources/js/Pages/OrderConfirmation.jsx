import Header from "@/Layouts/Header";
import React, { useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
export default function OrderConfirmation({
    auth,
    order,
    paiementMethodName,
    deliveryMethodName,
    orderProducts,
}) {
    useEffect(() => {
        localStorage.removeItem("cart");
    }, []);

    return (
        <>
            <Header auth={auth} />
            <Head title="Order confirmation" />
            <div className="flex flex-col items-center my-6">
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
                    <div className="border p-6 flex flex-col gap-6 m-6 md:w-2/3">
                        <div className="flex flex-col gap-2">
                            <p>
                                Order n°{" "}
                                <span className="font-semibold">
                                    {order.id}
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold">total: </span>
                                {order.total_price}$
                            </p>
                            <p>
                                <span className="font-semibold">
                                    shipping:{" "}
                                </span>
                                {deliveryMethodName}
                            </p>
                            <p>
                                <span className="font-semibold">paid by: </span>
                                {paiementMethodName}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    placed on:{" "}
                                </span>
                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric",
                                    timeZone: "UTC",
                                }).format(new Date(order.created_at))}
                            </p>
                        </div>
                        <ul className="flex flex-col gap-6 my-6">
                            {order.products.map((product, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between lg:justify-evenly gap-4 border-b pb-6 last:border-none"
                                    >
                                        <img
                                            src={`/${product.image_path}`}
                                            alt={`image for product:${product.name}`}
                                            className="h-[50px] max-w-1/3"
                                        />
                                        <p className="font-semibold w-1/3">
                                            {product.name}
                                        </p>
                                        <p>x{product.pivot.quantity}</p>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
