import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Components/Footer";
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
            <Head title="Checkout" />
            <div className="flex flex-col min-h-screen items-center m-12">
                <h1 className="text-2xl lg:text-4xl font-bold mb-12">
                    Checkout
                </h1>

                {cartData.length > 0 ? (
                    <div className="w-full flex flex-col items-center gap-12 sm:gap-0 sm:flex-row justify-evenly">
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
                            <p className="text-xl  mb-6">
                                Total Price:{" "}
                                <span className="font-bold">
                                    {calculateTotalPrice()}$
                                </span>
                            </p>
                            <Link
                                href="/cart"
                                className="w-2/3 text-center text-md px-4 py-2 duration-200 dark:bg-zinc-700 text-white bg-blue-500 hover:bg-gray-400 hover:text-white "
                            >
                                Edit order?
                            </Link>
                        </div>
                        <div className="w-full sm:w-1/2 flex flex-col items-center">
                            <div className=" w-full">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="flex flex-col items-center gap-4 text-center"
                                >
                                    <label
                                        required
                                        className="flex w-full flex-col items-center gap-2"
                                    >
                                        Payment Method:
                                        <select
                                            name="paiementMethod"
                                            {...register("paiementMethod")}
                                            className="p-2 w-2/3 lg:w-2/3 dark:text-black  bg-gray-100 rounded-sm"
                                        >
                                            <option value="1">Card</option>
                                            <option value="2">Cash</option>
                                            <option value="3">Transfert</option>
                                            {/* <option value="Card">Card</option>
                                            <option value="Cash">Cash</option>
                                            <option value="Transfert">
                                                Transfert
                                            </option> */}
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
                                            className="p-2 w-2/3 lg:w-2/3 dark:text-black  bg-gray-100 rounded-sm"
                                        >
                                            <option value="1">
                                                Standard shipping
                                            </option>
                                            <option value="2">
                                                Express shipping
                                            </option>
                                            <option value="3">
                                                Click&collect
                                            </option>
                                            {/* <option value="standard">
                                                Standard shipping
                                            </option>
                                            <option value="express">
                                                Express shipping
                                            </option>
                                            <option value="click&collect">
                                                Click&collect
                                            </option> */}
                                        </select>
                                    </label>
                                    <br />
                                    <PrimaryButton
                                        type="submit"
                                        className="dark:bg-zinc-700 w-2/3 flex justify-center disabled:cursor-not-allowed"
                                        disabled={
                                            orderInProcess === true
                                                ? true
                                                : false
                                        }
                                    >
                                        Place order
                                    </PrimaryButton>
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

function CheckoutProductCard({ product }) {
    return (
        <div className="flex items-center gap-6  border-b pb-6 last:border-none">
            <p className="font-bold w-2/3">{product.name}</p>
            <p>x{product.quantity}</p>
            <p>{product.quantity * product.price}$</p>
        </div>
    );
}
