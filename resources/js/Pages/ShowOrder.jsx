import { Head, Link } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import Footer from "@/Components/Footer";
import MainInfo from "@/Components/show-order/MainInfo";
import OrderProductList from "@/Components/show-order/OrderProductList";

export default function SeeOrders({ auth, order }) {
    const newOrder = order[0];
    return (
        <div className="dark:bg-zinc-900 dark:text-gray-200 min-h-screen ">
            <Header auth={auth} />
            <Head title={`Your order n°${newOrder.id}`} />
            <div className="flex flex-col items-center my-6 min-h-screen">
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
                    <MainInfo newOrder={newOrder} />
                    <OrderProductList newOrder={newOrder} />
                </div>
            </div>
            <Footer auth={auth} />
        </div>
    );
}
