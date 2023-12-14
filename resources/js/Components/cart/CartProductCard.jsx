import { useState } from "react";
import QuantityButtons from "./QuantityButtons";

export default function CartProductCard({ product, handleProductDeletion }) {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleIncrement = () => {
        if (quantity + 1 <= product.stock) {
            setQuantity(quantity + 1);
            updateCart(product.id, quantity + 1);
        } else {
            alert("Stock limit reached for", product.name);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            updateCart(product.id, quantity - 1);
        } else if (quantity === 1) {
            handleProductDeletion(product);
        }
    };

    const handleDeletion = () => {
        handleProductDeletion(product);
    };

    const updateCart = (productId, updatedQuantity) => {
        const updatedCart = JSON.parse(localStorage.getItem("cart")).map(
            (item) =>
                item.id === productId
                    ? { ...item, quantity: updatedQuantity }
                    : item
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="dark:text-gray-200 w-full flex flex-col md:flex-row items-center last:border-none border-b dark:border-zinc-500 pb-6 gap-6">
            <img
                className="max-h-[100px] rounded-md"
                src={`/${product.image_path}`}
                alt="product image"
            />
            <p className="font-semibold">{product.name}</p>
            <div className="flex flex-col sm:flex-row items-center gap-6 md:ml-auto">
                <div className="flex gap-4">
                    <p className="flex items-center gap-2">
                        quantity:{" "}
                        <span className="font-semibold dark:text-white">
                            {quantity}
                        </span>
                    </p>
                    {" - "}
                    <p className="flex items-center gap-2">
                        price:
                        <span className="font-semibold dark:text-white">
                            {quantity * product.price}$
                        </span>
                    </p>
                </div>
                <QuantityButtons
                    {...{ handleDecrement, handleIncrement, handleDeletion }}
                />
            </div>
        </div>
    );
}
