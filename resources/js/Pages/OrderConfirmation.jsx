import Header from "@/Layouts/Header";
import React, { useEffect } from "react";
export default function OrderConfirmation({
    auth,
    order,
    paiementMethodName,
    deliveryMethodName,
    orderProducts,
}) {
    useEffect(() => {
        localStorage.removeItem("cart");
    }, []);

    return (
        <>
            <Header auth={auth} />
            <h1>Order Confirmation</h1>
            <p>Order ID: {order.id}</p>

            <h2>Products Ordered:</h2>
            <ul>
                {orderProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - Quantity: {product.pivot.quantity}
                    </li>
                ))}
            </ul>

            <p>Total Price: {order.total_price}€</p>
            <p>Delivery Method: {deliveryMethodName}</p>
            <p>Payment Method: {paiementMethodName}</p>
        </>
    );
}
