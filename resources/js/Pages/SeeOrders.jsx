import { Link, Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
export default function SeeOrders({ auth, orders }) {
    console.log(orders);
    return (
        <>
            <Header auth={auth} />
            <Head title="Your orders" />
            {orders.length > 0 ? (
                <>
                    <h1 className="max-w-xl">Your placed orders</h1>
                    {orders.map((order) => {
                        return (
                            <div key={order.id}>
                                <p>Order id:{order.id}</p>
                                <p>{order.total_price}</p>
                                <p>{order.delivery_method.name}</p>
                                <p>{order.paiement_method.name}</p>
                                <p>{order.created_at}</p>
                                <Link href={`/order/${order.id}`}>
                                    see order details
                                </Link>
                            </div>
                        );
                    })}
                </>
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
