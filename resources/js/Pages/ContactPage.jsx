import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";

export default function ContactPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        await router.post("/contact", { ...data });
    };
    return (
        <div>
            <Head title="Contact" />
            <h1>Contact page</h1>
            <h2>Please fill the form to send a message to the support:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Your email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="joe@mail.com"
                        required
                        {...register("email")}
                    />
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input
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
                <div>
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="please I need help!"
                        max={300}
                        required
                        {...register("message")}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
