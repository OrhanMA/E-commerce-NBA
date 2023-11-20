import { Link } from "@inertiajs/react";
export default function OrderComponent({ order }) {
    return (
        <div className="flex bg-gray-100 flex-col gap-2 border p-6 m-4">
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
                className="text-center py-2 bg-white  hover:bg-black hover:text-white duration-200 rounded-md mt-2"
                href={`/order/${order.id}`}
            >
                order details
            </Link>
        </div>
    );
}
