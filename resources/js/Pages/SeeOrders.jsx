import { Link, Head } from "@inertiajs/react";

export default function SeeOrders({ orders }) {
    console.log(orders);
    return (
        <>
            <Head title="Your orders" />
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
    );
}
