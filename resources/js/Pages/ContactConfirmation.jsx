import { Head, Link } from "@inertiajs/react";
export default function () {
    return (
        <div className="bg-green-300 m-8">
            <Head title="Email confirmed" />
            <h1 className="text-2xl font-bold text-green-600">Message sent</h1>
            <p>Your message has been successfuly sent to the support.</p>
            <p>We'll get back to you ASAP</p>
            <Link className="text-red-500" href="/">
                Go back to landing page
            </Link>
        </div>
    );
}
