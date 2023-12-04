import OrderProductList from "./OrderProductList";

export default function OrderPlacedRecap({
    order,
    paiementMethodName,
    deliveryMethodName,
}) {
    return (
        <div className="border rounded-md dark:bg-zinc-700 p-6 flex flex-col gap-6 m-6 md:w-2/3">
            <div className="flex flex-col gap-2">
                <h2>
                    Order n° <span className="font-semibold">{order.id}</span>
                </h2>
                <p>
                    <span className="font-semibold">total: </span>
                    {order.total_price}$
                </p>
                <p>
                    <span className="font-semibold">shipping: </span>
                    {deliveryMethodName}
                </p>
                <p>
                    <span className="font-semibold">paid by: </span>
                    {paiementMethodName}
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
                        timeZone: "UTC",
                    }).format(new Date(order.created_at))}
                </p>
            </div>
            <OrderProductList order={order} />
        </div>
    );
}
