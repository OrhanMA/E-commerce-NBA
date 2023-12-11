import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogDescription,
} from "./ui/dialog";

export default function ProductImageModal({ product, children, className }) {
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
                </DialogContent>
            </Dialog>
        </div>
    );
}
