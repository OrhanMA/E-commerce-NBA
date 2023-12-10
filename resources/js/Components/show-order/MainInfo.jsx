export default function MainInfo({ newOrder }) {
    return (
        <div className="flex flex-col gap-2">
            <p className="border-b border-gray-500 pb-2">
                Order n° <span className="font-semibold">{newOrder.id}</span>
            </p>
            <p className="border-b border-gray-500 pb-2">
                <span className="font-semibold">total: </span>
                {newOrder.total_price}$
            </p>
            <p className="border-b border-gray-500 pb-2">
                <span className="font-semibold">shipping: </span>
                {newOrder.delivery_method.name}
            </p>
            <p className="border-b border-gray-500 pb-2">
                <span className="font-semibold">paid by: </span>
                {newOrder.paiement_method.name}
            </p>
            <p className="border-b border-gray-500 pb-2">
                <span className="font-semibold">placed on: </span>
                {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZone: "UTC",
                }).format(new Date(newOrder.created_at))}
            </p>
        </div>
    );
}
