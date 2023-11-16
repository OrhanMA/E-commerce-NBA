import { Link, Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
export default function SeeOrders({ auth, orders }) {
    // console.log(orders);
    return (
        <>
            <Header auth={auth} />
            <Head title="My orders" />
            {orders.length > 0 ? (
                <div className="flex flex-col items-center my-12">
                    <h1 className="max-w-xl text-2xl font-bold">My orders</h1>
                    <ul className="my-6 flex flex-col md:flex-row md:flex-wrap">
                        {orders.map((order) => {
                            return (
                                <div
                                    key={order.id}
                                    className="flex flex-col gap-2 border p-6 m-4"
                                >
                                    <p>
                                        Order n°{" "}
                                        <span className="font-semibold">
                                            {order.id}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            total:{" "}
                                        </span>
                                        {order.total_price}$
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            shipping:{" "}
                                        </span>
                                        {order.delivery_method.name}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            paid by:{" "}
                                        </span>
                                        {order.paiement_method.name}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            placed on:{" "}
                                        </span>
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
                                        className="text-center py-2 bg-black text-white mt-2"
                                        href={`/order/${order.id}`}
                                    >
                                        see order details
                                    </Link>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-[50vh]">
                    <h1 className="max-w-xl font-bold text-2xl lg:text-4xl mb-6">
                        You don't have any orders yet.
                    </h1>
                    <Link
                        href="/products"
                        className="text-lg rounded-md hover:text-blue-500 hover:border-blue-500 duration-200 px-4 py-2 border border-black"
                    >
                        Go shoppping now
                    </Link>
                </div>
            )}
        </>
    );
}
