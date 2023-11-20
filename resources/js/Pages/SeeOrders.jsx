import { Link, Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import OrderComponent from "@/Components/OrderComponent";
export default function SeeOrders({ auth, orders }) {
    return (
        <>
            <Header auth={auth} />
            <Head title="My orders" />
            {orders.length > 0 ? (
                <div className="flex flex-col items-center my-12">
                    <h1 className="max-w-xl text-2xl font-bold">My orders</h1>
                    <ul className="my-6 flex flex-col items-center justify-center md:flex-row md:flex-wrap">
                        {orders.map((order) => {
                            return (
                                <OrderComponent order={order} key={order.id} />
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
