export default function CheckoutProductCard({ product }) {
    return (
        <div className="flex items-center gap-6  border-b pb-6 last:border-none">
            <p className="font-bold w-2/3">{product.name}</p>
            <p>x{product.quantity}</p>
            <p>{product.quantity * product.price}$</p>
        </div>
    );
}
