import { useToast } from "./ui/use-toast";
import { Toaster } from "@/Components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import ProductImageModal from "./ProductImageModal";

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
    };
    return (
        <>
            <Toaster />
            <div className="w-[90%] sm:w-2/5 lg:w-1/4 xl:w-1/5 m-6 hover:scale-105 hover:bg-gray-50 bg-gray-200/20  dark:bg-zinc-700 dark:hover:bg-zinc-600 duration-200  flex flex-col items-center sm:items-start rounded-md border border-opacity-40 dark:border-0 dark:hover:border dark:hover:border-gray-200 hover:border-black/40 bg-opacity-40 p-6 sm:gap-4 group">
                <ProductImageModal
                    className="group-hover:border-black/40 duration-200"
                    product={product}
                >
                    <img
                        className="my-6"
                        width={200}
                        src={`/${product.image_path}`}
                        alt={product.name}
                    />
                </ProductImageModal>
                <p className="h-[50px] dark:text-white text-lg pt-4 sm:pt-0">
                    {product.name}
                </p>
                <p className="hidden sm:block text-md text-gray-500 dark:text-gray-200  h-[50px]">
                    {product.description}
                </p>
                {product.stock > 0 ? (
                    <p
                        className={`hidden md:block mt-8 md:mt-4 ${
                            product.stock <= 10
                                ? "text-red-500 dark:text-red-500"
                                : "text-gray-500 dark:text-gray-200"
                        } `}
                    >
                        <span>{product.stock}</span> in stock
                    </p>
                ) : (
                    <p className="text-red-500 dark:text-red-500 hidden md:block mt-8 md:mt-4">
                        out of stock
                    </p>
                )}
                {product.category_name && product.subcategory_name && (
                    <div className="hidden sm:flex sm:mt-4 items-center gap-4">
                        <p className="bg-gray-400/60 group-hover:bg-gray-500/50 duration-200 group-hover:dark:bg-gray-400/60 group-hover:dark:text-white text-sm text-white py-1.5 px-2 rounded-md dark:text-gray-200">
                            {product.category_name}
                        </p>
                        <p className="bg-gray-400/60 group-hover:bg-gray-500/50 duration-200 group-hover:dark:bg-gray-400/60 group-hover:dark:text-white text-sm text-white py-1.5 px-2 rounded-md dark:text-gray-200">
                            {product.subcategory_name}
                        </p>
                    </div>
                )}

                <div className="mt-6 flex items-center w-full justify-evenly gap-6 sm:gap-0 sm:justify-between">
                    <p className="text-lg dark:text-white font-bold ">
                        {product.price}$
                    </p>
                    <PrimaryButton
                        disabled={
                            product.stock <= 0 ||
                            product.stock <= getQuantityInCart(product.id)
                        }
                        onClick={addToCart}
                        className="disabled:cursor-not-allowed"
                    >
                        Buy
                    </PrimaryButton>
                </div>
            </div>
        </>
    );
}

function getQuantityInCart(productId) {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = existingCart.find((item) => item.id === productId);
    return existingProduct ? existingProduct.quantity : 0;
}
