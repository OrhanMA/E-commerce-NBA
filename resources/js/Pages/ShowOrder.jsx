import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
export default function SeeOrders({ auth, order }) {
    const newOrder = order[0];
    console.log(newOrder);
    return (
        <>
            <Header auth={auth} />
            <Head title={`Your order n°${newOrder.id}`} />
            <h1 className="max-w-xl">Your placed order</h1>
            <div>
                <p>Order id:{newOrder.id}</p>
                <p>{newOrder.total_price}</p>
                <p>{newOrder.delivery_method.name}</p>
                <p>{newOrder.paiement_method.name}</p>
                <p>{newOrder.created_at}</p>
                {newOrder.products.map((product, index) => {
                    return (
                        <div key={index}>
                            <p>item: {product.name}</p>
                            <p>quantity: {product.pivot.quantity}</p>
                        </div>
                    );
                })}
            </div>
            <div>Envoyer un message au support:</div>
        </>
    );
}
