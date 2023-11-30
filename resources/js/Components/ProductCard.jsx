import { useToast } from "./ui/use-toast";
import { Toaster } from "@/Components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
export function ProductCard({ product }) {
    const { toast } = useToast();

    const addToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = existingCart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));

        toast({
            variant: "success",
            title: `${product.name} added successfully to the cart !`,
            action: (
                <Link href={"/cart"}>
                    <ToastAction altText="See cart">cart</ToastAction>
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
        <>
            <Toaster />
            <div className="w-4/5 sm:w-2/5 lg:w-1/4  m-2 hover:scale-105 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-500 duration-200  flex flex-col items-start rounded-md bg-gray-200 bg-opacity-40 p-6 gap-4 ">
                <div className="w-full flex justify-center bg-white rounded-md">
                    <img
                        className="my-6"
                        width={200}
                        src={`/${product.image_path}`}
                        alt={product.name}
                    />
                </div>
                <p className="h-[50px] dark:text-white text-lg font-bold">
                    {product.name}
                </p>
                <p className="text-md text-gray-500 dark:text-gray-200 h-[50px]">
                    {product.description}
                </p>
                <div className="flex items-center gap-4">
                    <p className="bg-slate-200 text-sm text-gray-500 dark:text-gray-200 px-2 rounded-md">
                        {product.category_name}
                    </p>
                    <p className="bg-slate-200 text-sm text-gray-500 dark:text-gray-200 px-2 rounded-md">
                        {product.subcategory_name}
                    </p>
                </div>

                <div className="mt-4 flex items-center w-full justify-between">
                    <p className="text-lg dark:text-white font-bold ">
                        {product.price}$
                    </p>
                    <PrimaryButton onClick={addToCart}>Buy</PrimaryButton>
                </div>
            </div>
        </>
    );
}
