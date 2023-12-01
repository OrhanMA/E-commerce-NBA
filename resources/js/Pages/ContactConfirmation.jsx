import { Head, Link } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import Footer from "@/Components/Footer";
export default function ContactConfirmation({ auth }) {
    return (
        <div className="dark:bg-zinc-900 min-h-screen">
            <Header auth={auth} />
            <Head title="Email confirmed" />
            <div className=" dark:text-gray-200 min-h-screen ">
                <div className="bg-green-500 dark:bg-green-600 m-8 p-12">
                    <h1 className="text-2xl font-bold mb-6">Message sent</h1>
                    <p className="font-semibold mb-6">
                        Your message has been successfuly sent to the support.{" "}
                        <br /> We'll get back to you ASAP!
                    </p>
                    <Link className="underline hover:text-white" href="/">
                        Go back to landing page
                    </Link>
                </div>
            </div>
            <Footer auth={auth} />
        </div>
    );
}
