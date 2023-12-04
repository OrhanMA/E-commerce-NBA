import PrimaryButton from "../PrimaryButton";

export default function QuantityButtons({
    handleDecrement,
    handleIncrement,
    handleDeletion,
}) {
    const buttons = [
        {
            style: "bg-green-700 hover:bg-green-500",
            onClick: handleIncrement,
            sign: "+",
        },
        {
            style: "bg-red-700 hover:bg-red-500",
            onClick: handleDecrement,
            sign: "-",
        },
        {
            style: "bg-black hover:bg-gray-600",
            onClick: handleDeletion,
            sign: "X",
        },
    ];
    return (
        <div className="flex items-center gap-6">
            {buttons.map((button, index) => {
                return (
                    <PrimaryButton
                        key={index}
                        className={`flex justify-center items-center p-1 w-[25px] h-[25px] rounded text-white ${button.style}`}
                        onClick={button.onClick}
                    >
                        {button.sign}
                    </PrimaryButton>
                );
            })}
        </div>
    );
}
