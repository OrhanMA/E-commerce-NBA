import { useToast } from "./ui/use-toast";
import { Toaster } from "@/Components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
export function ProductCard({ product }) {
    const { toast } = useToast();
    return (
        <div className="w-4/5 sm:w-2/5 lg:w-1/4  m-2   flex flex-col items-start gap-4 ">
            <Toaster />
            <div className="w-full flex justify-center bg-white rounded-md">
                <img
                    className="my-6"
                    width={200}
                    src={`/${product.image_path}`}
                    alt={product.name}
                />
            </div>
            <p className="text-xl font-bold">{product.name}</p>
            <p className="text-lg text-gray-500">{product.description}</p>
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
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(product.id);
                        toast({
                            variant: "success",
                            title: `${product.name} added successfully to the cart !`,
                            description: `Product added to the cart. Click on 'check cart' to see all your products.`,
                            action: (
                                <ToastAction altText="Try again">
                                    Try again
                                </ToastAction>
                            ),
                        });
                    }}
                    className="bg-black text-white px-6 py-2 font-semibold"
                >
                    Buy
                </button>
            </div>
        </div>
    );
}
