import { Link, Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import OrderComponent from "@/Components/OrderComponent";
import Footer from "@/Components/Footer";
export default function SeeOrders({ auth, orders }) {
    return (
        <div className="dark:bg-zinc-900">
            <Header auth={auth} />
            <Head>
                <title>My orders</title>
                <meta
                    name={`My orders page`}
                    content={`A page to see all orders you made on JerseyShop!`}
                />
            </Head>
            {orders.length > 0 ? (
                <div className="dark:bg-zinc-900 p-4 sm:p-8 bg-gray-50 shadow sm:rounded-lg">
                    <h1 className="max-w-xl text-2xl font-bold dark:text-gray-200">
                        My orders
                    </h1>
                    <ul className="my-6 flex flex-col items-center justify-center md:flex-row md:flex-wrap">
                        {orders.map((order) => {
                            return (
                                <OrderComponent order={order} key={order.id} />
                            );
                        })}
                    </ul>
                </div>
            ) : (
                <BackupOrder />
            )}
            <Footer auth={auth} />
        </div>
    );
}

function BackupOrder() {
    return (
        <div className="flex flex-col items-center justify-center h-[50vh]">
            <h1 className="max-w-xl font-bold text-2xl lg:text-4xl mb-6 dark:text-gray-200">
                You don't have any orders yet.
            </h1>
            <Link
                href="/products"
                className="text-lg dark:text-gray-200 rounded-md hover:text-blue-500 hover:border-blue-500 duration-200 px-4 py-2 border border-black"
            >
                Go shoppping now
            </Link>
        </div>
    );
}
