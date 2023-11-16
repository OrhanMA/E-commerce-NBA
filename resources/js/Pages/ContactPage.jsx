import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";
import Header from "@/Layouts/Header";
export default function ContactPage({ auth }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        await router.post("/contact", { ...data });
    };
    return (
        <>
            <Header auth={auth} />
            <Head title="Contact" />
            <div className="flex flex-col items-center gap-6 my-6">
                <h1 className="max-w-xl text-2xl font-bold my-6">
                    Contact page
                </h1>
                <h2 className="mx-6 text-center">
                    Please fill the form to send a message to the support:
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col items-center p-6 w-full"
                >
                    <div className="flex flex-col gap-2 mb-6 w-full md:w-2/3">
                        <label htmlFor="email">Your email address</label>
                        <input
                            className="border p-2 rounded-sm focus:outline-none focus:border-black"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="joe@mail.com"
                            required
                            {...register("email")}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-6 w-full md:w-2/3">
                        <label htmlFor="subject">Subject</label>
                        <input
                            className="border p-2 rounded-sm focus:outline-none focus:border-black"
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="assistance for an order..."
                            minLength={5}
                            maxLength={30}
                            required
                            {...register("subject")}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-6 w-full md:w-2/3">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="border p-2 rounded-sm focus:outline-none focus:border-black"
                            type="text"
                            name="message"
                            id="message"
                            placeholder="please I need help!"
                            max={300}
                            required
                            {...register("message")}
                        />
                    </div>
                    <button
                        className="bg-black text-white px-4 py-2 rounded-sm w-full md:w-2/3"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    );
}
