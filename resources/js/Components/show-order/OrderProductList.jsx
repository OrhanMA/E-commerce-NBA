export default function OrderProductList({ newOrder }) {
    return (
        <ul className="flex flex-col gap-6 my-6">
            {newOrder.products.map((product, index) => {
                return (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-4 border-b pb-6 last:border-none"
                    >
                        <img
                            src={`/${product.image_path}`}
                            alt={`image for product:${product.name}`}
                            className="h-[50px] max-w-1/3"
                        />
                        <p className="font-semibold w-1/3">{product.name}</p>
                        <p>x{product.pivot.quantity}</p>
                    </div>
                );
            })}
        </ul>
    );
}
