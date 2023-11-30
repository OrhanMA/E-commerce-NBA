import { Link } from "@inertiajs/react";
export default function OrderComponent({ order }) {
    return (
        <div className="flex flex-col gap-2 border hover:scale-105 duration-150 hover:bg-gray-200 hover:border-gray-300 bg-white p-6 m-4">
            <p>
                Order n° <span className="font-semibold">{order.id}</span>
            </p>
            <p>
                <span className="font-semibold">total: </span>
                {order.total_price}$
            </p>
            <p>
                <span className="font-semibold">shipping: </span>
                {order.delivery_method.name}
            </p>
            <p>
                <span className="font-semibold">paid by: </span>
                {order.paiement_method.name}
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
                    timeZone: "UTC", // Assuming your date string is in UTC
                }).format(new Date(order.created_at))}
            </p>
            <Link
                className="text-center py-2 bg-gray-300 hover:bg-black text-white duration-150 rounded-md mt-2"
                href={`/order/${order.id}`}
            >
                Order details
            </Link>
        </div>
    );
}
