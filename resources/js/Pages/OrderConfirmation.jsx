// OrderConfirmation.jsx

// OrderConfirmation.jsx

import React from "react";

export default function OrderConfirmation({
    order,
    paiementMethodName,
    deliveryMethodName,
    orderProducts,
}) {
    return (
        <div>
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
        </div>
    );
}
