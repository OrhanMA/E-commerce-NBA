import { Head, Link } from "@inertiajs/react";
import Header from "@/Layouts/Header";
export default function ContactConfirmation({ auth }) {
    return (
        <>
            <Header auth={auth} />
            <div className="bg-green-500 m-8 p-12">
                <Head title="Email confirmed" />
                <h1 className="text-2xl font-bold mb-6">Message sent</h1>
                <p className="font-semibold mb-6">
                    Your message has been successfuly sent to the support.{" "}
                    <br /> We'll get back to you ASAP!
                </p>
                <Link className="underline hover:text-white" href="/">
                    Go back to landing page
                </Link>
            </div>
        </>
    );
}
