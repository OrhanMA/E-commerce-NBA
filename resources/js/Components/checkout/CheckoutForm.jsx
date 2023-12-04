import PrimaryButton from "../PrimaryButton";

export default function CheckoutForm({
    register,
    handleSubmit,
    onSubmit,
    orderInProcess,
}) {
    return (
        <div className="w-full sm:w-1/2 flex flex-col items-center">
            <div className="w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col items-center gap-4 text-center"
                >
                    <label
                        required
                        className="flex w-full flex-col items-center gap-2"
                    >
                        Paiement Method:
                        <select
                            name="paiementMethod"
                            {...register("paiementMethod")}
                            className="p-2 w-2/3 lg:w-2/3 dark:text-black  bg-gray-100 rounded-sm"
                        >
                            <option value="1">Card</option>
                            <option value="2">Cash</option>
                            <option value="3">Transfert</option>
                        </select>
                    </label>
                    <br />
                    <label
                        required
                        className="flex w-full flex-col items-center gap-2"
                    >
                        Delivery Method:
                        <select
                            name="deliveryMethod"
                            {...register("deliveryMethod")}
                            className="p-2 w-2/3 lg:w-2/3 dark:text-black  bg-gray-100 rounded-sm"
                        >
                            <option value="1">Standard shipping</option>
                            <option value="2">Express shipping</option>
                            <option value="3">Click&collect</option>
                        </select>
                    </label>
                    <br />
                    <PrimaryButton
                        type="submit"
                        className="dark:bg-zinc-700 w-2/3 flex justify-center disabled:cursor-not-allowed"
                        disabled={orderInProcess === true ? true : false}
                    >
                        Place order
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}
