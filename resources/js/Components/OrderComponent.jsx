import { Link } from "@inertiajs/react";
export default function OrderComponent({ order }) {
    return (
        <div className="flex flex-col gap-2 rounded-md border hover:scale-105 duration-150 dark:bg-zinc-700 dark:border-zinc-500 hover:bg-gray-200 hover:border-gray-300 dark:hover:bg-zinc-900 bg-white p-6 m-4">
            <p className="dark:text-gray-200">
                Order n°{" "}
                <span className="font-semibold dark:text-gray-400 ">
                    {order.id}
                </span>
            </p>
            <p className="dark:text-gray-200">
                <span className="font-semibold dark:text-gray-400 ">
                    total:{" "}
                </span>
                {order.total_price}$
            </p>
            <p className="dark:text-gray-200">
                <span className="font-semibold dark:text-gray-400 ">
                    shipping:{" "}
                </span>
                {order.delivery_method.name}
            </p>
            <p className="dark:text-gray-200">
                <span className="font-semibold dark:text-gray-400 ">
                    paid by:{" "}
                </span>
                {order.paiement_method.name}
            </p>
            <p className="dark:text-gray-200">
                <span className="font-semibold dark:text-gray-400 ">
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
            <Link
                className="text-center py-2 dark:bg-zinc-600 dark:hover:bg-zinc-400 bg-gray-300 hover:bg-black text-white duration-150 rounded-md mt-2"
                href={`/order/${order.id}`}
            >
                Order details
            </Link>
        </div>
    );
}
