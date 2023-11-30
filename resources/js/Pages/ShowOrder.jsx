import { Head, Link } from "@inertiajs/react";
import Header from "@/Layouts/Header";
export default function SeeOrders({ auth, order }) {
    const newOrder = order[0];
    console.log(newOrder);
    return (
        <div className="dark:bg-zinc-900 dark:text-gray-200 min-h-screen ">
            <Header auth={auth} />
            <Head title={`Your order n°${newOrder.id}`} />
            <div className="flex flex-col items-center my-6">
                <h1 className="max-w-xl text-2xl font-bold mb-6">
                    Your placed order
                </h1>
                <Link
                    href="/contact"
                    className="hover:text-blue-900 dark:hover:text-zinc-400 underline"
                >
                    Click here to contact the support
                </Link>
                <div className="border dark:bg-zinc-700 dark:border-gray-400 rounded-md p-6 flex flex-col gap-6 m-6 md:w-2/3">
                    <div className="flex flex-col gap-2">
                        <p>
                            Order n°{" "}
                            <span className="font-semibold">{newOrder.id}</span>
                        </p>
                        <p>
                            <span className="font-semibold">total: </span>
                            {newOrder.total_price}$
                        </p>
                        <p>
                            <span className="font-semibold">shipping: </span>
                            {newOrder.delivery_method.name}
                        </p>
                        <p>
                            <span className="font-semibold">paid by: </span>
                            {newOrder.paiement_method.name}
                        </p>
                        <p>
                            <span className="font-semibold">placed on: </span>
                            {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZone: "UTC",
                            }).format(new Date(newOrder.created_at))}
                        </p>
                    </div>
                    <ul className="flex flex-col gap-6 my-6">
                        {newOrder.products.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-between gap-4 border-b pb-6 last:border-none"
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
    );
}
