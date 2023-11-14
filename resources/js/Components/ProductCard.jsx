import { useToast } from "./ui/use-toast";
import { Toaster } from "@/Components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { Link } from "@inertiajs/react";
export function ProductCard({ product }) {
    const { toast } = useToast();
    const addToCart = () => {
        // Get existing cart data from local storage or initialize an empty array
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product is already in the cart
        const existingProduct = existingCart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            // If the product is already in the cart, increment the quantity
            existingProduct.quantity += 1;
        } else {
            // If the product is not in the cart, add it with a quantity of 1
            existingCart.push({ ...product, quantity: 1 });
        }

        // Save the updated cart back to local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // Show a toast notification
        toast({
            variant: "success",
            title: `${product.name} added successfully to the cart !`,
            description: `Click on 'check cart' to see all your products.`,
            action: (
                <Link href={"/cart"}>
                    <ToastAction altText="See cart">See cart</ToastAction>
                </Link>
            ),
        });

        fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document.querySelector(
                    'meta[name="csrf-token"]'
                ).content,
            },
            body: JSON.stringify(existingCart),
        });
    };
    return (
        <div className="w-4/5 sm:w-2/5 lg:w-1/4  m-2   flex flex-col items-start bg-gray-200 bg-opacity-40 p-6 gap-4 ">
            <Toaster />
            <div className="w-full flex justify-center bg-white rounded-md">
                <img
                    className="my-6"
                    width={200}
                    src={`/${product.image_path}`}
                    alt={product.name}
                />
            </div>
            <p className="h-[50px] text-xl font-bold">{product.name}</p>
            <p className=" text-lg text-gray-500 h-[50px]">
                {product.description}
            </p>
            <div className="flex items-center gap-4">
                <p className="bg-slate-200 text-sm text-gray-500 px-2 rounded-md">
                    {product.category_name}
                </p>
                <p className="bg-slate-200 text-sm text-gray-500 px-2 rounded-md">
                    {product.subcategory_name}
                </p>
            </div>

            <div className="mt-4 flex items-center w-full justify-between">
                <p className="text-lg font-bold ">{product.price}€</p>
                <button
                    onClick={addToCart}
                    className="bg-black text-white px-6 py-2 font-semibold"
                >
                    Buy
                </button>
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(product.id);
                        toast({
                            variant: "success",
                            title: `${product.name} added successfully to the cart !`,
                            description: `Click on 'check cart' to see all your products.`,
                            action: (
                                <ToastAction altText="See cart">
                                    See cart
                                </ToastAction>
                            ),
                        });
                    }}
                    className="bg-black text-white px-6 py-2 font-semibold"
                >
                    Buy
                </button> */}
            </div>
        </div>
    );
}
