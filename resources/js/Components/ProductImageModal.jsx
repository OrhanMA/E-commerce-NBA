import PrimaryButton from "./PrimaryButton";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogFooter,
    DialogDescription,
} from "./ui/dialog";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

import { Link } from "@inertiajs/react";

export default function ProductImageModal({ product, children, className }) {
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
        <div
            className={`${className} w-full flex justify-center bg-white rounded-md border`}
        >
            <Dialog>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent className="max-w-[350px] sm:max-w-[525px] lg:max-w-[700px] flex flex-col items-center gap-6 py-12">
                    <DialogHeader>
                        <DialogTitle className="text-2xl md:text-3xl  text-center dark:text-white">
                            {product.name}
                        </DialogTitle>
                        <DialogDescription className="text-lg ">
                            {product.description}
                        </DialogDescription>
                        <div className="flex justify-center">
                            <img
                                className="w-[250px] sm:w-[300px] md:w-[350px] rounded-md p-4"
                                src={`/${product.image_path}`}
                                alt={product.name}
                            />
                        </div>
                    </DialogHeader>
                    <DialogFooter>
                        <PrimaryButton onClick={addToCart}>
                            Add to cart
                        </PrimaryButton>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
